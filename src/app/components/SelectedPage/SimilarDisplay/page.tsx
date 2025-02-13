import { fetchProduct } from "@/app/datafetching/productdata";
import { fetchScrollingProduct } from "@/app/datafetching/productdata";
import Link from "next/link";
import similarProducts from '@/app/API/similar-product.json';
import BackToTop from "./backtotop/page";

// api similar product lines

// watch = 1 to 233        = 21
// shoes = 234 to 611      = 21
// mens = 612 to 968      = 21
// women = 969 to 1325      = 21
// Jewelry = 1326 to 1556   = 21
// sound-hub = 1557 to 1743 = 17
// sunglass = 1744 to 1828 = 5
// toys = 1830 to 1927     = 9
                  //total = 136  

// refrigerator 1928 to 2015 = 8 
// washing machine 2016 to 2103 = 8
// gas cooker 2104 to 2191 = 8
// AC 2192 to 2278 = 8
// bed 2279 to 2323 = 4
// table 2324 to 2367 = 4
              //total = 40 

// lapTop 2368 to 2598 = 21
// perFume 2599 to 2708 = 10
// cooker 2709 to 2818 = 10
// bulb 2818 to 2961 = 13
// umbrella 2962 to 3038 = 7
// chair 3039 to 3115 = 7
                  //total = 68

// TV 3116 to 3258 = 13
// water hose 3259 to 3302 = 4
// slipper 3303 to 3680  = 21
// curtain 3681 to 3746 = 6
// tank 3747 to 3812 = 6
// clock 3813 to 3999 = 18
// water bottle 4000 to 4098 = 9
// healthy food 4099 to 4285 = 17
// phone charger 4286 to 4374 = 8
                    // total = 102

// all total id is = 345

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
  size?:string,
  offer?: string,
}

const SimilarProducts = async ({selectedImage}:{selectedImage:Products}) => {

  let products : Products[] =  []

  console.log(selectedImage);

  //fetch product
  const similarProductOne = await fetchProduct();
  const productOne = similarProductOne.filter((product:Products)=> product.type===selectedImage.type);

  //fetch scrolling product
  const similarProductTwo = await fetchScrollingProduct();
  const productTwo = similarProductTwo.filter((product:Products)=> product.type===selectedImage.type);

  // find which the product (scrolling api of dynamic api)
  const product = productTwo.length === 0 ? productOne : productTwo;

  // push product in to the products
  products = products.concat(product);

  // remove selectedImage in display
  const finalProduct = products.filter((product:Products) => product.id !== selectedImage.id);

  // fetch similar products
  const similarProduct = similarProducts.filter(product => product.type == selectedImage.type);

  // remove selectedImage in display in similar products
  const similarFinalProduct = similarProduct.filter(product => Number(product.id) !== selectedImage.id);

  return (
    <div className="container-of-similar-product">
      {
        selectedImage.offer? <h3 className="offer-title">Best offer for you</h3>:<h3>Similar Products</h3>
      }

      {
        selectedImage.offer ? null : <BackToTop/>
      }

      <div className="container-of-each-similar-product">
        {
          finalProduct?.map((product:Products) => {

            return (
              <Link 
              key={product.id} 
              style={{textDecoration:"none"}}
              className='col-4 col-sm-5 col-md-3 col-lg-2 each-similar-product'
              href={{
                pathname: "/components/selectedpage",
                query: {
                  name: encodeURIComponent(product.name),
                  priceCents: product.priceCents,
                  image: encodeURIComponent(product.image),
                  rating: product.rating,
                  type: product.type,
                  id: product.id,
                  keywords: product.keywords,
                  company: encodeURIComponent(product.company),
                  madein: encodeURIComponent(product.madein),
                  Feature: encodeURIComponent(product.Feature),
                  size: product.size,
                }
              }}>
                  <img src={product.image} alt={product.name}/>
                  <h5>{product.name}</h5>
                  <b><span>₹</span>{product.priceCents}</b>
                  <p>{product.rating}&#9733;</p>
              </Link>
            )
          })
        }
        {
          similarFinalProduct?.map(product => {
            return (
              <Link 
              className="col-4 col-sm-5 col-md-3 col-lg-2 each-similar-product"
              key={product.id}
              style={{textDecoration:"none"}}
              href={{
                pathname: "/components/selectedpage",
                query: {
                  name: encodeURIComponent(product.name),
                  priceCents: product.priceCents,
                  image: encodeURIComponent(product.image),
                  rating: product.rating,
                  type: product.type,
                  id: product.id,
                  keywords: product.keywords,
                  company: encodeURIComponent(product.company),
                  madein: encodeURIComponent(product.madein),
                  Feature: encodeURIComponent(product.Feature),
                  size: product.size,
                }
              }}>
                <img src={product.image} alt={product.name}/>
                <h5>{product.name}</h5>
                <b><span>₹</span>{product.priceCents}</b>
                <p>{product.rating}&#9733;</p>
              </Link>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default SimilarProducts