import Link from "next/link";
import '@/app/homepagesmall/smallproducts.scss'
import { fetchProduct } from "@/app/DataFetching/productdata";
const response = await fetchProduct();

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
}

const allowedTypes = [
  'watch',
  'shoes',
  'mens-clothes',
  'women-clothes',
  'Jewelry',
  'sound-hub',
  'sunglass',
  'toys',
];

const fourItems: Products[] = response.filter((product: Products) =>
  allowedTypes.includes(product.type)
);

function SmallProducts() {

  return (
    <div className="container-of-all-products row">
      {allowedTypes.map((type) => {

        // grouped item get (4 items)
        const oneProductList = fourItems.filter((item) => item.type === type);

        // get first product in the 4 grouped items
        const product = oneProductList[0];

        // toys and sunglass items only display in large device
        const largeDeviceDisplay = (product.type === 'toys' || product.type === 'sunglass') ? 'only-large-device' : null;

        return oneProductList && (
          <div
            className={`container-of-one-product col-12 col-md-4 col-xl-3 ${largeDeviceDisplay}`}
            key={product.id}
          >
            <div className="title">
              <h3>{product.title}</h3>
            </div>

            <div className="product-body">
              {oneProductList.map((item:Products) => (
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

                    <img src={item.image} alt={item.name}/>

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