"use client";

import { Suspense,lazy,useEffect,useState } from "react";
import { fetchProduct,fetchScrollingProduct } from "@/app/DataFetching/productdata";

// loading imports
import AppLogSkeleton from "./AppLogo/AppLogSkeleton";
import SearchBarSkeleton from "./SearchBar/Skeleton/SearchBarSkeleton";
import LinksSkeleton from "./Links/skeleton/LinksSkeleton";
import CartLogoSkelton from "./CartLogo/cartlogoskelton";

const AppLogs = lazy(() => import('./AppLogo/AppLogs'));
const SearchBar = lazy(() => import("./SearchBar/SearchBar"));
const Links = lazy(() => import("./Links/Links"));
const Login = lazy(() => import("./Login/Login"));
const CartLogo = lazy(() => import("./CartLogo/CartLogo"));
const MobilHamburger = lazy(() => import("./MobilHamburger/MobilHamburger"));

import "@/app/styles/homepage/navbar/navbar.scss";

const NavBar =  () => {

  const [homeProducts,setHomeProducts] = useState([]);
  const [scrollingProducts,setScrollingProducts] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const homeProducts = await fetchProduct();
        const scrollingProducts  = await fetchScrollingProduct();

        setHomeProducts(homeProducts);
        setScrollingProducts(scrollingProducts);

      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchData();
  },[]);
   
  return (
    <>
      <nav>
        <div className="navbar">

          {/* App logo section */}
          <Suspense fallback={<AppLogSkeleton/>}>
            <AppLogs />
          </Suspense>

          {/* search bar */}
          <Suspense fallback={<SearchBarSkeleton/>}>
            <SearchBar homeProducts={homeProducts} scrollingProducts={scrollingProducts}/>
          </Suspense>

          {/* Links menu section*/}
          <Suspense fallback={<LinksSkeleton/>}>
            <Links />
          </Suspense>

          {/* user Login section */}
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>

          {/* cart logo section view*/}
          <Suspense fallback={<CartLogoSkelton/>}>
            <CartLogo />
          </Suspense>

          {/* mobile hamburger menu sections*/}
          <Suspense fallback={<div>Loading...</div>}>
            <MobilHamburger/>
          </Suspense>

        </div>
      </nav>
    </>
  );
};

export default NavBar;