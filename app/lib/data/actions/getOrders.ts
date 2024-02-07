import prisma from '@/app/lib/prismaDB'
import getUser from './getUser'
export const getOrders = async () => {
    const user =await getUser()
    if(user){
        const orders = await prisma.order.findMany({where:{userId:user.id},include:{product:true,stages:true}, orderBy: { createdAt: "asc" } })
        return orders

    }
    return []
}