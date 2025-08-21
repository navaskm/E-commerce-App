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
import { allowedTypes } from "@/types/type";
import { scrollingProduct } from "@/types/type";

const fourItems: Products[] = response.filter((product: Products) =>
  allowedTypes.includes(product.type)
);

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

      {scrollingProduct.map(key => {
        const items = responseOfScrollingProducts.filter((product: Products) => product.type === key);

        return (
          <Suspense fallback={<ScrollingSkeleton />} key={key}>
            <HomePageScrolling products={items} />
          </Suspense>
        )
      })}

      <Suspense fallback={<LargeProductSkeleton/>}>
        <LargeProduct />
      </Suspense>

      <Suspense fallback={<LargeProductSkeleton/>}>
        <TwoProducts />
      </Suspense>

      <Suspense fallback={<ScrollingSkeleton/>}>
        <SmallScrolling item='face-wash' />
      </Suspense>
      <Suspense fallback={<ScrollingSkeleton/>}>
        <SmallScrolling item='phone'/>
      </Suspense>

      {/* Add more products here */}

       <Suspense fallback={<LargeProductSkeleton/>}>
        <LastOneProducts />
      </Suspense> 

      <Suspense fallback={<NavbarSkeleton/>}>
        <Footer />
      </Suspense> 
    </SkeletonTheme>
  );
};