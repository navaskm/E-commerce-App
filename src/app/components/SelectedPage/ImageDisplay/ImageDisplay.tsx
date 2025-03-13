"use client"

import { useSearchParams } from "next/navigation";
import { lazy,Suspense } from "react";
import { useState } from "react";

const AddToCartBtn = lazy(()=> import('./AddToCartBtn/AddToCartBtn'));

const ImageDisplay = () => {

  const [selectedSize, setSelectedSize] = useState('');

  const searchParams = useSearchParams();
  const image:string = searchParams.get("image")!;
  const size:string[]|null = searchParams.getAll("size");
  const name:string|null = searchParams.get("name");
  const priceCents:string|null = searchParams.get("priceCents");
  const id:string|null = searchParams.get("id");

  // image size select code
  const selectSize = (isWhite: string) => {
    const elements = document.querySelectorAll('.is-black');
    elements.forEach(element => element.classList.remove('is-black'));
  
    const selectedElement = document.querySelector(isWhite);
    selectedElement?.classList.add('is-black');

    setSelectedSize(isWhite);
  };

  const imageFix = size && size.length >2 ? 'size-fix' : null
  const imageSizeFix = size && size.length >2 ? 'fix-size' : null
  const heightContainer = size && size.length >2 ?  null: 'height-container'

  return (
    <div className={`image-select-display-item col-12 col-md-6 ${heightContainer}`}>
    
      {/* create size list of product */}
      {
        size && size.length >1 && (
        <div className="container-product-size col-4">
          <h5>Select Size</h5>
          <div className="container-size-list">
            {
              size.map((size:string, index:number) => {

                return (
                  <p 
                  key={index}
                  className={`is-white size-${size}`} 
                  onClick={()=> selectSize(`.size-${size}`)}
                >{size}</p>
                )
              })
            }
          </div>
        </div>
        )
      }
    
      {/* create image,quantity, add to cart of product */}
      <div className="col-8 container-of-image-cart-another-image">

        {/* create image of product */}
        <div className={`image-display ${imageSizeFix}`}>
          {/* <img src={decodeURIComponent(selectedImage.image)} alt={selectedImage.name} /> */}
          <img src={decodeURIComponent(image)} alt='image' />
        </div>

        {/* create quantity and add to cart of product */}
        <div className={`container-item-quantity-cart-button ${imageFix}`}>

          {/* create add to cart button of product */}
          <Suspense fallback={<p>loading....</p>}>
              <AddToCartBtn name={name} image={image} price={priceCents} size={size} id={id} selectedSize={selectedSize}/>
          </Suspense>

        </div>

      </div>

    </div>
  )
}

export default ImageDisplay