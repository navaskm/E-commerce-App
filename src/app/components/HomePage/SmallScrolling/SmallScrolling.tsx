import { fetchScrollingProduct } from '@/app/DataFetching/productdata';
import '@/app/styles/homepage/smallScrolling/smallScrolling.scss';

import Link from 'next/link';

type Products = {
  name: string,
  image: string,
  rating: string,
  priceCents:string,
  type: string,
  keywords: string,
  id: number,
  offer: string,
  company: string,
  madein: string,
  Feature: string,
  size:string,
}

type Item = {
  item: string;
}

async function SmallScrolling({item}: Item) {

  const response = await fetchScrollingProduct();
  const products = response.filter((product:Products) =>  product.type === item);

  return (
    <div className={`container-small-scrolling ${item}`}>

      <div className='title-of-small-scrolling'>
        {item === 'face-wash'? (
            <h2>Unveil the Glow Within</h2>
          ):(
            <h2>Luxury in Every Swipe</h2>
        )}
      </div>

      <div className='container-of-small-product'>
        {products.map((product:Products) => (
          <Link key={product.id}
            style={{textDecoration:"none"}}
            href={{
              pathname: "/components/SelectedPage",
              query: {
                name: encodeURIComponent(product.name),
                priceCents: product.priceCents,
                image: encodeURIComponent(product.image),
                rating: product.rating,
                id: product.id,
                type: product.type,
                keywords: product.keywords,
                company: encodeURIComponent(product.company),
                madein: encodeURIComponent(product.madein),
                Feature: encodeURIComponent(product.Feature),
                size: product.size,
              }
            }}
          >

            <div className='item-box'>
              <img src={product.image} alt={product.name}/>
              <div>
                <p>{product.name}</p>
              </div>
              <div>
                <h4>{product.offer}</h4>
              </div>
            </div>

          </Link>
              
        ))}
      </div>

    </div>
  );
};

export default SmallScrolling;