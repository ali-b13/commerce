import  {getServerSession}  from "next-auth";
import { authConfig } from "@/authConfig";
import { PrismaClient, User } from '@prisma/client';


  const getUser=async()=>{
   try {
     const session = await getServerSession(authConfig);
     if(session){
 
       return session.user
      
     }
     return null
    
   } catch (error) {
     console.log(error)
   }
}
export default getUser