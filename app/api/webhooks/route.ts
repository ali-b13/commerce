import type { Stripe } from "stripe";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
import { NextResponse } from "next/server";

import { stripe } from "@/app/lib/stripe";


export async function POST(req: Request) {
    let event: Stripe.Event;
    console.log(req.headers.get("stripe-signature"),'stripe signature')

    try {
        const body =await req.json()
        event = stripe.webhooks.constructEvent(
            body,
            req.headers.get("stripe-signature") as string,
            process.env.STRIPE_WEBHOOK_SECRET as string,
        );
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        // On error, log and return the error message.
        if (err! instanceof Error) console.log(err);
        console.log(`❌ Error message: ${errorMessage}`);
        return NextResponse.json(
            { message: `Webhook Error: ${errorMessage}` },
            { status: 400 },
        );
    }

    // Successfully constructed event.
    console.log("✅ Success:", event.id);

    const permittedEvents: string[] = [
        "checkout.session.completed",
        "payment_intent.succeeded",
        "payment_intent.payment_failed",
    ];

    if (permittedEvents.includes(event.type)) {
        let data;
        try {
            switch (event.type) {
                case "checkout.session.completed":
                    data = event.data.object as Stripe.Checkout.Session;
                    const payment_intent_id = data.payment_intent as string; // Contains a Payment Intent ID

                    // Do something with the address
                    console.log(`💰 CheckoutSession status: ${data.payment_status}`);
                    // console.log(data,'data in session',data)
                    break;
                case "payment_intent.payment_failed":
                    data = event.data.object as Stripe.PaymentIntent;
                  await prisma.order.deleteMany({where:{paid:"failed"}})
                    console.log(`❌ Payment failed: ${data.last_payment_error?.message}`);
                    break;
                case "payment_intent.succeeded":
                    data = event.data.object as Stripe.PaymentIntent;
                    console.log(data,'data')
                    const ids = JSON.parse(data.metadata.orderId)
                    await prisma.order.deleteMany({ where: { id: { notIn: ids }} })
                    await prisma.order.updateMany({where:{id:{in:ids}},data:{paid:"paid"}})
                    await prisma.order.deleteMany({where:{paid:"failed"}})
                    const cartId = JSON.parse(data.metadata.cartId)
                    if(cartId){
                     await prisma.cartLine.deleteMany({where:{cartId:cartId}})
                     }
      
                    break;
                default:
                    throw new Error(`Unhandled event: ${event.type}`);
            }
        } catch (error) {
            console.log(error);
            return NextResponse.json(
                { message: "Webhook handler failed" },
                { status: 500 },
            );
        }
    }
    // Return a response to acknowledge receipt of the event.
    return NextResponse.json({ message: "Received" }, { status: 200 });
}

