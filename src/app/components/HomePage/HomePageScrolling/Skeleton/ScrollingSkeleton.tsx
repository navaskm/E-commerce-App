import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import '@/app/components/HomePage/HomePageScrolling/Skeleton/Skeleton.scss'

const ScrollingSkeleton = () => {
  return (
    <div className='homepage-scrolling'>
      <div className="scrolling-product-container">

      <div className="scrolling-products">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="skeleton-item">
            <Skeleton height={150} width={150} />
            <Skeleton width={100} />
            <Skeleton width={60} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ScrollingSkeleton;
