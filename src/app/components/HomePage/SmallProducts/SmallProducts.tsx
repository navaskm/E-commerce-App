import '@/app/homepagesmall/smallproducts.scss'

import Link from "next/link";
import { fetchProduct } from "@/app/DataFetching/productdata";
const response = await fetchProduct();

type Products = {
  name: string,
  title:string,
  image: string,
  rating: string,
  priceCents:string,
  type: string,
  keywords: string,
  id: number,
  company: string,
  madein: string,
  Feature: string,
  size:string,
}

const allowedTypes = [
  'watch',
  'shoes',
  'mens-clothes',
  'women-clothes',
  'Jewelry',
  'sound-hub',
  'sunglass',
  'toys',
];

const fourItems: Products[] = response.filter((product: Products) =>
  allowedTypes.includes(product.type)
);

function SmallProducts() {
  return (
    <div className="container-of-all-products row">

      {
        fourItems.map((product:Products, index:number) => {

          // find which product display
          const findProduct = (productType:string) => {
            return fourItems.filter((item: Products) => item.type === productType);
          }
          const oneProduct = findProduct(product.type);

          console.log(oneProduct);

          // create only only product display
          let displayOneItem = index % 3 === 2;
          if(index === 11 || index === 23){
            displayOneItem = false;
          }

          const largeDeviseDisplay = (product.type === 'toys' || product.type === 'sunglass')? 'only-large-device':null;

          return displayOneItem && (
            <div className={`container-of-one-product col-12 col-md-4 col-xl-3 ${largeDeviseDisplay}`}
            key={product.id}>

              <div className='title'>
                <h3>{product.title}</h3>
              </div>
              
              <div className='product-body'>
                {
                  oneProduct.map((item:Products) => {
                    return (
                      <div key={item.id} className="product-details-display">

                        {/* image click time pass value to selected page */}
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
                            <img src={item.image} alt={item.name}/>
                        </Link>

                          {/* this div click time pass value to selected page */}
                        <Link style={{ textDecoration: 'none' }} href={{
                          pathname: "/components/SelectedPage",
                          query: {
                            name: encodeURIComponent(item.name),
                            priceCents: item.priceCents,
                            image: encodeURIComponent(item.image),
                            rating: item.rating,
                            type: item.type,
                            id: item.id,
                            keywords: item.keywords,
                            company: encodeURIComponent(item.company),
                            madein: encodeURIComponent(item.madein),
                            Feature: encodeURIComponent(item.Feature),
                            size: item.size,
                          }
                          }}>
                            <div className='name-price-display'>
                              <h6>{item.name}</h6>
                              <div className='price-star-display'>
                                <b><span>₹</span>{item.priceCents}</b>
                                <p>{item.rating}&#9733;</p>
                              </div>
                            </div>
                        </Link>

                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default SmallProducts;