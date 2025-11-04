import { lazy,Suspense } from "react";
const BagsSports = lazy(() => import("./BagSports"));
import "@/style/homepage/homepagescrolling/homepagescrolling.scss"
import { Items } from "@/types/type";

const HomePageScrolling = ({products}:Items) => {

  return (
    <div className="homepage-scrolling">

      {/* display heading (bags of sport items) */}
      <div className="scrolling-title">
        {
          products?.[0]?.type === 'bag'? (
            <h1>Your Perfect Bag Awaits</h1>
          ):(
            <h1>Amazing Deals on Sports Gear</h1>
          )
        }
      </div>

      <Suspense fallback={<p>loading.....</p>}>
        <BagsSports products={products}/> 
      </Suspense>

    </div> 
  )
}

export default HomePageScrolling;