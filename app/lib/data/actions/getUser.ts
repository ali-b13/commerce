import { getServerSession } from "next-auth";
import { authConfig } from "@/authConfig";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

  const getUser=async()=>{
   try {
     const session = await getServerSession(authConfig);
     const user = await prisma.user.findUnique({ where: { email: session.user.email, name: session.user.name } })
     return user
   } catch (error) {
     console.log(error)
   }
}
export default getUser