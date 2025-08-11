import { lazy,Suspense } from "react";
const TwoProducts = lazy(()=> import("../TwoProducts/TwoProducts"));
const LargeProduct = lazy(()=> import("../LargeProducts/LargeProduct"));

function LastOneProducts() {
  return (
    <>
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
    </>
  )
}

export default LastOneProducts;