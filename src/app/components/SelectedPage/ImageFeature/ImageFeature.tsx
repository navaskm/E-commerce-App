import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useSearchParams } from "next/navigation";

const ImageFeature = () => {

  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const priceCents = searchParams.get('priceCents');
  const rating = searchParams.get('rating');
  const madein = searchParams.get('madein');
  const company = searchParams.get('company');
  const Feature = searchParams.get('Feature');

  return (
    <div className="feature-display col-12 col-md-6">

      <div className="product-basic">
        <h2>{decodeURIComponent(name)}</h2>
        <h3><span>₹</span>{priceCents} <b><AiOutlineExclamationCircle /></b></h3>
        <h5>{rating}&#9733;</h5> <h6></h6>
        <p>free delivery</p>
      </div>

      <div className="product-details">
        <h2>Product details</h2>
        <p>Made in : <span>{decodeURIComponent(madein)}</span></p>
        <p>Company: <span>{decodeURIComponent(company)}</span></p>
        <p>Special Feature : <span>{decodeURIComponent(Feature)}</span></p>
      </div>

      <div className="product-delivery-date">
        <h2>Check Your Delivery Date</h2>
        <p>Free : <span>Within 7 days, the product will reach your home.</span></p>
        <p>Normal : <span>If you pay a ₹10 shipping cost, the product will reach your home within 5 days.</span></p>
        <p>Urgent : <span>If you pay a ₹18 shipping cost, the product will reach your home within 3 days.</span></p>
      </div>

      <div className="product-rating-reviews">
        <h2>Product Rating & Reviews</h2>

        <div>
          <p>Good</p>
          <b>
            <span style={{width: "65%"}}></span>
          </b>
        </div>

        <div>
          <p>Average</p>
          <b>
            <span style={{width: "50%"}}></span>
          </b>
        </div>

        <div>
          <p>Poor</p>
          <b>
            <span style={{width: "20%"}}></span>
          </b>
        </div>

      </div>
      
    </div>
  )
}

export default ImageFeature;