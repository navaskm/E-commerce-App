import { lazy,Suspense } from "react";
const TwoProducts = lazy(()=> import("../TwoProducts/TwoProducts"));
const LargeProduct = lazy(()=> import("../LargeProducts/LargeProduct"));
import { Items } from "@/types/type";

function LastOneProducts({products}:Items) {

  const waterHouse = products.filter((item)=> item.type === "waterHouse");
  const curtain = products.filter((item)=> item.type === "curtain");
  const waterTank = products.filter((item)=> item.type === "waterTank");

  return (
    <>
      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts product='tv'/>
      </Suspense>
      <Suspense fallback={<p>Loading largeProducts</p>}>
        <LargeProduct products={waterHouse}/>
      </Suspense>

      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts product='slipper'/>
      </Suspense>
      <Suspense fallback={<p>Loading largeProducts</p>}>
        <LargeProduct products={curtain} />
      </Suspense>

      <Suspense fallback={<p>Loading largeProducts</p>}>
        <LargeProduct products={waterTank} />
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