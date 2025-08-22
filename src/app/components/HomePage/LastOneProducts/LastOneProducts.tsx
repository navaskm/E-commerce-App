import { lazy,Suspense } from "react";
const TwoProducts = lazy(()=> import("../TwoProducts/TwoProducts"));
const LargeProduct = lazy(()=> import("../LargeProducts/LargeProduct"));
import { Items } from "@/types/type";
import { Products } from "@/types/type";

function LastOneProducts({products}:Items) {

  const categories: Record<string, Products[]> = {
    waterHouse: [],
    curtain: [],
    waterTank: [],
    tv: [],
    slipper: [],
    Clock: [],
    WaterBottle: [],
    healthyFood: [],
    phoneCharger: [],
  };

  products.forEach(item => {
    if (categories[item.type]) {
      categories[item.type].push(item);
    }
  });

  const {
    waterHouse,
    curtain,
    waterTank,
    tv,
    slipper,
    Clock,
    WaterBottle,
    healthyFood,
    phoneCharger,
  } = categories;

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
        <TwoProducts products={Clock}/>
      </Suspense>

      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts products={WaterBottle}/>
      </Suspense>
      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts products={healthyFood}/>
      </Suspense>
 
      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts products={phoneCharger}/>
      </Suspense>
    </>
  );
};

export default LastOneProducts;