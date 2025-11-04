"use client";

import { lazy,useEffect,useState } from "react";
import { fetchProduct, fetchScrollingProduct } from "@/data/productdata";

const AppLogs = lazy(() => import('./AppLogs'));
const SearchBar = lazy(() => import("./SearchBar"));
const Links = lazy(() => import("./Links"));
const Login = lazy(() => import("./Login"));
const CartLogo = lazy(() => import("./CartLogo"));
const MobilHamburger = lazy(() => import("./MobilHamburger"));

import '@/style/homepage/navbar/navbar.scss';

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
    <nav>
      <div className="navbar">
        <AppLogs />
        <SearchBar homeProducts={homeProducts} scrollingProducts={scrollingProducts}/>
        <Links />
        <Login />
        <CartLogo />
        <MobilHamburger/>
      </div>
    </nav>
  );
};

export default NavBar;