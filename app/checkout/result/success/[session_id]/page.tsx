import Head from 'next/head';
import Link from 'next/link';
import type { Stripe } from "stripe";
import { stripe } from "@/app/lib/stripe";
import { notFound } from 'next/navigation';
export default async function successPage({
  searchParams,
}: {
  searchParams: { session_id: string };
}): Promise<JSX.Element> {


  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ["line_items", "payment_intent"],
    });

  const paymentIntent =await  checkoutSession.payment_intent as Stripe.PaymentIntent;
  console.log(paymentIntent,'payment intent')
  console.log("checout",checkoutSession)
  if(!paymentIntent.id){
    return notFound()
  }
  return (
    <div className="h-[86vh] flex flex-col justify-center items-center bg-blue-100">
      <Head>
        <title>Payment Successful</title>
        <meta name="description" content="Your payment was successful!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white w-[95%] md:w-[60%] p-12 rounded-lg  shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-green-600 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h1 className="text-3xl font-bold text-center text-green-600 mb-1">
          Payment Successful
        </h1>
        <p className='text-sm font-semibold text-center text-neutral-400 mb-4'>Payment id {paymentIntent.id}</p>
        <p className="text-lg text-center text-gray-700">
          Thank you for your payment.
        </p>
      </div>
        <Link href={"/"} className='bg-blue-500 text-white text-center rounded-lg p-2 mt-4 w-[70%] md:w-[30%] '>Go Back</Link>
    </div>
  );
}