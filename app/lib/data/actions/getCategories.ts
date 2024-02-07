
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
export const getCategories = async () => {
    const categories = await prisma.category.findMany({orderBy:{createdAt:"asc"}})
    return categories
}
export const getThreeItemCategory = async () => {
    const categories = await prisma.category.findMany({ take:3})
    return categories
}

