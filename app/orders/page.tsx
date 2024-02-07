import OrdersTable from "@/components/orders/table";
import { getOrders } from "../lib/data/actions/getOrders";

export default  async function ordersPage(){
  const orders =await getOrders()
  console.log(orders,'orders')
  return(
    <section className="w-full flex flex-col align-middle">
        <h2 className="font-bold text-3xl text-neutral-700 p-4">My Orders</h2>
        <OrdersTable orders={orders}/>
    </section>
  )
}