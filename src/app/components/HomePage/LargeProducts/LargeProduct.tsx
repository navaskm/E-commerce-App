import '@/app/styles/homepage/largeproduct/largeproduct.scss';
import { fetchProduct } from "@/app/DataFetching/productdata";
import Link from 'next/link';

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

const items : Products[] = [];

const response = await fetchProduct();
// first large products
const refrigerator = response.filter((product:Products) => product.type === 'refrigerator');
const washingMachine = response.filter((product:Products) => product.type === 'washing-machine');
const bed = response.filter((bed:Products) => bed.type === 'bed');
const table = response.filter((table:Products) => table.type === 'table');
const gasCooker = response.filter((gasCooker:Products) => gasCooker.type === 'gas-cooker');
const ac = response.filter((ac:Products) => ac.type === 'ac');

items.push(...refrigerator, ...washingMachine, ...bed, ...table, ...gasCooker, ...ac);

// last large products
const curtain = response.filter((curtain:Products) => curtain.type === 'curtain');
const waterHouse = response.filter((waterHouse:Products) => waterHouse.type === 'waterHouse');
const waterTank = response.filter((waterTank:Products) => waterTank.type === 'waterTank');

function LargeProduct({product}:ItemOne) {

  // last large items store
  let item: Products[] | null = null;

  if (product == 'curtain'){
    item = curtain;
  }else if(product == 'waterHouse'){
    item = waterHouse;
  }else if(product == 'waterTank'){
    item = waterTank;
  }

  // first large items display
  return product == null ? (
    <div className="homepage-dynamic-large">

      {
        items.map(productOne => {

          const findProduct = (productType:string) => {
            return items.filter((product:Products) => product.type == productType);
          }

          const oneProduct = findProduct(productOne.type);

          const mediumDeviceDisplay = (productOne.type == 'table' || productOne.type == 'bed') ? 
          'medium-device-display': null;

          return (
            <div className={`homepage-large-container col-6 col-md-4 col-lg-3 ${mediumDeviceDisplay}`} key={productOne.id}>
              <div className="large-product-title">
                <h3>{productOne.title}</h3>
              </div>
              {
                oneProduct.map((item:Products) => {
                  return (
                    <div key={item.id} className="product-card">
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
                  )
                })
              }
          </div>
          )
        })
      }

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

export default LargeProduct
