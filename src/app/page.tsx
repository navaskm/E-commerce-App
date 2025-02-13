import { Suspense, lazy } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

//Loading imports
import NavbarSkeleton from "./components/homepage/navbar/skeleton/navbarskeleton";
import MainOfferSkeleton from "./components/homepage/mainofferce/skeleton/mainofferskeleton";
import SmallProductsSkeleton from "./components/homepage/smallproducts/smallproductsskeleton";
import ScrollingSkeleton from "./components/homepage/homepagescrolling/skeleton/scrollingskeleton";
import LargeProductSkeleton from "./components/homepage/largeproducts/skeleton/largeproductskeleton";

const NavBar = lazy(() => import("./components/homepage/navbar/navbar"));
const MainOffers = lazy(() => import ("./components/homepage/mainofferce/mainoffers"));
const SmallProducts = lazy(() => import("./components/homepage/smallproducts/smallproducts"));
const HomePageScrolling = lazy(() => import("./components/homepage/HomePageScrolling/homepagescrolling"));
const LargeProduct = lazy(() => import("./components/homepage/largeproducts/largeproduct"));
const TwoProducts = lazy(() => import("./components/homepage/twoproducts/twoproducts"));
const SmallScrolling = lazy(() => import("./components/homepage/smallscrolling/smallscrolling"));
const LastOneProducts = lazy (() => import("./components/homepage/lastoneproducts/lastoneproducts"));

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
        <SmallProducts />
      </Suspense>
        
      <Suspense fallback={<ScrollingSkeleton/>}>
        <HomePageScrolling item='bag'/>
      </Suspense>
      <Suspense fallback={<ScrollingSkeleton/>}>
        <HomePageScrolling item='sports-item'/>
      </Suspense>

      <Suspense fallback={<LargeProductSkeleton/>}>
        <LargeProduct />
      </Suspense>

      <Suspense fallback={<LargeProductSkeleton/>}>
        <TwoProducts />
      </Suspense>

      <Suspense fallback={<ScrollingSkeleton/>}>
        <SmallScrolling item='faceWash' />
      </Suspense>
      <Suspense fallback={<ScrollingSkeleton/>}>
        <SmallScrolling item='phone'/>
      </Suspense>

      {/* Add more products here */}

       <Suspense fallback={<LargeProductSkeleton/>}>
        <LastOneProducts />
      </Suspense> 
    </SkeletonTheme>
  );
}