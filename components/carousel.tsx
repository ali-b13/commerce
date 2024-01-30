import Link from 'next/link';
import { GridTileImage } from './layout/grid/item-title';
import { getHomeCarouselProducts } from '@/app/lib/data/actions/getProducts';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
    const carouselProducts= await getHomeCarouselProducts()

  if (!carouselProducts?.length) return null;


  return (
    <div className=" w-full overflow-x-auto scroll-smooth transition-transform duration-500 ease-in-out pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.id}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link href={`/product/${product.id}`} className="relative h-full w-full">
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: String(product.price) ,
                  currencyCode: product.currencyCode||"USD"as string
                }}
                src={ String(process.env?.Url_image_prefix||""+product.image||"")}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}