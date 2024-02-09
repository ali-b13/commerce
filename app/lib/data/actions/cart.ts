import { PrismaClient } from '@prisma/client';
import getUser from './getUser';

const prisma = new PrismaClient()


export const getCart=async(cartId:string)=>{
    try {
        const user= await getUser()
        const cart = await prisma.cart.findFirst({
            where: { id: cartId },
            include: {
                lines: {
                    include: {
                        product: true,
                        ProductVariant: true  // Include the associated product variant
                    }
                }
            }
        });
        const { subtotalAmount, taxAmount, totalAmount }:any =await  calculateCartTotal(cart?.lines)

        prisma.$disconnect()
      return { products: cart?.lines, totalItems: cart?.lines.length || 0,cartId:cart?.id, user:user?.id,taxes: taxAmount, subtotalAmount,totalAmount}
   
    } catch (error) {
        console.log(error)
    }
}
export async function createCart(userId?: string) {
    try {
        const cart = await prisma.cart.create({
            data: {
                userId: userId,
            },
            select: {
                id: true,
            },
        });
        prisma.$disconnect()
        return cart;
    } catch (error: any) {
        throw new Error(`Failed to create cart: ${error.message}`);
    }
}

export async function addToCart(cartId: string, productId: string, quantity: number,variants:[]) {
    try {
        console.log(productId,'product id')
        console.log(cartId,'çart id')
        await prisma.cartLine.create({
            data: {
                quantity: quantity,
                productId: productId,
                cartId: cartId,
                // Connect or create variants
                ProductVariant: {
                    create: variants.map((variant: { name: string, value: string }) => ({
                        name: variant.name,
                        value: variant.value,
                       }))
                }
            },include:{ProductVariant:true}
        });
     await  prisma.$disconnect()
        // Optionally, you can return the updated cart with the added line
    } catch (error: any) {
        throw new Error(`Failed to add item to cart: ${error.message}`);
    }
}



export const removeItem=async(cartLineId:string)=>{
    try {
        // Find the cartLine and include the associated variants

        const cartLine = await prisma.cartLine.findUnique({
            where: { id: cartLineId },
            include: { ProductVariant: true }
        });

        // If cartLine is found
        if (cartLine) {
            // Delete associated variants
            for (const variant of cartLine.ProductVariant) {
                await prisma.productVariant.delete({ where: { id: variant.id } });
                console.log(`Variant with ID ${variant.id} deleted.`);
            }

            // Delete the cartLine
            await prisma.cartLine.delete({ where: { id: cartLineId } });
            console.log(`CartLine with ID ${cartLineId} deleted successfully.`);
        } else {
            console.log(`CartLine with ID ${cartLineId} not found.`);
        }
       await prisma.$disconnect()
    } catch (error: any) {
        throw new Error(`Failed to delete cartLine: ${error.message}`);
    }

}

export const updateCart = async (cartId: string, lineId:string,quantity:number)=>{
    try {
    if (quantity < 0) {
        throw new Error(`Quantity must be a positive integer.`);
    }

    // Find the cartLine
    const cartLine = await prisma.cartLine.findUnique({
        where: { id: lineId },
        include: { ProductVariant: true }
    });

    // If cartLine is found
    if (cartLine) {
        // Update the quantity of the cartLine
        await prisma.cartLine.update({
            where: { id: lineId },
            data: { quantity }
        });
        console.log(`Quantity of cartLine with ID ${lineId} updated to ${quantity}.`);

        // Optionally, you can update the quantity of the associated ProductVariant
        // Assuming that the variantId in the payload corresponds to the variantId in the cartLine
       await prisma.$disconnect()
        return { success: true, message: `Quantity updated successfully.` };
    } else {
        throw new Error(`CartLine with ID ${lineId} not found.`);
    }


} catch (error: any) {
    throw new Error(`Failed to update cartLine quantity: ${error.message}`);
}
}



 export async function calculateCartTotal(items:any) {
   
   try{

        // Calculate the subtotal amount by summing up the prices of all product variants in the cart
       const subtotalAmount = items.reduce((total:number, line:any) => {
           return total + (line.product?.price || 0) * line.quantity;
       }, 0);

        // Calculate the tax amount using the tax rate of 0.05
        const taxRate = 0.02;
    //    const taxAmount = Number(subtotalAmount) * taxRate;

        // Calculate the total amount by adding the subtotal and tax amounts
    //    const totalAmount = Number(subtotalAmount) + Number(taxAmount);

        return { taxAmount:0.00, totalAmount:subtotalAmount };
    } catch (error: any) {
        throw new Error(`Failed to calculate cart total: ${error.message}`);
    }
}