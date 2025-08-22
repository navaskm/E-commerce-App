import { Suspense, lazy } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

import { fetchProduct } from "@/app/DataFetching/productdata";
import { fetchScrollingProduct } from "@/app/DataFetching/productdata";

const response = await fetchProduct();
const responseOfScrollingProducts = await fetchScrollingProduct();

//Loading imports
import NavbarSkeleton from "./components/HomePage/navbar/Skeleton/NavbarSkeleton";
import MainOfferSkeleton from "./components/HomePage/mainofferce/skeleton/mainofferskeleton";
import SmallProductsSkeleton from "./components/HomePage/SmallProducts/smallproductsskeleton";
import ScrollingSkeleton from "./components/HomePage/HomePageScrolling/Skeleton/ScrollingSkeleton";
import LargeProductSkeleton from "./components/HomePage/LargeProducts/Skeleton/LargeProductSkeleton";

// component imports
const NavBar = lazy(() => import("./components/HomePage/navbar/NavBar"));
const MainOffers = lazy(() => import ("./components/HomePage/mainofferce/mainoffers"));
const SmallProducts = lazy(() => import("./components/HomePage/SmallProducts/SmallProducts"));
const HomePageScrolling = lazy(() => import("./components/HomePage/HomePageScrolling/HomePageScrolling"));
const LargeProduct = lazy(() => import("./components/HomePage/LargeProducts/LargeProduct"));
const TwoProducts = lazy(() => import("./components/HomePage/TwoProducts/TwoProducts"));
const SmallScrolling = lazy(() => import("./components/HomePage/SmallScrolling/SmallScrolling"));
const LastOneProducts = lazy (() => import("./components/HomePage/LastOneProducts/LastOneProducts"));
const Footer = lazy(()=>import("./components/HomePage/Footer/page"));

// type imports
import { Products } from "@/types/type";
import { allowedSmallProductTypes } from "@/types/type";
import { scrollingProduct } from "@/types/type";
import { allowedFirstLargeProductTypes } from "@/types/type";
import { allowedLastOneProductTypes } from "@/types/type";
import { allowedFirstTwoTypes } from "@/types/type";
import { smallScrollingProduct } from "@/types/type";

const fourItems = response.filter((product: Products) => allowedSmallProductTypes.includes(product.type));
const firstLargeProducts = response.filter((item:Products)=> allowedFirstLargeProductTypes.includes(item.type));
const lastOneProducts = response.filter((item:Products)=> allowedLastOneProductTypes.includes(item.type));
const firstTwoProducts = response.filter((items:Products) => allowedFirstTwoTypes.includes(items.type));

export default function Home() {
  return (
    <SkeletonTheme baseColor="#aed4fa" highlightColor="#525252">
      <Suspense fallback={<NavbarSkeleton/>}>
        <NavBar />
      </Suspense>

      <Suspense fallback={<MainOfferSkeleton/>}>
        <MainOffers/>
      </Suspense>

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