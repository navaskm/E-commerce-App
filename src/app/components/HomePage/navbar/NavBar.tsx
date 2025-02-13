import { Suspense,lazy } from "react";

import { fetchProduct,fetchScrollingProduct } from "@/app/datafetching/productdata";

// loading imports
import AppLogSkeleton from "./applogo/applogskeleton";
import SearchBarSkeleton from "./searchbar/skeleton/searchbarskeleton";
import LinksSkeleton from "./links/skeleton/linksskeleton";
import CartLogoSkelton from "./cartlogo/cartlogoskelton";

const AppLogs = lazy(() => import('./applogo/applogs'));
const SearchBar = lazy(() => import("./searchbar/searchbar"));
const Links = lazy(() => import("./links/links"));
const Login = lazy(() => import("./login/login"));
const CartLogo = lazy(() => import("./cartlogo/cartlogo"));
const MobilHamburger = lazy(() => import("./mobilhamburger/mobilhamburger"));

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