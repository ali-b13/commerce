import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
   
    apiVersion: "2023-10-16",
    appInfo: {
        name: "commerce app",
        url: "https://commerce-nocapznay-ali-b13.vercel.app/",
    },
});