import  {getServerSession}  from "next-auth";
import { authConfig } from "@/authConfig";
import { PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient()

  const getUser=async()=>{
   try {
     const session = await getServerSession(authConfig);
     if(session){
     const user :any= await prisma.user.findUnique({ where: { email: session.user?.email, name: session.user?.name } })
     if(user){
       prisma.$disconnect()
       return user
     }
     prisma.$disconnect()
     return null
    }
     prisma.$disconnect()
     return null
   } catch (error) {
     console.log(error)
   }
}
export default getUser