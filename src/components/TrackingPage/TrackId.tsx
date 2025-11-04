"use client";
import { useState,useEffect } from "react";

const TrackId = ({name}:{name:string}) => {

  const [trackingID, setTrackingID] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      let storedID = localStorage.getItem(name);

      if (!storedID) {
        // Generate a new tracking ID
        storedID = Math.floor(10000000 + Math.random() * 90000000).toString();
        localStorage.setItem(name, storedID);
      }

      setTrackingID(storedID);
    }
  }, [name]);

  return (
    <p>Tracking ID : <span>{trackingID || "Loading..."}</span></p>
  )
}

export default TrackId