import { SortFilterItem } from '@/app/lib/constants';
import FilterItemDropdown from './dropdown';
import { FilterItem } from './item';
import { Category } from '@prisma/client';


export type ListItem = SortFilterItem | Category;

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}

export default function FilterList({ list, title }: { list: ListItem[]; title?: string }) {
    console.log(list,'list')
  return (
    <>
      <nav>
        {title ? (
          <h3 className="hidden text-xs text-neutral-900  md:block">
            {title}
          </h3>
        ) : null}
        <ul className="hidden md:block">
          <FilterItemList list={list} />
        </ul>
        <ul className="md:hidden">
          <FilterItemDropdown list={list} />
        </ul>
      </nav>
    </>
  );
}