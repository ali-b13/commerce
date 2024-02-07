import OrdersTable from "@/components/orders/table";
import { getOrders } from "../lib/data/actions/getOrders";
import { Suspense } from "react";

export default  async function ordersPage(){
  const orders =await getOrders()
  console.log(orders,'orders')
  return(
    <div className="w-full flex flex-col align-middle">
       <Suspense fallback={<div className="animate-pulse w-full bg-neutral-300 h-12"></div>}>
         <p className="font-bold text-3xl text-neutral-700 p-4">My Orders</p>
        <OrdersTable orders={orders}/>
       </Suspense>
    </div>
  )
}