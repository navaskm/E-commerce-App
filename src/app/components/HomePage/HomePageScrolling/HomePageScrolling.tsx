import { lazy,Suspense } from "react";
import { fetchScrollingProduct } from "@/app/DataFetching/productdata";
import "@/app/styles/homepage/homepagescrolling/homepagescrolling.scss";
const BagsSports = lazy(() => import("./BagSports/BagSports"));

type Products = {
  id:string;
  name: string,
  image: string,
  priceCents: string,
  rating: string,
  type: string,
  keywords: string,
  offer: string,
  company: string,
  madein: string,
  Feature: string,
  size:string,
}

type Items ={
  item: string;
}

const HomePageScrolling = async ({item}:Items) => {

  const product = await fetchScrollingProduct();
  const arrayOfProducts = product.filter((product:Products)=>product.type === item);

  return (
    <div className="homepage-scrolling">

      {/* display heading (bags of sport items) */}
      <div className="scrolling-title">
        {
          item === 'bag'? (
            <h1>Your Perfect Bag Awaits</h1>
          ):(
            <h1>Amazing Deals on Sports Gear</h1>
          )
        }
      </div>

      <Suspense fallback={<p>loading.....</p>}>
        <BagsSports product={arrayOfProducts} order={item}/> 
      </Suspense>

    </div> 
  )
}

export default HomePageScrolling;