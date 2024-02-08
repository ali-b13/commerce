
import Cart from '@/components/cart';
import OpenCart from '@/components/cart/open-cart';
import Logo from '@/components/logo';
// import { getMenu } from 'lib/shopify';
// import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search from './search';
import { getThreeItemCategory } from '@/app/lib/data/actions/getCategories';
import { Category } from '@prisma/client';
import { DeskTopNavbarSkeleton, MobileNavBarSkelton } from '../skeltons/navbar';
import UserAuthButtons from '../UserAuthButtons';
import { SessionProp } from '@/app/lib/data/types';
const SITE_NAME  = "Arma";

export default async function Navbar({session}:{session:SessionProp|null}) {
  const menu:Category[] =await getThreeItemCategory()
   
  // await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">

      <div className="block flex-none md:hidden">
   
        <MobileMenu session={session}  menu={menu} />
     
      </div>
        <Suspense fallback={<DeskTopNavbarSkeleton/>}>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <Logo />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
         {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Category) => (
                <li key={item.id}>
                  <Link
                    href={"/search/"+item.name}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden  justify-center  md:flex md:w-1/3">
          <Search />
         
        </div>
        <div className="flex items-center justify-end md:w-1/3 gap-4">
           <div className='hidden md:flex w-full  gap-4 ml-12'>
            <UserAuthButtons session={session}/>
          </div>
            {session?.user.id&&<Link href={`/orders/${session?.user.id}`} className='text-neutral-800 cursor-pointer hover:text-neutral-400'>Orders</Link>}
         <Cart/>
        </div>
      </div>
    </Suspense>
    </nav>
  );
}
