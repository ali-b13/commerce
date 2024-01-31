"use server";

import type { Stripe } from "stripe";
import { stripe } from "@/app/lib/stripe";

import { headers } from "next/headers";

import { CURRENCY } from "@/app/config";
import { formatAmountForStripe } from "@/app/lib/utils";
import { calculateCartTotal } from "./cart";

export async function createCheckoutSession(
    data: any,
): Promise<{ client_secret: string | null; url: string | undefined }> {
    const ui_mode = "hosted"
  
    const origin: string = headers().get("origin") as string;
   const {lineItems,totalAmount,taxAmount}= await calculateItems(data)
    const taxRate = await stripe.taxRates.create({display_name:"Tax",percentage:2.0,description:"2% tax rate",inclusive:false,jurisdiction:"Global"})
    const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create({
            mode: "payment",
            submit_type: "pay",
            tax_id_collection:{enabled:true},
            
            line_items: lineItems,
            
            ...(ui_mode === "hosted" && {
                
                success_url: `${origin}/checkout/result/success/{CHECKOUT_SESSION_ID}`,
                cancel_url: `${origin}/checkout/result/cancel/{CHECKOUT_SESSION_ID}`,
            }),
            ui_mode,
        });
    const CHECKOUT_SESSION_ID = checkoutSession.id;
    return {
        client_secret: checkoutSession.client_secret,
        url: checkoutSession.url?.replace("{CHECKOUT_SESSION_ID}", CHECKOUT_SESSION_ID),
    };
}

export async function createPaymentIntent(
    data: FormData,
): Promise<{ client_secret: string }> {
    const paymentIntent: Stripe.PaymentIntent =
        await stripe.paymentIntents.create({
            amount: formatAmountForStripe(
                Number(data.get("customDonation") as string),
                CURRENCY,
            ),
            automatic_payment_methods: { enabled: true },
            currency: CURRENCY,
        });

    return { client_secret: paymentIntent.client_secret as string };
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