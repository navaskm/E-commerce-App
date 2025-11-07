import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DeliveryDateState, HydrateOrderPayload, AddDeliveryDatePayload, RemoveDeliveryDatePayload } from "@/types/type";

const initialState: DeliveryDateState = {
  shippingCost: 0,
  deliveryDate: [],
  userOrder: [],
};

const deliveryDateSlice = createSlice({
  name: 'deliveryDate',
  initialState,
  reducers: {
    hydrateOrder: (state, action: PayloadAction<HydrateOrderPayload>) => {
      state.deliveryDate = action.payload.deliveryDate;
      state.userOrder = action.payload.userOrder;
    },

    addDeliveryDate: (state, action: PayloadAction<AddDeliveryDatePayload>) => {
      const { id, selectedOption, conformDate, name, image, price, quantity, size } = action.payload;

      const existingItem = state.deliveryDate.find((item) => item.id === id);
      
      const shippingCost = 
        selectedOption === 'option2' ? 10 :
        selectedOption === 'option3' ? 18 : 0;

      if (existingItem) {
        Object.assign(existingItem, {
          selectedOption,
          conformDate,
          name,
          image,
          price,
          quantity,
          size,
          shipping: shippingCost
        });
      } else {
        state.deliveryDate.push({
          id,
          selectedOption,
          name,
          image,
          price,
          quantity,
          conformDate,
          size,
          shipping: shippingCost,
        });
      }

      // Recalculate shipping cost
      state.shippingCost = state.deliveryDate.reduce(
        (total, item) => total + item.shipping,
        0
      );

      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("deliveryDate", JSON.stringify(state.deliveryDate));
      }
    },

    removeDeliveryDate: (state, action: PayloadAction<RemoveDeliveryDatePayload>) => {
      const { productId } = action.payload;
      
      const index = state.deliveryDate.findIndex((item) => item.id === productId);
      
      if (index !== -1) {
        state.deliveryDate.splice(index, 1);
      }

      // Recalculate shippingCost
      state.shippingCost = state.deliveryDate.reduce(
        (total, item) => total + item.shipping,
        0
      );

      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("deliveryDate", JSON.stringify(state.deliveryDate));
      }
    },

    userOrder: (state) => {
      const validDeliveryDate = Array.isArray(state.deliveryDate) ? state.deliveryDate : [];

      const formatDate = (date: string): string => 
        new Date(date).toISOString().split("T")[0];

      const newOrders = validDeliveryDate.filter((newItem) =>
        !state.userOrder.some((existingItem) => {
          return (
            existingItem.id === newItem.id &&
            formatDate(existingItem.conformDate) === formatDate(newItem.conformDate)
          );
        })
      );

      state.userOrder = [...state.userOrder, ...newOrders];

      // Clear deliveryDate after order confirmation
      state.deliveryDate = [];

      if (typeof window !== "undefined") {
        localStorage.setItem("userOrder", JSON.stringify(state.userOrder));
        localStorage.setItem("deliveryDate", JSON.stringify(state.deliveryDate));
      }
    }
  }
});

export default deliveryDateSlice.reducer;
export const { 
  hydrateOrder,
  addDeliveryDate,
  removeDeliveryDate,
  userOrder 
} = deliveryDateSlice.actions;