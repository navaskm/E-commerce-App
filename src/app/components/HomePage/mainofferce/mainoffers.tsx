"use client"

import { useEffect } from 'react';
import Link from 'next/link';
import "@/app/styles/homepage/mainoffers/mainoffers.scss";

const MainOffers = () => {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div className="container-of-offer-images">
      <div 
        id="carouselExampleCaptions"
        className="carousel slide" 
        data-bs-ride="carousel">

        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
        
          <div className="carousel-item active">
            
            <div className="offer-image">
              {/* shoes images */}
              <Link href={{
                pathname:"/components/SelectedPage",
                query:{
                  id: 1000,
                  type: 'shoes',
                  offer:"offerProduct",
                  name:"Shoes Offer"
                }
              }}
              >
                <img className="image-one" src="/OfferImage/Shoes/shoes-offer-image-1.jpg" alt="offer"/>
              </Link>
              
              <Link href={{
                pathname:"/components/SelectedPage",
                query:{
                  id: 999,
                  type: 'shoes',
                  offer:"offerProduct",
                  name:"Shoes Offer"
                }
              }}>
                <img className="image-two" src="/OfferImage/Shoes/shoes-offer-image-2.jpg" alt="offer" />
              </Link>
              
              <Link href={{
                pathname:"/components/SelectedPage",
                query:{
                  id: 998,
                  type:'shoes',
                  offer:"offerProduct",
                  name:"Shoes Offer"
                }
              }}>
                <img className="image-three" src="/OfferImage/Shoes/shoes-offer-image-3.jpg" alt="offer"/>
              </Link>

            </div>

              <div className="carousel-caption d-none d-md-block">
              </div>
          </div>
          
          <div className="carousel-item">

            <div className="offer-image">
                {/* phone images */}
                <Link href={{
                  pathname:"/components/SelectedPage",
                  query:{
                    id: 997,
                    type:'phone',
                    offer:"offerProduct",
                    name:"Phone Offer"
                  }
                }}>
                  <img className="image-one" src="/OfferImage/Phone/phone-offer-image-1.jpg" alt="offer"/>
                </Link>
               
               <Link href={{
                pathname:"/components/SelectedPage",
                  query:{
                    id: 996,
                    type:'phone',
                    offer:"offerProduct",
                    name:"Phone Offer"
                  }
                }}>
                 <img className="image-two" src="/OfferImage/Phone/phone-offer-image-2.jpg" alt="offer"/>
                </Link>
                
                <Link href={{
                  pathname:"/components/SelectedPage",
                  query:{
                    id: 995,
                    type:'phone',
                    offer:"offerProduct",
                    name:"Phone Offer"
                  }
                }}>
                 <img className="image-three" src="/OfferImage/Phone/phone-offer-image-3.jpg" alt="offer"/>
                </Link>
            </div>
            
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div className="carousel-item">
 
            <div className="offer-image">
                {/* bag images */}
                <Link href={{
                  pathname:"/components/SelectedPage",
                  query:{
                    id: 994,
                    type:'bag',
                    offer:"offerProduct",
                    name:"Bag Offer"
                  }
                }}>
                  <img className="image-one" src="/OfferImage/Bags/bag-offer-image-1.jpg" alt="offer"/>
                </Link>
              
                <Link href={{
                  pathname:"/components/SelectedPage",
                  query:{
                    id: 993,
                    type:'bag',
                    offer:"offerProduct",
                    name:"Bag Offer"
                  }
                }}>
                  <img className="image-two" src="/OfferImage/Bags/bag-offer-image-2.jpg" alt="offer"/>
                </Link>
              
               <Link href={{
                pathname:"/components/SelectedPage",
                  query:{
                    id: 992,
                    type:'bag',
                    offer:"offerProduct",
                    name:"Bag Offer"
                  }
                }}>
                  <img className="image-three" src="/OfferImage/Bags/bag-offer-image-3.jpg" alt="offer"/>
                </Link>
              
            </div>
            
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

        </div>

        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>

        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon abc" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
        
      </div>
    </div>
  );
}

export default MainOffers;
