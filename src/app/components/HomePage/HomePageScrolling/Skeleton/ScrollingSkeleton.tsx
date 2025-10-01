import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ScrollingSkeleton = () => {
  return (
    <div className="container-fluid bg-white mb-3 px-2">
      <div className="d-flex overflow-auto">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center flex-shrink-0 me-3"
            style={{ width: "240px" }}
          >
            <Skeleton height={150} width={150} />
            <div className="mt-2">
              <Skeleton width={100} />
            </div>
            <div className="mt-1">
              <Skeleton width={60} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingSkeleton;
