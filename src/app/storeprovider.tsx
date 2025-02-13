"use client";
import { Provider } from "react-redux";
import { ReactNode,useRef } from "react";

import { AppStore, makeStore } from "./lib/store/store";

const StoreProvider = ({children}:{children:ReactNode}) => {

  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>{children}</Provider>
  )
}

export default StoreProvider