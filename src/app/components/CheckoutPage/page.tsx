"use client";

import { lazy,Suspense } from "react";
import { useEffect,useState } from "react";
import { Rings } from 'react-loading-icons';

const NavbarSkeleton = lazy(()=> import("../HomePage/navbar/Skeleton/NavbarSkeleton"));
const CartItems = lazy(()=> import('./CartItems/page'));
const PaymentPage = lazy(()=> import('./paymentsection/page'));
const TopBarOfCartPage = lazy(()=> import('./topbar/topbar'));
import "@/app/styles/checkoutpage/checkout.scss";

const CartPage = () => {

  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    // Update screenWidth only after the component is mounted on the client
    const handleResize = () => setScreenWidth(window.innerWidth);

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <title>Check Your Items</title>

      <Suspense fallback={<NavbarSkeleton/>}>
        <TopBarOfCartPage/>
      </Suspense>

      {screenWidth !== null && (
      <div className="cart-items-payment-section-container" style={{ display: 'flex' }}>
        <Suspense fallback={<Rings />}>
          {screenWidth < 991 ? (
            <>
              <PaymentPage />
              <CartItems />
            </>
          ) : (
            <>
              <CartItems />
              <PaymentPage />
            </>
          )}
        </Suspense>
      </div>
    )}
    </>
  )
}

export default CartPage
