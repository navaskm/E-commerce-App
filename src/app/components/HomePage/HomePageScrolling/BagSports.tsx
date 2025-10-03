"use client";
import Link from "next/link";
import { Items } from "@/types/type";

function BagsSports({products}:Items) {

  // left and right side button handle click
  const scrolling = (direction:'left' | 'right')=>{

    const scrollContainer = document.querySelector(`.scrolling-products-${products?.[0]?.type}`);
    if(!scrollContainer) return null;

    const scrollOfSet = window.innerWidth-100;
    const scrollDistance = direction === "left" ? -scrollOfSet : scrollOfSet;

    scrollContainer.scrollBy({left: scrollDistance, behavior: 'smooth'});
  };

  return (
    <div className="scrolling-product-container">

      <button className="scroll-button left" onClick={()=>scrolling('left')}>←</button>

      <div className={`scrolling-products-${products?.[0]?.type}`}>
        {products.map((item) => (
          <div  key={item.id}>

            <Link 
              style={
                {
                  textDecoration:"none",
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                }
              } 

              href={{
                pathname: "/components/SelectedPage",
                query: {
                  name: encodeURIComponent(item.name),
                  priceCents: item.priceCents,
                  rating: item.rating,
                  id: item.id,
                  type: item.type,
                  keywords: item.keywords,
                  image: encodeURIComponent(item.image),
                  company: encodeURIComponent(item.company),
                  madein: encodeURIComponent(item.madein),
                  Feature: encodeURIComponent(item.Feature),
                  size: item.size,
                },
              }}>
            
              <div className="image-wrapper">
                <img src={item.image} alt={item.name} loading="lazy"/>
                <h5>{item.name}</h5>
                <div className="scrolling-image-offer">
                  <h4>{item.offer}</h4>
                </div>
              </div>

            </Link>
            
          </div>
        ))}
      </div>

      <button className="scroll-button right" onClick={()=>scrolling('right')}>→</button>

    </div>
  )
}

export default BagsSports;