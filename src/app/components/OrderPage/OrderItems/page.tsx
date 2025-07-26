"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

import { useAppDispatch,useAppSelector } from "@/app/lib/store/hooks/hooks";
import { hydrateOrder } from "@/app/lib/store/feature/deliverydate/deliverydate";

import { addToCart } from "@/app/lib/store/feature/itemquantity/itemquantityslice";
import { addItem } from "@/app/lib/store/feature/items/itemsslice";
import EmptyCart from "../../CheckoutPage/CartItems/EmptyCart/page";

type OrderItems = {
  image: string;
  name: string;
  price: string;
  id: string; 
  quantity: number;
  conformDate: string;
  size: string;
}

type Products = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
  selectedSize: string;
};

type hello = {
  received: { [date: string]: OrderItems[] };
  pending: { [date: string]: OrderItems[] };
};

const OrderItems = () => {

  const checkoutItems = useAppSelector((state) => state.cartItems.items);
  const conformDeliveryDate = useAppSelector((state) => state.deliveryDate.userOrder)as OrderItems[];
  const dispatch = useAppDispatch();

  const [isClient, setIsClient] = useState(false);
  const [buttonState, setButtonState] = useState<{ [key: string]: string }>({});

  // add local storage in to the store
  useEffect(() => {
    if (typeof window !== "undefined") {
      const deliveryDate = JSON.parse(localStorage.getItem("deliveryDate") || "[]");
      const userOrder = JSON.parse(localStorage.getItem("userOrder") || "[]");
      dispatch(hydrateOrder({ deliveryDate, userOrder }));
    }
  }, [dispatch]);

  // Ensure rendering happens only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render a loading or placeholder state until the client hydrates
  if (!isClient) {
    return <p>Loading...</p>;
  }

  const againClickHandle = (name:string,image:string,price:string,id:string,selectedSize:string,conformDate:string) =>{

    // Check if the product is already in the cart
    const existingItem = checkoutItems.find(
      (item:Products) => item.id === id && item.selectedSize === selectedSize
    );

    // Prevent adding more than 10 of the same product
    if (existingItem && existingItem.quantity >= 10) {
      alert("You cannot add more than 10 of the same product.");
      return;
    }

   // Update button state
   setButtonState((prev) => ({
    ...prev,
    [id]: "added", // "added" state to show that it was added
    }));

    setTimeout(() => {
      setButtonState((prev) => ({
        ...prev,
        [id]: "default", // Reset to default after 2 seconds
      }));
    }, 2000);

    dispatch(addToCart());
    dispatch(addItem({name,image,price,id,selectedSize,conformDate}))
  };

  // check product received or not
  const productReceivedOrNot = (date: string) => {
    const today = new Date();
    // Append the current year to the date string
    const dateWithYear = `${date}, ${today.getFullYear()}`;
  
    // Create Date objects for comparison
    const comparedDate = new Date(dateWithYear);
  
    today.setHours(0, 0, 0, 0);
    comparedDate.setHours(0, 0, 0, 0);
  
    return comparedDate < today;
  };

  // (set received and pending object). (and inside that 2 object date based object). (and inside date object array)
  const groupedItems = conformDeliveryDate.reduce<hello>((acc, item) => {

    // get item delivering date
    const date = item.conformDate;

    // check item delivered or not (boolean value)
    const isReceived = productReceivedOrNot(date);

    if (isReceived) {

      // set arrived item date
      if (!acc.received[date]) {
        acc.received[date] = [];
      }
      acc.received[date].push(item);

    } else {

      // set pending item date
      if (!acc.pending[date]) {
        acc.pending[date] = [];
      }
      acc.pending[date].push(item);

    };

    return acc;

  },{received: {},pending: {},});

  return conformDeliveryDate.length !== 0 ? (
    <div className="order-item-container">

      {/* navbar of this order page */}
      <div className="top-bar">
        <Link href='/'>
            <img src="/Logo/app-logo.png" alt="back"/>
        </Link>
        <h2>
          Your Orders
        </h2>
      </div>

      {/* pending items */}
      {Object.entries(groupedItems.pending).map(([date, items], groupIndex) => {
        return (
          <div className='same-date-item-container' key={groupIndex} >

            {/* arriving date display */}
            <h3>Arriving on: {date}</h3>

            {items.map((item, index) => {

              // get size with remove this = ".size-"
              const SelectedSize = item.size?.replace(".size-", "");

              return(
                <div className={`each-item-container ${index == 0?'item-first':''}`} key={index}>

                  {/* display image */}
                  <img src={item.image && decodeURIComponent(item.image)} alt={item.name}/>

                  <div className="item-details-display">
                    
                    <div className="item-details">

                      {/* name, quantity and size display */}
                      <h5>{decodeURIComponent(item.name)}</h5>
                      <p>Quantity<span>{item.quantity}</span></p>
                      {item.size && <p>Size : <span>{SelectedSize}</span></p>}

                      {/* again add to cart button */}
                      <button
                        className={`again-clicked-${item.id}`}
                        onClick={() => againClickHandle(item.name, item.image, item.price, item.id, item.size,item.conformDate)}
                      >
                        {buttonState[item.id] === "added" ? (
                          <strong style={{color:'green'}}>&#x2713; Added</strong>
                        ) : (
                          <>
                            <img src="/ByItAgain/by-it-again.png" alt=""/>
                            By it again
                          </>
                        )}
                      </button>

                    </div>

                    <Link 
                      href={{
                        pathname :'/components/TrackingPage',
                        query:{
                          name: item.name,
                          image: item.image,
                          date: item.conformDate,
                          size: item.size,
                          quantity: item.quantity,
                        }
                      }}
                    >
                      <button className="track-button">
                        Track Package
                      </button>
                    </Link>
                    
                  </div>

                </div>
              )
            })}

          </div>
      )})}

      {/* received items */}
      {Object.entries(groupedItems.received).map(([date, items], groupIndex) => {
        return (
        <div className='same-date-item-container item-received' key={groupIndex}>

          <h3>
            Congratulations! Your item has been successfully delivered on{" "}
            <strong>{new Date(date).toLocaleDateString()}</strong>
          </h3>


          {items.map((item, index) => {

            // get size with remove this = ".size-"
            const SelectedSize = item.size?.replace(".size-", "");

            return(
              <div className={`each-item-container ${index == 0?'item-first':''}`} key={index}>

                {/* display image */}
                <img src={item.image && decodeURIComponent(item.image)} alt={item.name}/>

                <div className="item-details-display">
                  <div className="item-details">

                    {/* name, quantity display */}
                    <h5>{decodeURIComponent(item.name)}</h5>
                    {item.size && <p>Size : <span>{SelectedSize}</span></p>}

                    {/* again add to cart button */}
                    <button
                      className={`again-clicked-${item.id}`}
                      onClick={() => againClickHandle(item.name, item.image, item.price, item.id, item.size,item.conformDate)}
                    >
                      {buttonState[item.id] === "added" ? (
                        <strong style={{color:'green'}}>&#x2713; Added</strong>
                      ) : (
                        <>
                          <img src="/ByItAgain/by-it-again.png" alt=""/>
                          By it again
                        </>
                      )}
                    </button>

                  </div>
                </div>

              </div>
            )
          })}

        </div>
      )})}

    </div>
  ):(
    <>
      <h1>YOUR ORDER IS EMPTY</h1>
      <EmptyCart/>
    </>
  )
}

export default OrderItems