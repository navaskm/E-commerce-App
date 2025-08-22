import React from 'react';
import  Link  from 'next/link';
import { Items } from '@/types/type';
import { allAllowedAllTwoProductsTypes } from '@/types/type';
import '@/app/styles/homepage/twoproduct/twoproduct.scss';

function TwoProducts({products}:Items) {

  return (

    <div className={`${products.length > 2 ? 'home-page-two-product' : 'last-two-items'}`}>

      {allAllowedAllTwoProductsTypes.map((productType:string, index:number) => {

        // get product group
        const product = products.filter((product) => product.type === productType);

        // umbrella and chair only medium device display 
        const onlyMediumDevice = (productType === 'umbrella' || productType === 'chair') && 'only-medium-device';

        return product.length > 0 && (
          <div key={index} className={`container-of-two-product col-6 col-md-4 col-lg-3 ${onlyMediumDevice} 
          ${product[0]?.type}`}>

            {product.map((item, index:number) => (

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