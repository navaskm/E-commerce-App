export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { Suspense, lazy } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { fetchProduct,fetchScrollingProduct } from "@/data/productdata";

//Loading imports
import NavbarSkeleton from "../skeletons/NavbarSkeleton";
import SmallProductsSkeleton from "@/skeletons/SmallProductsSkeleton";
import ScrollingSkeleton from "../skeletons/ScrollingSkeleton";
import LargeProductSkeleton from "../skeletons/LargeProductSkeleton";

// component imports
const NavBar = lazy(() => import("../components/HomePage/NavBar/NavBar"));
const MainOffers = lazy(() => import ("../components/HomePage/mainofferce/mainoffers"));
const SmallProducts = lazy(() => import("../components/HomePage/SmallProducts/SmallProducts"));
const HomePageScrolling = lazy(() => import("../components/HomePage/HomePageScrolling/HomePageScrolling"));
const LargeProduct = lazy(() => import("../components/HomePage/LargeProducts/LargeProduct"));
const TwoProducts = lazy(() => import("../components/HomePage/TwoProducts/TwoProducts"));
const SmallScrolling = lazy(() => import("../components/HomePage/SmallScrolling/SmallScrolling"));
const LastOneProducts = lazy (() => import("../components/HomePage/LastOneProducts/LastOneProducts"));
const Footer = lazy(()=>import("../components/HomePage/Footer/Footer"));

// type imports
import { Products, allowedSmallProductTypes, scrollingProduct, allowedFirstLargeProductTypes, allowedLastOneProductTypes, allowedFirstTwoTypes, smallScrollingProduct } from "@/types/type";

export default async function Home() {

  let response:Products[] = [];
  let responseOfScrollingProducts:Products[] = [];

  try {
    response = await fetchProduct();
    responseOfScrollingProducts = await fetchScrollingProduct();
  } catch (error) {
    throw new Error("failed to fetch")
  }

  const fourItems : Products[] = [];
  const firstLargeProducts : Products[] = [];
  const lastOneProducts : Products[] = [];
  const firstTwoProducts : Products[] = [];

  response.forEach((item: Products) => {

    if(allowedSmallProductTypes.includes(item.type)){
      fourItems.push(item);
    }else if(allowedFirstLargeProductTypes.includes(item.type)){
      firstLargeProducts.push(item);
    }else if(allowedLastOneProductTypes.includes(item.type)){
      lastOneProducts.push(item);
    }else if(allowedFirstTwoTypes.includes(item.type)){
      firstTwoProducts.push(item);
    };

  });

  return (
    <SkeletonTheme baseColor="#aed4fa" highlightColor="#525252">
      <Suspense fallback={<NavbarSkeleton/>}>
        <NavBar />
      </Suspense>

      <MainOffers/>

      <Suspense fallback={<SmallProductsSkeleton/>}>
        <SmallProducts products={fourItems}/>
      </Suspense>

      {/* bags and sports items */}
      {scrollingProduct.map(key => {
        const items = responseOfScrollingProducts.filter((product: Products) => product.type === key);

        return (
          <Suspense fallback={<ScrollingSkeleton />} key={key}>
            <HomePageScrolling products={items} />
          </Suspense>
        )
      })}

      <Suspense fallback={<LargeProductSkeleton/>}>
        <LargeProduct products={firstLargeProducts}/>
      </Suspense>

      <Suspense fallback={<LargeProductSkeleton/>}>
        <TwoProducts products={firstTwoProducts}/>
      </Suspense>

      {/* face wash and phone items */}
      {smallScrollingProduct.map(key => {
        const items = responseOfScrollingProducts.filter((product: Products) => product.type === key);

        return (
          <Suspense fallback={<ScrollingSkeleton />} key={key}>
            <SmallScrolling products={items} />
          </Suspense>
        )
      })}

      {/* Add more products here */}
       <Suspense fallback={<LargeProductSkeleton/>}>
        <LastOneProducts products={lastOneProducts}/>
      </Suspense> 

      <Suspense fallback={<NavbarSkeleton/>}>
        <Footer />
      </Suspense> 
    </SkeletonTheme>
  );
};