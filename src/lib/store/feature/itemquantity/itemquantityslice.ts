import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartBase:0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    hydrate: (state, action) => {
      state.cartBase = action.payload.cartBase;
    },

    addToCart: (state)=>{
      state.cartBase++;

      if (typeof window !== "undefined") {
        localStorage.setItem("cartBase", JSON.stringify(state.cartBase));
      }
    },

    removeFromCart: (state)=> {
      state.cartBase--;

      if (typeof window !== "undefined") {
        localStorage.setItem("cartBase", JSON.stringify(state.cartBase));
      }
    },

    removeFromCartOfQuantityBase: (state,action)=> {
      state.cartBase -= action.payload.quantity;

      if (typeof window !== "undefined") {
        localStorage.setItem("cartBase", JSON.stringify(state.cartBase));
      }
    },

    removeAllQuantity: (state) => {
      state.cartBase = 0;

      if (typeof window !== "undefined") {
        localStorage.setItem("cartBase", JSON.stringify(state.cartBase));
      }
    }
  }
})

export default cartSlice.reducer;
export const {hydrate,addToCart,removeFromCart,removeFromCartOfQuantityBase,removeAllQuantity} = cartSlice.actions;