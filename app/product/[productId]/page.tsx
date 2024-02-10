import React, { Suspense } from 'react'
import { products, relatedProducts } from '@/app/lib/placeholderData';
import { Gallery } from '@/components/product/gallery';
import { ProductDescription } from '@/components/product/product-description';
import { GridTileImage } from '@/components/layout/grid/item-title';
import Link from 'next/link';
import { getProduct, getRelatedProducts } from '@/app/lib/data/actions/getProducts';
import { notFound } from 'next/navigation';
import { Product } from '@prisma/client';
const productPage = async({params}:{params:{productId:string}}) => {
    const product=await getProduct(params.productId)
    if (!product) return notFound();
 return (
    <>
    <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8   md:p-12 lg:flex-row lg:gap-8">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Gallery
              images={product?.additionalImages?product.additionalImages.map((image: any) => ({
                src:image.src,
                altText: image.altText
              })):[]}
            />
          </div>

          <div className="basis-full lg:basis-2/6">
            <ProductDescription product={product} />
          </div>
        </div>
        <Suspense>
          <RelatedProducts id={product.id} />
        </Suspense>
      </div>
    </>
    );
}
export default productPage

async function RelatedProducts({id}:{id:string}) {
    const relatedProducts=await getRelatedProducts(id)

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product:Product) => (
          <li
            key={product.id}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link className="relative h-full w-full" href={`/product/${product.id}`}>
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: String(product.price),
                  currencyCode: product.currencyCode||"USD"
                }}
                src={product.image||""}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

