import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SmallProductsSkeleton = () => {
  return (
    <div className="container-of-all-products row">
      {[...Array(8)].map((_, index) => ( // Loop to display multiple skeleton cards
        <div key={index} className="container-of-one-product col-6 col-md-4 col-xl-3">
            <h3><Skeleton height={25} width="60%" /></h3>
            <div className="product-details-display">
              <div  style={{ display: 'flex', flexDirection: 'row',gap: '2px'}}>
                <Skeleton height={100} width={100} count={2}  style={{ display: 'inline-block'}}/>
                <Skeleton height={100} width={100} count={2} style={{ display: 'inline-block' }}/>
              </div>

              <div className="name-price-display">
                <h6><Skeleton height={15} width="80%" style={{ marginBottom: '6px' }} /></h6>
                <div className="price-star-display">
                  <b><Skeleton height={15} width="30%" /></b>
                  <p><Skeleton height={15} width="20%" style={{ marginLeft: '10px' }} /></p>
                </div>
              </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default SmallProductsSkeleton;