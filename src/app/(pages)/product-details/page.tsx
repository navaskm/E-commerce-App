"use client";

import { lazy,Suspense,useEffect } from "react";
import { useSearchParams } from "next/navigation";

import NavbarSkeleton from "../../../skeletons/NavbarSkeleton";
import SimilarProductsSkeleton from "../../../skeletons/SimilarDisplaySkeleton";

const NavBar = lazy(() => import("../../../components/HomePage/NavBar/NavBar"));
const ImageDisplay = lazy(() => import("@/components/DetailsPage/ImageDisplay/ImageDisplay"));
const ImageFeature = lazy(() => import("@/components/DetailsPage/ImageFeature/ImageFeature"));
const SimilarProducts = lazy(() => import("@/components/DetailsPage/SimilarDisplay/page"));
const Footer = lazy(()=>import("../../../components/HomePage/Footer/page"));

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
        <ImageDisplay/>
        {/* features display */}
        <ImageFeature/>
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