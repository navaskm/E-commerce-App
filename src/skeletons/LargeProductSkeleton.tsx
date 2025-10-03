import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LargeProductSkeleton = () => {
  return (
    <div>
        <div>
          <Skeleton height={250}/>
        </div>
    </div>
  );
}

export default LargeProductSkeleton;