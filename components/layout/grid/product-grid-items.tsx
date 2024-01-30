import Grid from '@/components/layout/grid';
import { GridTileImage } from '@/components/layout/grid/item-title';
import { Product } from '@prisma/client';

import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.id} className="animate-fadeIn">
          <Link className="relative inline-block h-full w-full" href={`/product/${product.id}`}>
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount:String( product.price),
                currencyCode: product.currencyCode||"USD"
              }}
              src={product.image||""}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}