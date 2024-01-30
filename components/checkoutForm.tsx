"use client";

import type Stripe from "stripe";

import React, { useState } from "react";

import { createCheckoutSession } from "@/app/lib/data/actions/stripe";
import getStripe from "@/app/lib/utils";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";

interface CheckoutFormProps {
  uiMode: Stripe.Checkout.SessionCreateParams.UiMode;
  data:any
}

export default function CheckoutForm(props: CheckoutFormProps): JSX.Element {
  const [loading] = useState<boolean>(false);
  
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const formAction = async (): Promise<void> => {
    const {uiMode} = props
    const { client_secret, url } = await createCheckoutSession(props.data);

    if (uiMode === "embedded") return setClientSecret(client_secret);

    window.location.assign(url as string);
  };

  return (
    <>
      <form action={formAction}>
        
        <button
          className="checkout-style-background"
          type="submit"
          disabled={loading}
        >
         Proceed to Checkout
        </button>
      </form>
      {clientSecret ? (
        <EmbeddedCheckoutProvider
          stripe={getStripe()}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      ) : null}
    </>
  );
}