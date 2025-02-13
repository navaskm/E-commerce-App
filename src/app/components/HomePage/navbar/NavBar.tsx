import { Suspense,lazy } from "react";

import { fetchProduct,fetchScrollingProduct } from "@/app/datafetching/productdata";

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

const NavBar = async () => {

  // fetch products and pass in to the search bar. (user search products name);
  const homeProducts = await fetchProduct();
  const scrollingProducts  = await fetchScrollingProduct();
   
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
