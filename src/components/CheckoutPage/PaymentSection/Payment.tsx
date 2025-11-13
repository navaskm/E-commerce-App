"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
import { useAuth } from "@clerk/nextjs";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { userOrder } from "@/lib/store/feature/deliverydate/deliverydate";
import { removeAllItem } from "@/lib/store/feature/items/itemsslice";
import { PaymentPageProducts, CartItemType, ShippingType } from "@/types/type";

const PaymentPage = () => {

  const [quantity, setQuantity] = useState(0);
  const items = useAppSelector((state) => state.cartItems.items)
  const conformItems = useAppSelector((state:CartItemType)=> state.cartItems.items || {});
  const dispatch = useAppDispatch();
  const {isSignedIn} = useAuth();
  const route = useRouter();

  // get shipping cost
  const shippingCost = useAppSelector((state:ShippingType) => state.deliveryDate.shippingCost);

  // get total product price
  const productPriceCents = React.useMemo(() => {
    return conformItems.reduce((total: number, cartItem: PaymentPageProducts) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);
  }, [conformItems]);

  useEffect(() => {
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
    setQuantity(totalQuantity);
  }, [items]);

  // get total price before tax
  const totalBeforeTax = shippingCost + productPriceCents;

  // get tax amount in cents
  const taxCents = (totalBeforeTax / 100) * 0.1;

  // get amount
  const totalAmount = taxCents + totalBeforeTax;

  // Function to format prices
  function fixed(price: number) {
    return price.toFixed(2);
  }

  // order button clicked time work
  const handleOrder = () => {

    //if user not login
    if(!isSignedIn){

      // save this in localStorage. and this check in /components/OrderPage
      localStorage.setItem("pendingOrder", "true");

      const redirectUrl = `${window.location.origin}/ordered-products`;
      route.push(`https://fit-katydid-33.accounts.dev/sign-in?redirect_url=${encodeURIComponent(redirectUrl)}`);
      return;
    }

    // user is already login this code is work
    dispatch(userOrder());
    dispatch(removeAllItem());
    route.push("/ordered-products");
  }

  return conformItems.length !== 0 && (

    <div className='col-12 col-lg-4 payment-container'>
      <h4>Order Summary</h4>
      <div className='order-summary'>

        <div className="product-shipping-price-container">
          <div className='order-names'>
            <p>Items({quantity}):</p>
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
  )
}

export default PaymentPage;