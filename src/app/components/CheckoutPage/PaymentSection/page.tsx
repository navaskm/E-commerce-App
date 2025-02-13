"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/lib/store/hooks/hooks";
import { userOrder } from "@/app/lib/store/feature/deliverydate/deliverydate";
import { removeAllItem } from "@/app/lib/store/feature/items/itemsslice";
import { removeAllQuantity } from "@/app/lib/store/feature/itemquantity/itemquantityslice";
import { hydrate } from "@/app/lib/store/feature/itemquantity/itemquantityslice";

type Products = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
  selectedSize: string;
};

type CartItemType = {
  selectedSize?: string;
  cartItems: {
    items: Products[];
  }
}

type QuantityType = {
  cart: {
    cartBase: number;
  }
}

type ShippingType = {
  deliveryDate: {
    shippingCost: number;
  }
}

const PaymentPage = () => {

  const dispatch = useAppDispatch();
  const checkoutItems = useAppSelector((state:QuantityType)=> state.cart.cartBase || 0);
  const conformItems = useAppSelector((state:CartItemType)=> state.cartItems.items || {});

  // get shipping cost
  const shippingCost = useAppSelector((state:ShippingType) => state.deliveryDate.shippingCost);

  // get total product price
  const productPriceCents = React.useMemo(() => {
    return conformItems.reduce((total: number, cartItem: Products) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);
  }, [conformItems]);

  useEffect(() => {
      if (typeof window !== "undefined") {
        const cartBase = JSON.parse(localStorage.getItem("cartBase") || '0');
        dispatch(hydrate({ cartBase }));
      }
    }, [dispatch]);

  // get total price before tax
  const totalBeforeTax = shippingCost + productPriceCents;

  // get tax amount in cents
  const taxCents = (totalBeforeTax / 100) * 0.1;

    // Function to format prices
    function fixed(price: number) {
      return price.toFixed(2);
    }

  const totalAmount = taxCents + totalBeforeTax;

  // order button clicked time work
  const route = useRouter();
  
  const handleOrder = () => {
    dispatch(userOrder());
    dispatch(removeAllItem());
    dispatch(removeAllQuantity());
    route.push("/components/OrderPage");
  }

  return conformItems.length !== 0 ? (

    <div className='col-12 col-lg-4 payment-container'>
      <h4>Order Summary</h4>
      <div className='order-summary'>

        <div className="product-shipping-price-container">
          <div className='order-names'>
            <p>Items({checkoutItems}):</p>
            <p>Shipping & handling:</p>
          </div>
          <div className='order-prices'>
            <p>₹{productPriceCents}</p>
            <p>₹{shippingCost}</p>
          </div>
        </div>

        <div className="tax-price-container">
          <div className="order-texes">
            <p>Total before tax:</p>
            <p>Estimated tax (10%):</p>
          </div>
          <div className="order-tax-price">
            <p>{totalBeforeTax}</p>
            <p>{fixed(taxCents)}</p>
          </div>
        </div>

        <div className="total-amount-container">
          <p>Total Amount</p>
          <p>{fixed(totalAmount)}</p>
        </div>

        
        <button 
          onClick={handleOrder}
          title="Order"
        >Place your order</button>

      </div>
    </div>
  ):null
}

export default PaymentPage
