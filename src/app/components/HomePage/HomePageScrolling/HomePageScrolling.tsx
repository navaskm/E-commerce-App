import { lazy,Suspense } from "react";
import { fetchScrollingProduct } from "@/app/datafetching/productdata";
import "@/app/styles/homepage/homepagescrolling/homepagescrolling.scss";
const BagsSports = lazy(() => import("./bagsports/bagsports"));

type Products = {
  id:string;
  name: string,
  image: string,
  priceCents: string,
  rating: string,
  type: string,
  keywords: string,
  offer: string,
}

type Items ={
  item: string;
}

const HomePageScrolling = async ({item}:Items) => {

  const product = await fetchScrollingProduct();

  const bags = product.filter((product:Products) => product.type == "bag");
  const sports = product.filter((product:Products) => product.type == "sports-item");

  return (
    <div className="homepage-scrolling">

      <div className="scrolling-title">
        {
          item == 'bag'? (
            <h1>Your Perfect Bag Awaits</h1>
          ):(
            <h1>Amazing Deals on Sports Gear</h1>
          )
        }
      </div>

      {
        item == 'bag'? (
          <Suspense fallback={<p>bag.....</p>}>
            <BagsSports product={bags} order={item}/> 
          </Suspense>
        ):(
          <Suspense fallback={<p>bag.....</p>}>
            <BagsSports product={sports} order={item}/> 
          </Suspense>
        )
      }

    </div> 
  )
}

export default HomePageScrolling;