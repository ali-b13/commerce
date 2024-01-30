'use client';

import clsx from 'clsx';
import { SortFilterItem } from '@/app/lib/constants';
import { createUrl } from '@/app/lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import type { ListItem } from '.';
import { Category } from '@prisma/client';

function PathFilterItem({ item }: { item: {name:string} }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = String(pathname) ==String(`/search/${item.name}`)
  const newParams = new URLSearchParams(searchParams.toString());
  const DynamicTag = active ? 'p' : Link;
  newParams.delete('q');

  return (
    <li className="mt-2 flex text-black " key={item.name}>
      <DynamicTag
        href={createUrl(`/search/${item.name}`, newParams)}
        className={clsx(
          'w-full text-sm underline-offset-4 hover:underline',
          {
            'underline underline-offset-4': active
          }
        )}
      >
        {item.name}
      </DynamicTag>
    </li>
  );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get('sort') === item.slug;
  const q = searchParams.get('q');
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug })
    })
  );
  const DynamicTag = active ? 'p' : Link;

  return (
    <li className="mt-2 flex text-sm text-black " key={item.title}>
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        className={clsx('w-full hover:underline hover:underline-offset-4', {
          'underline underline-offset-4': active
        })}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

export function FilterItem({ item }: { item: ListItem }) {
  return 'name' in item ? <PathFilterItem item={item} /> : <SortFilterItem item={item} />;
}