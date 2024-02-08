
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
    <div className="h-[80vh] flex flex-col justify-center items-center bg-blue-100">
      <div className='h-[50vh] shadow-md '>
        <title>Payment Failed</title>
        <meta name="description" content="Your payment was failed!" />
        <link rel="icon" href="/favicon.ico" />
      </div>

      <div className="bg-white w-[95%] md:w-[60%] p-12 rounded-lg  shadow-md">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className='text-red-600 text-center'
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="24"
        height="24"
        >
        <circle cx="12" cy="12" r="10" stroke-width="2" />
        <path d="M15 9l-6 6M9 9l6 6" />
        </svg>
        <h1 className="text-3xl font-bold text-center text-red-600 mb-1">
          Payment Failed
        </h1>
        <p className='text-sm font-semibold text-center text-red-400 mb-4'>Payment id {paymentIntent.id}</p>
        <p className="text-lg text-center text-gray-700">
          please try again .
        </p>
      </div>
        <Link href={"/"} className='bg-blue-500 text-white text-center rounded-lg p-2 mt-4 w-[70%] md:w-[30%] '>Go Back</Link>
    </div>
  );
}