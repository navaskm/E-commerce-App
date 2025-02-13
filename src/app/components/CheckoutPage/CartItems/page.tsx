'use client'

import { useState, useEffect } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";

import { useAppDispatch, useAppSelector } from "@/app/lib/store/hooks/hooks";
import { cartItemHydrate,addItem,removeItemQuantity,removeItem } from "@/app/lib/store/feature/items/itemsslice";
import { addDeliveryDate,removeDeliveryDate } from "@/app/lib/store/feature/deliverydate/deliverydate";
import { addToCart,removeFromCart,removeFromCartOfQuantityBase } from "@/app/lib/store/feature/itemquantity/itemquantityslice";
import EmptyCart from "./EmptyCart/page";

type Products = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
  selectedSize: string;
};

const CartItems = () => {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const checkoutItems = useAppSelector((state) => state.cartItems.items);
  const dispatch = useAppDispatch();

  // add local storage in to the store
    useEffect(() => {
      if (typeof window !== "undefined") {
        const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
        dispatch(cartItemHydrate({ items }));
      }
    }, [dispatch]);

  // Initialize default delivery options
  useEffect(() => {
    if (checkoutItems.length > 0) {
      const defaultOptions = checkoutItems.reduce((acc: { [key: string]: string }, item:Products) => {
        const productSize = item.selectedSize.replace(".size-", "");
        const key = `${item.id}-${productSize}`;
        if (!(key in acc)) {
          acc[key] = selectedOptions[key] || "option1"; // Retain existing or set default
        }
        return acc;
      }, {} as { [key: string]: string });

      setSelectedOptions((prev) => ({ ...prev, ...defaultOptions }));
    }
  }, [checkoutItems]);

  useEffect(() => {
    Object.entries(selectedOptions).forEach(([key, selectedOption]) => {
      const existingItem = checkoutItems.find(
        (item) => `${item.id}-${item.selectedSize.replace(".size-", "")}` === key
      );
  
      if (existingItem) {
        // Instead of document.querySelector, compute delivery date in state
        const deliveryDate = findDeliveryDate(
          selectedOption === "option1" ? 7 : selectedOption === "option2" ? 5 : 3
        );
  
        const { name, image, price, quantity, selectedSize } = existingItem;
  
        dispatch(
          addDeliveryDate({
            id: key,
            selectedOption,
            conformDate: `${deliveryDate.dayName}, ${deliveryDate.monthName} ${deliveryDate.today}`, // Use computed value instead of querying DOM
            name,
            image,
            price,
            quantity,
            size: selectedSize,
          })
        );
      }
    });
  }, [selectedOptions, checkoutItems, dispatch]);

  const findDeliveryDate = (deliveryDate: number) => {
    const date = new Date();
    date.setDate(date.getDate() + deliveryDate);
    return {
      monthName: date.toLocaleString("default", { month: "long" }),
      dayName: date.toLocaleString("default", { weekday: "long" }),
      today: date.getDate(),
    };
  };

  const handleOptionChange = (id: string, size: string, option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [`${id}-${size}`]: option,
    }));
  };

  const changeQuantity = (value: string, id: string, selectedSize: string) => {

    if (value === "+") {
      dispatch(addItem({ id, selectedSize }));

      const item = checkoutItems.find(
        (item:Products) => item.id === id && item.selectedSize === selectedSize
      );
      if (item && item.quantity < 10) {
        dispatch(addToCart());
      }else{
        return;
      }

    } else if (value === "-") {
      dispatch(removeItemQuantity({ id, selectedSize }));
      const item = checkoutItems.find(
        (item:Products) => item.id === id && item.selectedSize === selectedSize
      );
      if (item && item.quantity > 1) {
        dispatch(removeFromCart());
      }else{
        return;
      }
    }

  };

  // remove from cart
  const handleRemoveItem = (id: string, selectedSize: string, itemQuantity: number,selectedOption:string,dateId:string) => {
    dispatch(removeItem({ id, selectedSize }));

    const productId = dateId.replace('.size-', '');
    dispatch(removeDeliveryDate({ productId, selectedOption }));

    dispatch(removeFromCartOfQuantityBase({ quantity: itemQuantity }));
  };

  return checkoutItems.length != 0 ? (
    <div className="col-12 col-lg-8 cart-items-container">
      <h3>Review your order</h3>
      {checkoutItems.map((item: Products, index: number) => {
        const productSize = item.selectedSize.replace(".size-", "");
        const selectedOption = selectedOptions[`${item.id}-${productSize}`];
        const deliveryDate =
          selectedOption === "option1"
            ? findDeliveryDate(7)
            : selectedOption === "option2"
            ? findDeliveryDate(5)
            : findDeliveryDate(3);

        return (
          <div key={index} className="cart-each-items">
            <h5>
              Delivery date:{" "}
              <span className={`${item.id}-${productSize}`}>
                {deliveryDate.dayName}, {deliveryDate.monthName} {deliveryDate.today}
              </span>
            </h5>
            <div className="cart-details-container">
              <div className="col-12 col-md-6 cart-details-display">
                <img src={decodeURIComponent(item.image)} alt={item.name}/>
                <div>
                  <h5>{decodeURIComponent(item.name)}</h5>
                  <b className="price-display">
                    Price: <span>${item.price}</span>
                  </b>
                  {
                    item.selectedSize && <p>
                    Size: <span>{productSize}</span>
                  </p>
                  }
                  
                  <div className="quantity-plus-mines-button-display">
                    <p>
                      Quantity:{" "}
                      <button 
                        className="minus-button"
                        onClick={() => changeQuantity("-", item.id, item.selectedSize)}
                        disabled={item.quantity <=1}
                      >-</button>
                      <span className="item-quantity">{item.quantity}</span>
                      <button 
                        className="plus-button"
                        onClick={() => changeQuantity("+", item.id, item.selectedSize)}
                        disabled={item.quantity >=10}
                      >+</button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 delivery-date-option-container">
                <h5>Choose a delivery option:</h5>
                {["option1", "option2", "option3"].map((option, i) => {
                const deliveryDate = findDeliveryDate(7 - i * 2);
                  return (
                    <div key={i}>
                      <input
                        type="radio"
                        name={`date-select-${item.id}-${productSize}`}
                        onChange={() => handleOptionChange(item.id, productSize, option)}
                        value={option}
                        checked={selectedOptions[`${item.id}-${productSize}`] === option}
                      />
                      <label>
                        {`${deliveryDate.dayName}, ${deliveryDate.monthName} ${deliveryDate.today}`}
                      </label>
                      
                      {
                        i == 0?(
                          <p>FREE Shipping</p>
                        ): i == 1?(
                          <p>₹10 - Shipping</p>
                        ):(
                          <p>₹18 - Shipping</p>
                        )
                      }
                      
                    </div>
                  );
                })}
              </div>

            </div>
            <h5 
              className="remove-cart" 
              title="Remove this item"
              onClick={()=>handleRemoveItem(item.id, item.selectedSize,item.quantity,selectedOption,
                `${item.id}-${item.selectedSize}`)}
            >
              <MdRemoveShoppingCart />
              REMOVE
            </h5>
          </div>
        );
      })}
    </div>
  ):(
    // cart empty at the time this component work
    <EmptyCart/>
  )
};

export default CartItems;
