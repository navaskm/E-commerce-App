import React from 'react';
import  Link  from 'next/link';
import { fetchProduct } from "@/app/DataFetching/productdata";
import '@/app/styles/homepage/twoproduct/twoproduct.scss';

type Products = {
  name: string,
  image: string,
  rating: string,
  priceCents:string,
  type: string,
  keywords: string,
  offer:string,
  id: number,
  title: string,
  company: string,
  madein: string,
  Feature: string,
  size:string,
}

type ItemOne = {
  product?: string,
}

const allowedTypes = [
  'lapTop',
  'perFume',
  'cooker',
  'bulb',
  'umbrella',
  'chair',
];

const allAllowedTypes = [
  'lapTop',
  'perFume',
  'cooker',
  'bulb',
  'umbrella',
  'chair',
  'tv',
  'slipper',
  'Clock',
  'WaterBottle',
  'healthyFood',
  'phoneCharger',
];

async function TwoProducts({product}:ItemOne) {

  const response = await fetchProduct();

  let products = [];

  if(product == null){
    products = response.filter((items:Products) => allowedTypes.includes(items.type));
  }else{
    products = response.filter((items:Products) => items.type === product);
  };

  return (

    <div className={`${product == null ? 'home-page-two-product' : 'last-two-items'}`}>

      {allAllowedTypes.map((productType:string, index:number) => {

        // get product group
        const product = products.filter((product:Products) => product.type === productType);

        // umbrella and chair only medium device display 
        const onlyMediumDevice = (productType === 'umbrella' || productType === 'chair') && 'only-medium-device';

        return product.length > 0 && (
          <div key={index} className={`container-of-two-product col-6 col-md-4 col-lg-3 ${onlyMediumDevice} 
          ${product[0]?.type}`}>

            {product.map((item:Products, index:number) => (

              <React.Fragment key={item.id}>

                {/* display heading */}
                { index === 0 && (
                  <div key={item.id} className='title-of-two-product'>
                    <h3>{item.title}</h3>
                  </div>
                )}

                <div className={`image-offer-display-of-two-product ${index === 0 && 'marginBottom'}`}>
                  <Link 
                    style={
                      {
                        textDecoration:"none",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }
                    } 
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
                    }}
                  >

                    <img  src={item.image} alt={item.name}/>
                    <h5>{item.offer}</h5>

                  </Link>
                  
                </div>

              </React.Fragment>
            ))}

          </div>
        )

      })}

    </div>

  );

};

export default TwoProducts;