import { getServerSession } from "next-auth";
import { authConfig } from "@/authConfig";
import prisma from '@/app/lib/prismaDB'

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