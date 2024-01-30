import { ReadonlyURLSearchParams } from 'next/navigation';
import { Stripe, loadStripe } from '@stripe/stripe-js';

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
    const paramsString = params.toString();
    const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

    return `${pathname}${queryString}`;
};


let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    }
    return stripePromise;
};

export default getStripe;

export function formatAmountForDisplay(
    amount: number,
    currency: string,
): string {
    let numberFormat = new Intl.NumberFormat(["en-US"], {
        style: "currency",
        currency: currency,
        currencyDisplay: "symbol",
    });
    return numberFormat.format(amount);
}

export function formatAmountForStripe(
    amount: number,
    currency: string,
): number {
    let numberFormat = new Intl.NumberFormat(["en-US"], {
        style: "currency",
        currency: currency,
        currencyDisplay: "symbol",
    });
    const parts = numberFormat.formatToParts(amount);
    let zeroDecimalCurrency: boolean = true;
    for (let part of parts) {
        if (part.type === "decimal") {
            zeroDecimalCurrency = false;
        }
    }
    return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}