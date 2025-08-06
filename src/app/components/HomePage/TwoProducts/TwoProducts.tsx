import '@/app/styles/homepage/twoproduct/twoproduct.scss';
import { fetchProduct } from "@/app/DataFetching/productdata";

import  Link  from 'next/link';

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

  // first two products
  return product == null?  (
    <div className='home-page-two-product'>

      {
        smallItems.map((item:Products, index:number) => {

          // find which item display
          const findProduct = (productType:string) => {
            return smallItems.filter((product:Products) => product.type == productType);
          }
          const Product = findProduct(item.type);

          // display not two time. only one item display logic
          const displayOneItem = index % 2 === 0;

          // create classname for only medium device display 
          const onlyMediumDevice = (item.type === 'umbrella' || item.type === 'chair')? 'only-medium-device': null;

          return displayOneItem && (
            
            <div key={item.id} className={`col-6 col-md-4 col-lg-3 container-of-two-product ${onlyMediumDevice}`}>

              <div className='title-of-two-product'>
                <h3>{item.title}</h3>
              </div>

              {
                Product && Product.map((Product:Products,index:number) => {

                  // create first image classname
                  const marginBottom = index === 0 ? 'marginBottom' : null;

                  return (
                    <div key={Product.id} className={`image-offer-display-of-two-product ${marginBottom}`}>
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
                      }}>

                        <img  src={Product.image} alt={Product.name}/>
                        <h5>{Product.offer}</h5>

                      </Link>
                      
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }

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

export default TwoProducts
