import Link from "next/link";
import { Items } from "@/types/type";
import { allowedSmallProductTypes } from "@/types/type";
import '@/app/homepagesmall/smallproducts.scss';

function SmallProducts({products}:Items) {

  return (
    <div className="container-of-all-products row">
      {allowedSmallProductTypes.map((type) => {

        // grouped item get (4 items)
        const oneProductList = products.filter((item) => item.type === type);

        // toys and sunglass items only display in large device
        const largeDeviceDisplay = (oneProductList[0].type === 'toys' || oneProductList[0].type === 'sunglass') && 'only-large-device';

        return oneProductList && (
          <div
            className={`container-of-one-product col-12 col-md-4 col-xl-3 ${largeDeviceDisplay}`}
            key={type}
          >
            <div className="title">
              <h3>{oneProductList[0].title}</h3>
            </div>

            <div className="product-body">
              {oneProductList.map((item) => (
                <div key={item.id} className="product-details-display">

                  {/* this div click time pass value to selected page */}
                  <Link style={{ textDecoration: 'none' }} href={{
                    pathname: "/components/SelectedPage",
                    query: {
                      name: encodeURIComponent(item.name),
                      priceCents: item.priceCents,
                      image: encodeURIComponent(item.image),
                      rating: item.rating,
                      type: item.type,
                      id: item.id,
                      keywords: item.keywords,
                      company: encodeURIComponent(item.company),
                      madein: encodeURIComponent(item.madein),
                      Feature: encodeURIComponent(item.Feature),
                      size: item.size,
                    }
                  }}>

                    <img src={item.image} alt={item.name} loading="lazy"/>

                    <div className='name-price-display'>
                      <h6>{item.name}</h6>
                      <div className='price-star-display'>
                        <b><span>₹</span>{item.priceCents}</b>
                        <p>{item.rating}&#9733;</p>
                      </div>
                    </div>
                  
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

}

export default SmallProducts;