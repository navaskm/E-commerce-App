'use client';

import { CiSearch } from "react-icons/ci";
import React, { useState,useEffect } from "react";
import Link from "next/link";

import similarProducts from '../../../api/similar-product.json';
import { Products, SearchBarProps } from "@/types/type";

const SearchBar: React.FC<SearchBarProps> =  ({homeProducts,scrollingProducts}) => {

  const [products, setProducts] = useState<Products[]>([]);
  const [searchData, setSearchData] = useState<string>('');

  useEffect(()=> {
    setProducts([
      ...(homeProducts),
      ...(scrollingProducts),
      ...(similarProducts as unknown as Products[])
    ]);
   },[homeProducts, scrollingProducts])

  const productName = products.filter((product:Products)=>
    product.name.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())
  );

  const handleProductClick = () => {
    // Clear search input after user clicks on a product
    setSearchData('');
  };

  const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => (
      part.toLowerCase() === highlight.toLowerCase() ? 
      <span key={i} style={{ fontWeight: 'bold', color: 'orange' }}>{part}</span> 
      : part
    ));
  };

  return (
    <div className="searchbar-container">
      <input
        type="text" 
        placeholder="Search product"
        value={searchData}
        onChange={(e)=> setSearchData(e.target.value)}
      />
      <button>
        <CiSearch/>
      </button>

      {searchData && (
        <div className="result-box">
          {productName.length > 0 ? (
            <ul>
              {productName.map((product) => (
                <li key={product.id}>
                  <Link
                    href={{
                      pathname: "/components/SelectedPage",
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
                    onClick={handleProductClick}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {getHighlightedText(product.name, searchData)}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No matching products found.</p>
          )}
        </div>
      )}

    </div>
  )
}

export default SearchBar;