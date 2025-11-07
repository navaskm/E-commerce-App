import { lazy,Suspense } from "react";
import { Rings } from 'react-loading-icons';

const NavbarSkeleton = lazy(()=> import("../../../skeletons/NavbarSkeleton"));
const TopBar = lazy(()=> import('@/components/CheckoutPage/TopBar/TopBar'));
const Payment = lazy(()=> import('@/components/CheckoutPage/PaymentSection/Payment'));
const CartItems = lazy(()=> import('@/components/CheckoutPage/CartItems/CartItems'));
import "@/style/checkoutpage/checkout.scss";

const CartPage = () => {

  return (
    <>
      <title>Check Your Items</title>

      <Suspense fallback={<NavbarSkeleton/>}>
        <TopBar/>
      </Suspense>

      <div className="cart-items-payment-section-container">
        <Suspense fallback={<Rings/>}>
          <Payment />
          <CartItems />
        </Suspense>
      </div>
    </>
  )
}

export default CartPage