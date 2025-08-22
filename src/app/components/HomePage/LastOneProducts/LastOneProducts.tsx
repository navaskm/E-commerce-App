import { lazy,Suspense } from "react";
const TwoProducts = lazy(()=> import("../TwoProducts/TwoProducts"));
const LargeProduct = lazy(()=> import("../LargeProducts/LargeProduct"));
import { Items } from "@/types/type";

function LastOneProducts({products}:Items) {

  const waterHouse = products.filter((item)=> item.type === "waterHouse");
  const curtain = products.filter((item)=> item.type === "curtain");
  const waterTank = products.filter((item)=> item.type === "waterTank");

  const tv = products.filter((item)=> item.type === "tv");
  const slipper = products.filter((item)=> item.type === "slipper");
  const clock = products.filter((item)=> item.type === "Clock");
  const waterBottle = products.filter((item)=> item.type === "WaterBottle");
  const healthyFood = products.filter((item)=> item.type === "healthyFood");
  const phoneCharger = products.filter((item)=> item.type === "phoneCharger");

  return (
    <>
      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts products={tv}/>
      </Suspense>
      <Suspense fallback={<p>Loading largeProducts</p>}>
        <LargeProduct products={waterHouse}/>
      </Suspense>

      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts products={slipper}/>
      </Suspense>
      <Suspense fallback={<p>Loading largeProducts</p>}>
        <LargeProduct products={curtain} />
      </Suspense>

      <Suspense fallback={<p>Loading largeProducts</p>}>
        <LargeProduct products={waterTank} />
      </Suspense>
      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts products={clock}/>
      </Suspense>

      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts products={waterBottle}/>
      </Suspense>
      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts products={healthyFood}/>
      </Suspense>
 
      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts products={phoneCharger}/>
      </Suspense>
    </>
  )
}

export default LastOneProducts;