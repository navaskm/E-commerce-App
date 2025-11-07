import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, HydratePayload, AddRemovePayload } from "@/types/type";

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    cartItemHydrate: (state, action: PayloadAction<HydratePayload>) => {
      state.items = action.payload.items;
    },

    // add item to cart with quantity 1
    addItem: (state, action: PayloadAction<AddRemovePayload>) => {
      const existingItem = state.items.find(
        (item) => 
          item.id === action.payload.id && 
          item.selectedSize === action.payload.selectedSize
      );

      if (existingItem) {
        if (existingItem.quantity < 10) {
          existingItem.quantity++;
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      // Save updated state to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },

    // minus remove cart quantity
    removeItemQuantity: (state, action: PayloadAction<AddRemovePayload>) => {
      const existingItem = state.items.find(
        (item) => 
          item.id === action.payload.id && 
          item.selectedSize === action.payload.selectedSize
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      }

      // Save updated state to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },

    // remove item from cart
    removeItem: (state, action: PayloadAction<AddRemovePayload>) => {
      const itemIndex = state.items.findIndex(
        (item) => 
          item.id === action.payload.id && 
          item.selectedSize === action.payload.selectedSize
      );

      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }

      // Save updated state to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },

    removeAllItem: (state) => {
      state.items = [];

      // Save updated state to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    }
  }
});

export default cartSlice.reducer;
export const { 
  cartItemHydrate,
  addItem,
  removeItemQuantity,
  removeItem,
  removeAllItem 
} = cartSlice.actions;

// Export type for use in components
export type CartSliceState = typeof initialState;