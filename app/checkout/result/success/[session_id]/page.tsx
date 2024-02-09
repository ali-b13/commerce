
import Link from 'next/link';
import type { Stripe } from "stripe";
import { stripe } from "@/app/lib/stripe";
import { notFound } from 'next/navigation';
export default async function successPage({
  params,
}: {
  params: { session_id: string };
}): Promise<JSX.Element> {


  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(params.session_id, {
      expand: ["line_items", "payment_intent"],
    });

  const paymentIntent =await  checkoutSession.payment_intent as Stripe.PaymentIntent;
  if(!paymentIntent.id){
    return notFound()
  }
  return (
    <div className=" bg-neutral-200 h-[75vh] flex flex-col justify-start items-center gap-12">
      <div className='h-full shadow-md '>
        <title>Payment Successful</title>
        <meta name="description" content="Your payment was successful!" />
        <link rel="icon" href="/favicon.ico" />
      </div>

      <div className="bg-white w-[95%] md:w-[60%] p-12 rounded-lg h-[50%] mb-4 shadow-md">
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
        <Link href={"/"} className='bg-blue-500 text-white text-center rounded-lg p-2 mb-4 w-[70%] md:w-[30%] '>Go Back</Link>
    </div>
  );
}