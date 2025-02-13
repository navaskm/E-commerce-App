"use client"

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

import Links from "../links/links";

const MobilHamburger = () => {

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Close the menu only if the click is outside the menu-icon div
      const menuIcon = document.querySelector(".menu-icon");
      if (menuIcon && !menuIcon.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    // Add event listener to the body
    document.body.addEventListener("click", handleClickOutside);

    //Cleanup the event listener on component unmount
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="menu-icon" onClick={(e) => e.stopPropagation()}>
      {/* create toggle menu side bar */}
      {
        open === false? 
        <FaBars className="fs-3" onClick={() => setOpen(!open)}/>: 
        <AiOutlineClose  className="fs-3" onClick={() => setOpen(!open)}/>
      }

      <Links open={open} />
    </div>
  )
}

export default MobilHamburger