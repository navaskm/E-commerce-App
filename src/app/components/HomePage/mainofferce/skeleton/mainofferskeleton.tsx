import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const MainOfferSkeleton = () => {
  return (
    <div className="main-offer-skeleton">
      <div className="image-skeleton">
        <Skeleton height={250} />
      </div>
    </div>
  )
}

export default MainOfferSkeleton