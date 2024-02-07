import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt'
import { NextResponse } from "next/server";
import {z} from 'zod'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
const FormSchema = z.object({
    name: z.string(),
    email: z.string({ invalid_type_error: "Please select a customer" }),
    password: z.string({ invalid_type_error: "Please select a customer" }),
   
})
export  async function POST(req: Request, res: Response) {
    const data=await req.json()
    const validatedFields = FormSchema.safeParse({
        name: data.name,
        email: data.email,
        password: data.password,
    });
    if (!validatedFields.success) {

        const errors= {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please Enter valid data.',
        };
        return NextResponse.json({ errors: validatedFields.error.flatten().fieldErrors, message:"Please Enter valid data"},{ status:422})

    }
    const { name, email, password } = validatedFields.data;

    const hashedPassword = await bcrypt.hash(password, 10);
    const existedUser=await prisma.user.findFirst({where:{email:email}})
     if(existedUser){
         
         return NextResponse.json({ message: "User is already exists with this email" },{status:400})
     }
   const user= await  prisma.user.create({
        data: {
            name,
            email,
            hashPassword: hashedPassword,
        },
    });
   if(user){
    
       return NextResponse.json({message:"got it",user:{name:name,email:email,password:password}})
   }

    return NextResponse.json({ message: "something went wrong please try again" }, { status: 400 })
}


