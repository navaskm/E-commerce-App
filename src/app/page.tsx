import { Suspense, lazy } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

//Loading imports
import NavbarSkeleton from "./components/homepage/navbar/skeleton/navbarskeleton";
import MainOfferSkeleton from "./components/homepage/MainOffers/Skeleton/mainofferskeleton";
import SmallProductsSkeleton from "./components/homepage/SmallProducts/Skeleton/smallproductsskeleton";
import ScrollingSkeleton from "./components/homepage/HomePageScrolling/Skeleton/scrollingskeleton";
import LargeProductSkeleton from "./components/homepage/LargeProducts/Skeleton/largeproductskeleton";

const NavBar = lazy(() => import("./components/homepage/navbar/navbar"));
const MainOffers = lazy(() => import ("./components/homepage/MainOffers/mainoffers"));
const SmallProducts = lazy(() => import("./components/homepage/SmallProducts/smallproducts"));
const HomePageScrolling = lazy(() => import("./components/homepage/HomePageScrolling/homepagescrolling"));
const LargeProduct = lazy(() => import("./components/homepage/LargeProducts/largeproduct"));
const TwoProducts = lazy(() => import("./components/homepage/TwoProducts/twoproducts"));
const SmallScrolling = lazy(() => import("./components/homepage/SmallScrolling/smallscrolling"));
const LastOneProducts = lazy (() => import("./components/homepage/LastOneProducts/lastoneproducts"));

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