
import prisma from '@/app/lib/prismaDB'
export const getCategories = async () => {
    const categories = await prisma.category.findMany({orderBy:{createdAt:"asc"}})
    return categories
}
export const getThreeItemCategory = async () => {
    const categories = await prisma.category.findMany({ take:3})
    return categories
}

