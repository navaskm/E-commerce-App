"use client";

import { lazy,Suspense,useEffect } from "react";
import { useSearchParams } from "next/navigation";

import NavbarSkeleton from "../../../skeletons/homepage/NavbarSkeleton";
import ImageDisplaySkeleton from "./ImageDisplay/Skeleton/ImageDisplaySkeleton";
import SimilarProductsSkeleton from "./SimilarDisplay/Skeleton/SimilarDisplaySkeleton";

const NavBar = lazy(() => import("../HomePage/navbar/NavBar"));
const ImageDisplay = lazy(() => import("./ImageDisplay/ImageDisplay"));
const ImageFeature = lazy(() => import("./ImageFeature/ImageFeature"));
const SimilarProducts = lazy(() => import("./SimilarDisplay/page"));
const Footer = lazy(()=>import("../HomePage/Footer/page"));

import '@/app/styles/selectdpage/selectpage.scss';

const SelectItemPage = () => {

  const searchParams = useSearchParams();

  const offerProductDisplay = searchParams.get("offer");
  
  // scroll in to the top
  window.scrollTo(0, 0);

  // create title of this page
  useEffect(() => {
    const name = searchParams.get("name");
    if (name) {
      document.title = `About ${decodeURIComponent(name)}`;
    } else {
      document.title = "Product Details";
    }
  }, [searchParams]);

  if (offerProductDisplay){
    return (
      // offer products display 
      <Suspense fallback={<SimilarProductsSkeleton/>}>
        <SimilarProducts/>
      </Suspense>
    )
  }

  return (
    <>
      <Suspense fallback={<NavbarSkeleton/>}>
        <NavBar/>
      </Suspense>

      <div className="image-features-container">
          {/* image size,image, add to cart, quantity of product display*/}
        <Suspense fallback={<ImageDisplaySkeleton/>}>
          <ImageDisplay/>
        </Suspense>

          {/* features display */}
        <Suspense fallback={<ImageDisplaySkeleton/>}>
          <ImageFeature/>
        </Suspense>
      </div>

      {/* similar products display */}
      <Suspense fallback={<SimilarProductsSkeleton/>}>
        <SimilarProducts/>
      </Suspense>

      <Suspense fallback={<NavbarSkeleton/>}>
        <Footer/>
      </Suspense>

    </>
  )
}

export default SelectItemPage