import Image from 'next/image';
import OrderStatus from './status';
import { formatAmountForDisplay, formatDateToLocal } from '@/app/lib/utils';
import {IndicatorStatusMobile} from './indicatorStatus';
export const revalidate ="force-cache"
export default async function OrdersTable({orders}:{orders:any}) {
   if(!orders.length){
    return <div className='text-neutral-700 text-3xl text-center'>No orders yet </div>
   }
  return (
    <div className="mt-6 w-full flow-root min-h-[75vh]">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {orders?.map((order:any) => (
              <div
                key={order.id}
                className="mb-2 w-full rounded-md bg-white p-4 border-b-2 "
              >
                <div className="flex items-center justify-between pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={order.product.image}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${order.name}'s profile picture`}
                      />
                      <p >{order.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">To:{order.address}</p>
                    
                  </div>
                 
                  <IndicatorStatusMobile status={order.stages}/>
                 
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatAmountForDisplay(order.amount,order.currency||"USD")}
                    </p>
                    <p>{formatDateToLocal(order.createdAt)}</p>
                  </div>
                
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table ">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Product
                </th>
               
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Address
              </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {orders?.map((order:any) => (
                <tr
                  key={order.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={order.product.image}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${order.name}'s profile picture`}
                      />
                      <p>{order.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatAmountForDisplay(order.amount,order.currency||"USD")}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(order.createdAt)}
                  </td>
                 <td className="whitespace-nowrap px-3 py-3">
                    {order.address}
                 </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <OrderStatus 
                            status={
                Array.isArray(order.stages) && order.stages.length > 0
                    ? order.stages.length >= 4
                        ? order.stages[3]  // Show the fourth status
                        : order.stages.length === 1
                        ? order.stages[0]
                        : order.stages.length === 2
                        ? order.stages[1] 
                        : order.stages[2]
                    : null // Handle the case when order.stages is not an array or is empty
            }
                      />
                  
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
