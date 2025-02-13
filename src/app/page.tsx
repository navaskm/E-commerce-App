import { Suspense, lazy } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

//Loading imports
import NavbarSkeleton from "./components/HomePage/navbar/Skeleton/navbarskeleton";
import MainOfferSkeleton from "./components/HomePage/MainOffers/Skeleton/mainofferskeleton";
import SmallProductsSkeleton from "./components/HomePage/SmallProducts/Skeleton/smallproductsskeleton";
import ScrollingSkeleton from "./components/HomePage/HomePageScrolling/Skeleton/scrollingskeleton";
import LargeProductSkeleton from "./components/HomePage/LargeProducts/Skeleton/largeproductskeleton";

const NavBar = lazy(() => import("./components/HomePage/navbar/navbar"));
const MainOffers = lazy(() => import ("./components/HomePage/MainOffers/mainoffers"));
const SmallProducts = lazy(() => import("./components/HomePage/SmallProducts/smallproducts"));
const HomePageScrolling = lazy(() => import("./components/HomePage/HomePageScrolling/homepagescrolling"));
const LargeProduct = lazy(() => import("./components/HomePage/LargeProducts/largeproduct"));
const TwoProducts = lazy(() => import("./components/HomePage/TwoProducts/twoproducts"));
const SmallScrolling = lazy(() => import("./components/HomePage/SmallScrolling/smallscrolling"));
const LastOneProducts = lazy (() => import("./components/HomePage/LastOneProducts/lastoneproducts"));

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