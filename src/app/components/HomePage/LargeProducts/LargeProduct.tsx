import Link from 'next/link';
import { Items } from '@/types/type';
import '@/app/styles/homepage/largeproduct/largeproduct.scss';

function LargeProduct({products}:Items) {

  return (
    <div className={`${products.length > 1 ? 'homepage-dynamic-large' : 'last-large-items'}`}>
      
      {products.map((item) => {

        const mediumDeviceDisplay = (item.type === 'table' || item.type === 'bed') && 'medium-device-display';

        return (
          <div key={item.id} className={`homepage-large-container col-6 col-md-4 col-lg-3 ${mediumDeviceDisplay}`}>

            <div className="large-product-title">
              <h3>{item.title}</h3>
            </div>

            <div className="product-card">
              <Link href={{
                pathname: "/components/SelectedPage",
                query: {
                  name: encodeURIComponent(item.name),
                  priceCents: item.priceCents,
                  image: encodeURIComponent(item.image),
                  rating: item.rating,
                  id: item.id,
                  type: item.type,
                  keywords: item.keywords,
                  company: encodeURIComponent(item.company),
                  madein: encodeURIComponent(item.madein),
                  Feature: encodeURIComponent(item.Feature),
                  size: item.size,
                }
              }}>
                
                <img src={item.image} alt={item.name} />
                
              </Link>
            </div>

          </div>
        )

      })}

    </div>
  );
  
};

export default LargeProduct;