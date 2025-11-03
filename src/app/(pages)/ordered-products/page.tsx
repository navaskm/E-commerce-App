import { lazy,Suspense } from "react";
import { Rings } from 'react-loading-icons';
const OrderItems = lazy(()=>import("@/components/OrderedproductPage/OrderItems"));
import '@/app/styles/orderpage/orderpage.scss';

const OrderPage = () => {
  return (
    <div className="container-order-page">

      <title>Your Orders</title>
      
      <Suspense fallback={<Rings />}>
        <OrderItems />
      </Suspense>

    </div>
  )
}

export default OrderPage;