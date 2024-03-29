import { getOrders } from "@/app/lib/data/actions/getOrders";
import OrdersTable from "@/components/orders/table";
import { Suspense } from "react";


export default  async function page({params}:{params:{userId:string}}){
  // console.log(params,'params')
    const orders =await getOrders(params.userId)
  return(
       <Suspense fallback={<div className="animate-pulse w-full bg-neutral-300 h-12"></div>}>
    <div className="w-full flex flex-col align-middle">
         <p className="font-bold text-3xl text-neutral-700 p-4">My Orders</p>
        <OrdersTable orders={orders}/>
    </div>
       </Suspense>
  )
}