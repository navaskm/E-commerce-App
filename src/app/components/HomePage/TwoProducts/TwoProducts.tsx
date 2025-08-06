import React from 'react';
import  Link  from 'next/link';
import '@/app/styles/homepage/twoproduct/twoproduct.scss';
import { fetchProduct } from "@/app/DataFetching/productdata";

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

async function TwoProducts({product}:ItemOne) {

  const response = await fetchProduct();

  if(product == null){
    var smallItems = response.filter((items:Products) => allowedTypes.includes(items.type));
  }else {
    var item = response.filter((items:Products) => items.type === product);
  };

  return product == null ? (

    // first two products
    <div className='home-page-two-product'>

      {allowedTypes.map((productType:string, index:number) => {

        // get product group
        const Product = smallItems.filter((product:Products) => product.type === productType);

        // umbrella and chair only medium device display 
        const onlyMediumDevice = (productType === 'umbrella' || productType === 'chair')? 'only-medium-device': null;

        return (
          <div key={index} className={`col-6 col-md-4 col-lg-3 container-of-two-product ${onlyMediumDevice}`}>

            {Product.map((Product:Products, index:number) => (

              <React.Fragment key={Product.id}>

                {/* display heading */}
                { index === 0 && (
                  <div key={Product.id} className='title-of-two-product'>
                    {/* only first letter display in upper case */}
                    <h3>{productType.charAt(0).toUpperCase() + productType.slice(1).toLowerCase()}</h3>
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
                        name: encodeURIComponent(Product.name),
                        priceCents: Product.priceCents,
                        image: encodeURIComponent(Product.image),
                        rating: Product.rating,
                        id: Product.id,
                        type: Product.type,
                        keywords: Product.keywords,
                        company: encodeURIComponent(Product.company),
                        madein: encodeURIComponent(Product.madein),
                        Feature: encodeURIComponent(Product.Feature),
                        size: Product.size,
                      }
                    }}
                  >

                    <img  src={Product.image} alt={Product.name}/>
                    <h5>{Product.offer}</h5>

                  </Link>
                  
                </div>

              </React.Fragment>
            ))}

          </div>
        );

      })}

    </div>

  ):(
      
    //last two items
    <div className={`col-6 col-md-4 col-lg-3 container-of-two-product  ${item?.[0]?.type || null}`}>

      <div className='title-of-two-product'>
        {
          item && item.length > 0 && <h3>{item[0].title}</h3>
        }
      </div>
      {

        item && item.map((item:Products,index:number) => {

          // create first image classname
          const marginBottom = index === 0 ? 'marginBottom' : null;

          return (
            <Link  key={item.id}
              style={{textDecoration:"none"}}
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

              <div className={`last-products-display ${marginBottom}`}>
                <img src={item.image} alt={item.name}/>
                <h5>{item.offer}</h5>
              </div>

            </Link>
          )
        })
        
      }
    </div>  
    
  )
}

export default TwoProducts;