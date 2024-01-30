import Grid from '@/components/layout/grid';
import ProductGridItems from '@/components/layout/grid/product-grid-items';
import { defaultSort, sorting } from '@/app/lib/constants';
import { getCategoryProducts } from '@/app/lib/data/actions/getProducts';


export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};


export default async function CategoryPage({
  params,
  searchParams
}: {
  params: { category: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCategoryProducts({ category: params.category, sortKey, reverse });

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
  );
}