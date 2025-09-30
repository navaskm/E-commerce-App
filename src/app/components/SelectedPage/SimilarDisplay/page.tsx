'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import SmallProductsSkeleton from "../../../../skeletons/smallproductsskeleton";
import { fetchProduct,fetchScrollingProduct } from "@/data/productdata";
import similarProducts from '../../../../api/similar-product.json';
import { Products } from "@/types/type";

const SimilarProducts = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const [finalProduct, setFinalProduct] = useState<Products[]>([]);

  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const id:number|string|null = searchParams.get("id");
  const offer = searchParams.get('offer');

  // fetch data
  useEffect(() => {
    const fetchData = async () => {

      try {
        // Fetch product
        const similarProductOne = await fetchProduct();
        const productOne = similarProductOne.filter((product: Products) => product.type === type && product.id !== id);

        // Fetch scrolling product
        const similarProductTwo = await fetchScrollingProduct();
        const productTwo = similarProductTwo.filter((product: Products) => product.type === type && product.id !== id);

        // Find product source
        const products: Products[] = [] = productTwo.length === 0 ? productOne : productTwo;

        // Fetch similar products
        const similarProduct = similarProducts.filter(
          (product) => product.type === type && product.id !== id
        );

        setFinalProduct([...products,...similarProduct]);

      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [searchParams]);


  // loading spinner;
  if(loading){
    return <SmallProductsSkeleton/>
  }

  return (
    <div className="container-of-similar-product container py-4">
      {offer ? (
        <h3 className="offer-title mb-3">Best offer for you</h3>
      ) : (
        <h3 className="mb-3">Similar Products</h3>
      )}

      {!offer && (
        <p
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="top-mooving text-primary fw-semibold mb-4"
          role="button"
        >
          Back to top
        </p>
      )}

      <div className="container-of-all-similar-products row g-3">
        {/* Render final products */}
        {finalProduct?.map((product) => (
          <div
            key={product.id}
            className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"
          >
            <Link
              style={{ textDecoration: "none" }}
              className="each-similar-product card h-100 shadow-sm border-0"
              href={{
                pathname: "/components/SelectedPage",
                query: {
                  name: encodeURIComponent(product.name),
                  priceCents: product.priceCents,
                  image: encodeURIComponent(product.image),
                  rating: product.rating,
                  type: product.type,
                  id: product.id,
                  keywords: product.keywords,
                  company: encodeURIComponent(product.company),
                  madein: encodeURIComponent(product.madein),
                  Feature: encodeURIComponent(product.Feature),
                  size: product.size,
                },
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top img-fluid"
              />
              <div className="card-body text-center p-2">
                <h6 className="card-title text-dark">{product.name}</h6>
                <b className="d-block text-success">
                  ₹{product.priceCents}
                </b>
                <p className="text-warning small mb-0">
                  {product.rating}&#9733;
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

};


export default SimilarProducts;

// api similar product lines

// watch = 1 to 233        = 21
// shoes = 234 to 611      = 21
// mens = 612 to 968      = 21
// women = 969 to 1325      = 21
// Jewelry = 1326 to 1556   = 21
// sound-hub = 1557 to 1743 = 17
// sunglass = 1744 to 1828 = 5
// toys = 1830 to 1927     = 9
                  //total = 136  

// refrigerator 1928 to 2015 = 8 
// washing machine 2016 to 2103 = 8
// gas cooker 2104 to 2191 = 8
// AC 2192 to 2278 = 8
// bed 2279 to 2323 = 4
// table 2324 to 2367 = 4
              //total = 40 

// lapTop 2368 to 2598 = 21
// perFume 2599 to 2708 = 10
// cooker 2709 to 2818 = 10
// bulb 2818 to 2961 = 13
// umbrella 2962 to 3038 = 7
// chair 3039 to 3115 = 7
                  //total = 68

// TV 3116 to 3258 = 13
// water hose 3259 to 3302 = 4
// slipper 3303 to 3680  = 21
// curtain 3681 to 3746 = 6
// tank 3747 to 3812 = 6
// clock 3813 to 3999 = 18
// water bottle 4000 to 4098 = 9
// healthy food 4099 to 4285 = 17
// phone charger 4286 to 4374 = 8
                    // total = 102

// all total id is = 345