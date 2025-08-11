import React from 'react';
import Link from 'next/link';
import { fetchProduct } from "@/app/DataFetching/productdata";
import '@/app/styles/homepage/largeproduct/largeproduct.scss';

type Products = {
  name: string,
  image: string,
  rating: string,
  priceCents:string,
  type: string,
  title: string,
  keywords: string,
  id: number,
  company: string,
  madein: string,
  Feature: string,
  size:string,
}

type ItemOne = {
  product?: string,
}

const allowedType = [
  'refrigerator',
  'washing-machine',
  'bed',
  'table',
  'gas-cooker',
  'ac'
]

async function LargeProduct({product}:ItemOne) {

  const response = await fetchProduct();

  let products = [];
  
  if(product == null){
    products = response.filter((item:Products)=> allowedType.includes(item.type));
  }else{
    products = response.filter((item:Products) => item.type === product);
  };

  return (
    <div className={`${product == null ? 'homepage-dynamic-large' : 'last-large-items'}`}>
      
      {products.map((item:Products) => {

        const mediumDeviceDisplay = (item.type === 'table' || item.type === 'bed') && 'medium-device-display';

        return (
          <div key={item.id} className={`homepage-large-container col-6 col-md-4 col-lg-3 ${mediumDeviceDisplay}`}>

            <div className="large-product-title">
              <h3>{item.title}</h3>
            </div>

            <div className="product-card">
              <Link href={{
                pathname: "/components/SelectedPage",
                query: {
                  name: encodeURIComponent(item.name),
                  priceCents: item.priceCents,
                  image: encodeURIComponent(item.image),
                  rating: item.rating,
                  id: item.id,
                  type: item.type,
                  keywords: item.keywords,
                  company: encodeURIComponent(item.company),
                  madein: encodeURIComponent(item.madein),
                  Feature: encodeURIComponent(item.Feature),
                  size: item.size,
                }
              }}>
                
                <img src={item.image} alt={item.name} />
                
              </Link>
            </div>

          </div>
        )

      })}

    </div>
  );
  
};

export default LargeProduct;