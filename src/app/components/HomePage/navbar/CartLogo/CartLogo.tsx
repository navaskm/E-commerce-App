"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/store/hooks/hooks";
import { hydrate } from "@/app/lib/store/feature/itemquantity/itemquantityslice";

const CartLogo = () => {

  const dispatch = useAppDispatch();
  const numberOfItemsQuantity = useAppSelector((state) => state.cart.cartBase)

  // add local storage in to the store
  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartBase = JSON.parse(localStorage.getItem("cartBase") || '0');
      dispatch(hydrate({ cartBase }));
    }
  }, [dispatch]);

  return (
    <Link 
    href='/components/CheckoutPage'
    className="cart-logo">
      <h6>{numberOfItemsQuantity}</h6>
      <img
        src='/Logo/cart-logo.png'
        alt="Logo"
      />
    </Link>
  )
}

export default CartLogo;