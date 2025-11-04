import Link from "next/link"
import '@/app/styles/trackingpage/tracking.scss';
import TrackId from "../../../../components/TrackingPage/TrackId";

type Products = {
  name: string,
  image: string,
  date: string,
  quantity: number,
  size: string,
}

// Generate metadata dynamically based on searchParams
export async function generateMetadata({ searchParams }: { searchParams: Products }) {
  return {
    title: `Tracking ${decodeURIComponent(searchParams.name)}`,
    description: `Track ${decodeURIComponent(searchParams.name)} Product`,
  };
}

const TrackingPage= ({ searchParams }: { searchParams: Products }) => {

const dateString = searchParams.date;

const today = new Date();
const currentYear = today.getFullYear();

// Convert the date string to a proper format: "February 6, 2025"
const formattedDateString = `${dateString}, ${currentYear}`;
const selectedDate = new Date(formattedDateString);

// Calculate the difference in milliseconds
const diffInTime = selectedDate.getTime() - today.getTime();

// Convert milliseconds to days
const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

const conformUser = {
  width: '',
  heading: '',
}

switch (diffInDays) {
  case 7:
    conformUser.width ='10%';
    conformUser.heading = 'Order Confirmed - Processing';
    break;

  case 6:
    conformUser.width ='20%';
    conformUser.heading = 'Your Order is Being Prepared';
    break;

  case 5:
    conformUser.width ='30%';
    conformUser.heading = 'Packing Your Order';
    break;
    
  case 4:
    conformUser.width ='45%';
    conformUser.heading = 'Order Ready for Shipment';
    break;
    
  case 3:
    conformUser.width ='60%';
    conformUser.heading = 'Order Ready for Shipment';
    break;

  case 2:
    conformUser.width ='75%';
    conformUser.heading = 'Package Arriving Soon - Out for Delivery';
    break;
    
  case 1:
    conformUser.width ='90%';
    conformUser.heading = 'Out for Delivery - Arriving Today';
    break;

  case 0:
    conformUser.width ='97%';
    conformUser.heading = 'Order Arrived - Ready for Pickup';
    break;

  default:
    conformUser.width ='100%';
    conformUser.heading = 'Order Delivered Successfully';
    break;
}

  return (
    <div className="container">

      <div className="order-content">

        <Link href='/ordered-products'>View All Orders</Link>
        <h2>Arriving on : <span>{decodeURIComponent(searchParams.date)}</span></h2>
        <div className="product-content">
          <img src={decodeURIComponent(searchParams.image)} alt=""/>
          <div>
            <p>Name : <span>{decodeURIComponent(searchParams.name)}</span></p>
            <p>Quantity : <span>{searchParams.quantity}</span></p>
            {
              searchParams.size && <p>Size : <span>{searchParams.size.replace(".size-",'')}</span></p>
            }
          </div>
        </div>

      </div>

      <div className="tracking-content">
        <h4>{conformUser.heading}</h4>
        <div className="names">
          <h6>Preparing</h6>
          <h6>Shipped</h6>
          <h6>Delivered</h6>
        </div>

        <div className="percentage-container">
         <div className="percentage" style={{width: conformUser.width}}></div>
        </div>

      </div>

      <div className="track-id-container">
        <h5>Shipped with UPS</h5>
        <TrackId name={decodeURIComponent(searchParams.name)}/>
      </div>

    </div>
  )
}

export default TrackingPage;
