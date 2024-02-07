"use server"
import { addToCart, createCart, getCart, removeItem, updateCart } from "@/app/lib/data/actions/cart";
import getUser from "@/app/lib/data/actions/getUser";
import { authConfig } from "@/authConfig";
import {  PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addItem=async(prevState: any, selectedVariant: string | undefined)=>{
   const user =await getUser()
  console.log(prevState)
  console.log(selectedVariant,'id')
    let cartId = cookies().get('cartId')?.value;
    let cart;

    if (cartId) {
        cart = await getCart(cartId);
    }

    if (!cartId || !cart) {
        cart = await createCart(user?.id);
        cartId = cart.id;
        cookies().set('cartId', cartId);
    }

    if (!selectedVariant) {
        return 'Missing product variant ID';
    }
     const {productId,selectedOptions}:any=selectedVariant
    try {
        await addToCart(cartId, productId, 1 , selectedOptions);
        revalidateTag('cart');
    } catch (e) {
        console.log(e)
        return 'Error adding item to cart';
    }
}


export async function deleteItem(prevState:any,cartLineId: string) {
    const cartId = cookies().get('cartId')?.value;

    if (!cartId) {
        return 'Missing cart ID';
    }

    try {
        await removeItem(cartLineId);
        revalidateTag('cart');
    } catch (e) {
        return 'Error removing item from cart';
    }
}

export async function updateItemQuantity(
    prevState: any,
    payload: {
        lineId: string;
        quantity: number;
    }
) {
    const cartId = cookies().get('cartId')?.value;

    if (!cartId) {
        return 'Missing cart ID';
    }

    const { lineId, quantity } = payload;

    try {
        if (quantity === 0) {
            await removeItem( lineId);
            revalidateTag('cart');
            return;
        }

        await updateCart(cartId,lineId,quantity);
        revalidateTag('cart');
    } catch (e) {
        return 'Error updating item quantity';
    }
}