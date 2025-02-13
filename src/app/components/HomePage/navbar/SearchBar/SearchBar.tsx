'use client';

import { CiSearch } from "react-icons/ci";
import React, { useState,useEffect } from "react";
import Link from "next/link";

import similarProducts from '@/app/API/similar-product.json';
import "@/app/styles/homepage/navbar/navbar.scss";

type Search = {
  id: number | string,
  name: string,
  image: string,
  size?: string[],
  priceCents: string,
  rating: string,
  madein: string,
  Feature: string,
  type: string,
  company: string,
  keyWords: string,
}

interface SearchBarProps {
  homeProducts: Search[];
  scrollingProducts: Search[];
}

const SearchBar: React.FC<SearchBarProps> =  ({homeProducts,scrollingProducts}) => {

  const [scrolling, setScrolling] = useState<Search[]>([]);
  const [searchData, setSearchData] = useState<string>('');

  useEffect(()=> {
    setScrolling([
      ...(homeProducts),
      ...(scrollingProducts),
      ...(similarProducts as unknown as Search[])
    ]);
   },[homeProducts, scrollingProducts])

  const productName = scrolling.filter((product:Search)=>
    product.name.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())
  )

  return (
    <div className="searchbar-container">
      <input
        type="text" 
        placeholder="Search product"
        onChange={(e)=> setSearchData(e.target.value)}
      />
      <button>
        <CiSearch/>
      </button>

     {
      searchData && productName.length > 0 && (
        <div className="result-box">
          {
            productName.map((product:Search) => (
              <ul key={product.id}>
                <Link
                  style={{textDecoration:"none"}}
                  href={{
                    pathname:"/components/SelectedPage",
                    query:{
                      name: encodeURIComponent(product.name),
                      priceCents: product.priceCents,
                      image: encodeURIComponent(product.image),
                      rating: product.rating,
                      id: product.id,
                      type: product.type,
                      company: encodeURIComponent(product.company),
                      madein: encodeURIComponent(product.madein),
                      Feature: encodeURIComponent(product.Feature),
                      size: product.size,
                    }
                  }}
                >
                  <li>{product.name}</li>
                </Link>
              </ul>
            ))
          }
        </div>
      )
     }

    </div>
  )
}

export default SearchBar;