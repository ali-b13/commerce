// import { AddToCart } from '../cart/add-to-cart';
import { AddToCart } from '../cart/add-to-cart';
import Price from '../price';
import ProductInfo from '../product-info';
import Prose from '../prose';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: any }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-4xl font-medium">{product.title}</h1>
        <h6 className="mb-2 text-md font-medium text-neutral-500">{product.description}</h6>
        <ProductInfo  material={product.material} brand={product.brand} country={product.country} weight={product.weight}/>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white m-2">
          <Price
            amount={product.price}
            currencyCode={product.currencyCode||"USD"}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants}  />

      

      <AddToCart variants={ product.variants} availableForSale={true} />
    </>
  );
}