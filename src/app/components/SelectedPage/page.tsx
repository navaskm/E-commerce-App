import { lazy,Suspense } from "react";

import NavbarSkeleton from "../homepage/navbar/skeleton/navbarskeleton";
import ImageDisplaySkeleton from "./ImageDisplay/Skeleton/imagedisplayskeleton";
import SimilarProductsSkeleton from "./SimilarDisplay/Skeleton/similardisplayskeleton";

const NavBar = lazy(() => import("../homepage/navbar/navbar"));
const ImageDisplay = lazy(() => import("./ImageDisplay/imagedisplay"));
const ImageFeature = lazy(() => import("./ImageFeature/imagefeature"));
const SimilarProducts = lazy(() => import("./SimilarDisplay/page"));

import '@/app/styles/selectdpage/selectpage.scss';

type Products = {
  name: string,
  title:string,
  image: string,
  rating: string,
  priceCents:string,
  type: string,
  keywords: string,
  id: number,
  company: string,
  madein: string,
  Feature: string,
  size:string,
  offer?: string,

  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Generate metadata dynamically based on searchParams
export async function generateMetadata({ searchParams }: {searchParams: Promise<{name:string}>}) {
  const {name} = await searchParams
  return {
    title: `About ${decodeURIComponent(name || 'Good Product')}`,
    description: `Explore details about ${decodeURIComponent(name||'Good Product')} including features, price, and more.`,
  };
}

const SelectItemPage = async ( {searchParams}:{searchParams:Products}) => {

  const offerProductDisplay = searchParams.offer? true : false;

  if (offerProductDisplay){
    return (
      <>
          {/* offer products display */}
        <Suspense fallback={<SimilarProductsSkeleton/>}>
          <SimilarProducts selectedImage={searchParams} />
        </Suspense>
      </>
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
            <ImageFeature selectedImage={searchParams} />
          </Suspense>
        </div>

        {/* similar products display */}
        <Suspense fallback={<SimilarProductsSkeleton/>}>
          <SimilarProducts selectedImage={searchParams} />
        </Suspense>

      </>
  )
}

export default SelectItemPage