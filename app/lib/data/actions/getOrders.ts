import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
export const getOrders = async (userId:string) => {
   try {
    //    
           const orders = await prisma.order.findMany({where:{userId:userId}, include: { product: true, stages: true }, orderBy: { createdAt: "asc" } })
           prisma.$disconnect()
          if(orders){
              return orders
            }
            return [];
   } catch (error) {
       prisma.$disconnect()
   }
}