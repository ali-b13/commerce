"use client"
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import { CiDeliveryTruck } from "react-icons/ci";
import clsx from 'clsx';
import { Suspense } from 'react';
import { formatDateToLocal } from '@/app/lib/utils';
import { LuPackageCheck } from "react-icons/lu";

export default function OrderStatus({ status }:any) {
  return (
   <Suspense fallback={<span>...</span>}>
     <span
      className={clsx(
        'inline-flex items-center rounded-full min-w-auto  py-1 text-xs ',
        {
          'bg-blue-300 text-white px-16': status.name === 'Placed',
          'bg-gray-100 text-gray-900 px-16': status.name === 'Dispatched',
          'bg-purple-500 text-white px-12 ': status.name === 'OutForDelivery',
          "bg-green-500 text-white px-14": status.name==="Delivered"
        },
      )}
    >
       {status.name === 'Placed' ? (
        <>
          Placed {formatDateToLocal(status.createdAt)}
          <ClockIcon className="w-8" />
        </>
      ) : null}
      {status.name === 'Dispatched' ? (
        <>
          Dispatched {formatDateToLocal(status.createdAt)}
          <LuPackageCheck className="w-8" />
        </>
      ) : null}
      {status.name === 'OutForDelivery' ? (
        <>
          Out For Delivery {formatDateToLocal(status.createdAt)}
          <CiDeliveryTruck  className="min-w-8 min-h-8" />
        </>
      ) : null}
      {status.name === 'Delivered' ? (
        <>
           Delivered {formatDateToLocal(status.createdAt)}
          <CheckIcon className=" w-8" />
        </>
      ) : null}
    </span>
   </Suspense>
  );
}
