import { Suspense, lazy } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

//Loading imports
import NavbarSkeleton from "./components/HomePage/navbar/Skeleton/NavbarSkeleton";
import MainOfferSkeleton from "./components/HomePage/mainofferce/skeleton/mainofferskeleton";
import SmallProductsSkeleton from "./components/HomePage/SmallProducts/smallproductsskeleton";
import ScrollingSkeleton from "./components/HomePage/HomePageScrolling/Skeleton/ScrollingSkeleton";
import LargeProductSkeleton from "./components/HomePage/LargeProducts/Skeleton/LargeProductSkeleton";

const NavBar = lazy(() => import("./components/HomePage/navbar/NavBar"));
const MainOffers = lazy(() => import ("./components/HomePage/mainofferce/mainoffers"));
const SmallProducts = lazy(() => import("./components/HomePage/SmallProducts/SmallProducts"));
const HomePageScrolling = lazy(() => import("./components/HomePage/HomePageScrolling/HomePageScrolling"));
const LargeProduct = lazy(() => import("./components/HomePage/LargeProducts/LargeProduct"));
const TwoProducts = lazy(() => import("./components/HomePage/TwoProducts/TwoProducts"));
const SmallScrolling = lazy(() => import("./components/HomePage/SmallScrolling/SmallScrolling"));
const LastOneProducts = lazy (() => import("./components/HomePage/LastOneProducts/LastOneProducts"));

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
