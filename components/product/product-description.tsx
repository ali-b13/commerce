// import { AddToCart } from '../cart/add-to-cart';
import { getProductInCart } from '@/app/lib/data/actions/cart';
import { AddToCart } from '../cart/add-to-cart';
import Price from '../price';
import ProductInfo from '../product-info';
import Prose from '../prose';
import { VariantSelector } from './variant-selector';
import { EditItemQuantityButton } from '../cart/edit-item-quantity-button';

export async function ProductDescription({ product }: { product: any }) {
  const existedProduct =await getProductInCart(product.id)
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

      
      {
        existedProduct? (
          <div className="ml-auto flex h-9 flex-row items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700">
                                <EditItemQuantityButton item={existedProduct} type="minus" />
                                <p className="w-6 text-center">
                                  <span className="w-full text-sm">{existedProduct.quantity}</span>
                                </p>
                                <EditItemQuantityButton item={existedProduct} type="plus" />
             </div>
        ): <AddToCart variants={ product.variants} availableForSale={true} />
      }
    </>
  );
}