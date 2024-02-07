"use server";

import type { Stripe } from "stripe";
import { stripe } from "@/app/lib/stripe";

import { headers } from "next/headers";

import { CURRENCY } from "@/app/config";
import { formatAmountForStripe } from "@/app/lib/utils";
import { calculateCartTotal } from "./cart";
import getUser from "./getUser";

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
export async function createCheckoutSession(
    data: any,
): Promise<{ client_secret: string | null; url: string | undefined }> {
  
    const ui_mode = "hosted"

    const origin: string = headers().get("origin") as string;
    const user=await getUser()
    const cart=await prisma.cart.update({where:{id:data.cartId},data:{userId:user?.id}})
    
    const {lineItems,totalAmount,taxAmount}= await calculateItems(data)
   const orderIds =await placeOrder(data)
    const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create({
            mode: "payment",
            submit_type: "pay",
            payment_intent_data: { metadata: { orderId: JSON.stringify(orderIds), cartId: JSON.stringify(cart?.id)}},
            tax_id_collection:{enabled:true},
            metadata: { orderIds: JSON.stringify(orderIds), cartId: JSON.stringify(data.cartId) },
            line_items: lineItems,
        
            ...(ui_mode === "hosted" && {
                
                success_url: `${origin}/checkout/result/success/{CHECKOUT_SESSION_ID}`,
                cancel_url: `${origin}/checkout/result/cancel/{CHECKOUT_SESSION_ID}`,
            }),
            ui_mode,
           
        });
       
    console.log("session",checkoutSession,'checkout')
    const CHECKOUT_SESSION_ID = checkoutSession.id;
    prisma.$disconnect()
    return {
        client_secret: checkoutSession.client_secret,
        url: checkoutSession.url?.replace("{CHECKOUT_SESSION_ID}", CHECKOUT_SESSION_ID),
    };
}


async function calculateItems(cart:any){

    const lineItems = cart.products.map((item:any )=> {
       
        return {
            quantity: item.quantity,
            price_data: {
                currency: item.product.currencyCode || 'USD',
                product_data: {
                    name: item.product.title, // Assuming 'title' is the name of the product
                },
                
                unit_amount: formatAmountForStripe(item.product.price, item.product.currencyCode || 'USD'),
            },
        };
    });
    const {totalAmount,taxAmount}=await calculateCartTotal(cart.products)
    return { lineItems ,totalAmount,taxAmount}
}





const placeOrder = async (data: any) => {
   const user=await getUser()
    const orderIds: string[] = [];
  console.log(data.products,'data')
    try {
        if (data) {
            for (const product of data.products) {
                console.log(product.ProductVariant,'variant')
                const order = await prisma.order.create({
                    data: {
                        name: product.product.title||"product name not set",
                        address: "random address",
                        productId: product.productId,
                        amount: Number(product.product.price*product.quantity),
                        quantity: product.quantity,
                        paid: "failed",
                        userId: user?.id,
                        orderProductVaraint: {
                            createMany: {
                                data: product.ProductVariant.map((option: any) => ({
                                    name: option.name,
                                    value: option.value,
                                })),
                            },
                        },
                        
                       
                        stages: { create: { name: "Placed", date: new Date } }
                    }
                });

                // Push the ID of the created order to the orderIds array
                orderIds.push(order.id);
                 const insertedOrder=await prisma.order.findUnique({where:{id:order.id},include:{orderProductVaraint:true}})
                console.log("success created order", insertedOrder);
            }
        }
    } catch (error) {
        console.log(error, 'error in placing order');
        throw error; // Rethrow the error to handle it in the calling function
    }

    return orderIds; //
}