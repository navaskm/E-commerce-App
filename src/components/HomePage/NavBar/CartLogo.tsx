"use client";

import Link from "next/link";
import { useEffect,useState } from "react";
import { useAppDispatch,useAppSelector } from "@/lib/store/hooks/hooks";
import { cartItemHydrate } from "@/lib/store/feature/items/itemsslice";

const CartLogo = () => {

  const [quantity, setQuantity] = useState(0);
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cartItems.items);

  useEffect(() => {
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
    setQuantity(totalQuantity);
  }, [items]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
      dispatch(cartItemHydrate({ items }));
    }
  }, [dispatch]);

  return (
    <Link 
    href='/checkout'
    className="cart-logo">
      <h6>{quantity}</h6>
      <img
        src='/Logo/cart-logo.png'
        alt="Logo"
        loading="lazy"
      />
    </Link>
  )
}

export default CartLogo;