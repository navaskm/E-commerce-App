"use client";

import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { addToCart } from "@/lib/store/feature/itemquantity/itemquantityslice";
import { addItem } from "@/lib/store/feature/items/itemsslice";
import { AddToCartBtnFileProps, AddToCartBtnFileProducts } from "@/types/type";

const AddToCartBtn = ({name,image,price,id,size,selectedSize}:AddToCartBtnFileProps) => {

  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useAppDispatch();
  const checkoutItems = useAppSelector(state => state.cartItems.items);

  const AddToCart = ()=>{

    // user not use size then this work. after user select a size
    if(size.length > 2 &&  selectedSize === ''){
      alert('Choose a size');
      const AddBorder = document.querySelector('.container-product-size');
      AddBorder?.classList.add('add-border');
      return;
    }

    // Check if the product is already in the cart
    const existingItem = checkoutItems.find(
      (item:AddToCartBtnFileProducts) => item.id === id && item.selectedSize === selectedSize
    );

    // Prevent adding more than 10 of the same product
    if (existingItem && existingItem.quantity >= 10) {
      alert("You cannot add more than 10 of the same product.");
      return;
    }

    setIsAdded(true);

    dispatch(addToCart());
    dispatch(addItem({name,image,price,id,selectedSize}))

    setTimeout(()=>{
      setIsAdded(false);
    }, 2000);
  }

  const imageFix = size.length>2 ? 'size-yes' : null

  return (
    <>
      <button 
      onClick={AddToCart}
      className={`add-cart-button ${imageFix}`}
      title="add to cart">
        <span>
          <TiShoppingCart /> 
        </span>
        Add to Cart
      </button>
      {isAdded && <p>Added to Cart</p>}
    </>
  )
}

export default AddToCartBtn;