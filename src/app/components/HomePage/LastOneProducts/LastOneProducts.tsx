import { lazy,Suspense } from "react";
const TwoProducts = lazy(()=> import("../twoproducts/twoproducts"));
const LargeProduct = lazy(()=> import("../largeproducts/largeproduct"));
import '@/app/styles/homepage/lastoneproducts/lastoneproducts.scss';

function LastOneProducts() {
  return (
    <div className="last-one-item-container">

      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts product='tv'/>
      </Suspense>
      <Suspense fallback={<p>Loading largeProducts</p>}>
        <LargeProduct product='waterHouse' />
      </Suspense>

      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts product='slipper'/>
      </Suspense>
      <Suspense fallback={<p>Loading largeProducts</p>}>
        <LargeProduct product='curtain' />
      </Suspense>

      <Suspense fallback={<p>Loading largeProducts</p>}>
        <LargeProduct product='waterTank' />
      </Suspense>
      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts product='Clock'/>
      </Suspense>

      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts product='WaterBottle'/>
      </Suspense>
      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts product='healthyFood'/>
      </Suspense>

 
      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts product='phoneCharger'/>
      </Suspense>   

    </div>
  )
}

export default LastOneProducts