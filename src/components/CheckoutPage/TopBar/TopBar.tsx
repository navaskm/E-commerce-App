"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/store/hooks/hooks";
import { CartItemType } from "@/types/type";

export default function TopBar ()  {

  const [quantity, setQuantity] = useState(0);
  const carItems = useAppSelector((state: CartItemType) => state.cartItems.items);
  const items = useAppSelector((state) => state.cartItems.items)

  useEffect(() => {
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
    setQuantity(totalQuantity);
  }, [items]);

  return (
    <div className="top-bar">
      <Link href='/'>
         <img src="/Logo/app-logo.png" alt="back"/>
      </Link>

      {
        carItems.length !== 0 ? (
          <h2>
            Check Out <span>{quantity}</span> Items
          </h2>
        ):(
          <h2>
            Your cart is empty!
          </h2>
        )
      }

    </div>
  )
};