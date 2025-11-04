import { Items } from '@/types/type';
import Link from 'next/link';
import '@/style/homepage/smallScrolling/smallScrolling.scss';

function SmallScrolling({products}: Items) {
  
  return(
    <div className={`container-small-scrolling ${products?.[0]?.type}`}>

      <div className='title-of-small-scrolling'>
        {products?.[0]?.type === 'face-wash'? (
            <h2>Unveil the Glow Within</h2>
          ):(
            <h2>Luxury in Every Swipe</h2>
        )}
      </div>

      <div className='container-of-small-product'>
        {products.map((product) => (
          <Link key={product.id}
            style={{textDecoration:"none"}}
            href={{
              pathname: "/product-details",
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
              <img src={product.image} alt={product.name} loading="lazy"/>
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