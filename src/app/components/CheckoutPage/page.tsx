import { lazy,Suspense } from "react";
import { Rings } from 'react-loading-icons';

const NavbarSkeleton = lazy(()=> import("../../../skeletons/homepage/NavbarSkeleton"));
const CartItems = lazy(()=> import('./CartItems/page'));
const PaymentPage = lazy(()=> import('./PaymentSection/page'));
const TopBarOfCartPage = lazy(()=> import('./TopBar/TopBar'));
import "@/app/styles/checkoutpage/checkout.scss";

const CartPage = () => {

  return (
    <>
      <title>Check Your Items</title>

      <Suspense fallback={<NavbarSkeleton/>}>
        <TopBarOfCartPage/>
      </Suspense>

      <div className="cart-items-payment-section-container">
        <Suspense fallback={<Rings/>}>
          <PaymentPage />
          <CartItems />
        </Suspense>
      </div>
    </>
  )
}

export default CartPage