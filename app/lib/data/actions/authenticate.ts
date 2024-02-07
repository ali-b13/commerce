"use server";
import prisma from "@/app/lib/prismaDB"
import bcrypt from "bcrypt"
import { signIn } from "next-auth/react";
 type DataType={
    data?:{
        email:string,
        password:string
    },
    type:string
 }
export const authenticateUser=async({type,data}:DataType)=>{
    console.log("got inside auth")
    if(type=="google"){
        await signIn("google");
    }else if(type=="credentials" && data){
        console.log("'goes to credentials ",data)
    const user= await  prisma.user.findUnique({where:{email:data.email}})
    if(user){
        const isEqualPassword = await bcrypt.compare(data.password, user.hashPassword || "")
        if(isEqualPassword){
            await signIn("credentials",{email:user.email,password:data.password})
        }
        return { error: { message: "Invalid credentials" } }
        
    }
        return { error: { message: "Invalid credentials" } }
    }

}