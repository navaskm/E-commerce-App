import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './feature/itemquantity/itemquantityslice';
import cartItemsReducer from './feature/items/itemsslice'
import deliveryDateReducer from './feature/deliverydate/deliverydate'

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      cartItems: cartItemsReducer,
      deliveryDate: deliveryDateReducer,
    },
  });
}

// Infer the RootState and AppDispatch types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']