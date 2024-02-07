
export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    brand: string;
    stock: number;
    currencyCode: string;
    option: Option[];
    variants: Variant[];
    rating: number;
    reviews: Review[];
    salePrice: number;
    weight: string;
    material: string;
    country: string;
    additionalImages: AdditionalImage[];
    tags: string[];
};
type Option = {
    id: string;
    name: string;
    values: string[];
};

type Variant = {
    id: string;
    availableForSale: boolean;
    selectedOptions: {
        name: string;
        value: string;
    }[];
};

type Review = {
    userId: string;
    comment: string;
    rating: number;
};

type AdditionalImage = {
    src: string;
    altText: string;
};


export type SessionProp = {
   user:{
        name?: String,
        image?: String,
        email?: String
   }
   expires:Date
}