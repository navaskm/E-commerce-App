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

  const items = response.filter((item:Products)=> allowedType.includes(item.type));

  // last large products
  const curtain = response.filter((curtain:Products) => curtain.type === 'curtain');
  const waterHouse = response.filter((waterHouse:Products) => waterHouse.type === 'waterHouse');
  const waterTank = response.filter((waterTank:Products) => waterTank.type === 'waterTank');


  // last large items store
  let item: Products[] | null = null;

  if (product == 'curtain'){
    item = curtain;
  }else if(product == 'waterHouse'){
    item = waterHouse;
  }else if(product == 'waterTank'){
    item = waterTank;
  }

  return product == null ? (

    // first large items display
    <div className="homepage-dynamic-large">

      {allowedType.map((productType:string, index:number) => {

        const oneProduct = items.filter((product:Products) => product.type == productType);
        const mediumDeviceDisplay = (productType == 'table' || productType == 'bed') && 'medium-device-display';

        return (
          <div className={`homepage-large-container col-6 col-md-4 col-lg-3 ${mediumDeviceDisplay}`} key={index}>
            {oneProduct.map((item:Products) => (

              <React.Fragment key={item.id}>

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
              </React.Fragment>

            ))}
          </div>
        )

      })}

    </div>

  ) : (

    // last large items display
    <div className="homepage-large-container col-6 col-md-4 col-lg-3">

      <div className="large-product-title">
        {
          item && item.length > 0 && <h3>{item[0].title}</h3>
        }
      </div>

      {
        item && item.map((item:Products) => { 
          return (
            <Link  key={item.id}
              href={{
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

                <div className="last-large-product">
                  <img src={item.image} alt={item.name} />
                </div>

            </Link>
          )
        })
      }

    </div>  
  )
}

export default LargeProduct;