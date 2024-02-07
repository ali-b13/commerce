import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
import getUser from './getUser'
export const getOrders = async () => {
    const user =await getUser()
    if(user){
        const orders = await prisma.order.findMany({where:{userId:user.id},include:{product:true,stages:true}, orderBy: { createdAt: "asc" } })
        prisma.$disconnect()
        return orders

    }
    prisma.$disconnect()
    return []
}