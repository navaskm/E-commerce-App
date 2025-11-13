// all product types
export type Products = {
  name: string,
  title:string,
  image: string,
  rating: string,
  priceCents:string,
  type: string,
  keywords: string,
  id: number,
  company: string,
  madein: string,
  Feature: string,
  size:string,
  offer: string,
};
export type Items = {
  products: Products[];
};

export type Menu = {
  open? : boolean,
};

// search bar component types
export type SearchBarProps = {
  homeProducts: Products[];
  scrollingProducts: Products[];
}

// small products type
export const allowedSmallProductTypes = [
  'watch',
  'shoes',
  'mens-clothes',
  'women-clothes',
  'Jewelry',
  'sound-hub',
  'sunglass',
  'toys',
];

// scrolling product type
export const scrollingProduct = ['bag', 'sports-item'];

// large first product type
export const allowedFirstLargeProductTypes = [
  'refrigerator',
  'washing-machine',
  'bed',
  'table',
  'gas-cooker',
  'ac'
]

// large first product type
export const allowedLastOneProductTypes = [
  'waterHouse',
  'curtain',
  'waterTank',
  'tv',
  'slipper',
  'Clock',
  'WaterBottle',
  'healthyFood',
  'phoneCharger',
]

export const allowedFirstTwoTypes = [
  'lapTop',
  'perFume',
  'cooker',
  'bulb',
  'umbrella',
  'chair',
];

export const allAllowedAllTwoProductsTypes = [
  'lapTop',
  'perFume',
  'cooker',
  'bulb',
  'umbrella',
  'chair',
  'tv',
  'slipper',
  'Clock',
  'WaterBottle',
  'healthyFood',
  'phoneCharger',
];

// small scrolling type
export const smallScrollingProduct = ['face-wash', 'phone'];

// AddToCartBtn File props types
export type AddToCartBtnFileProps = {
  name:string|null,
  image: string,
  price: string|null,
  id: string|null,
  size: string[],
  selectedSize: string,
};

// AddToCartBtn File Products types
export type AddToCartBtnFileProducts = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
  selectedSize: string;
};

// Cart items page products types
export type CartItemsPageProducts = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
  selectedSize: string;
};

// payment section and top bar page products types
export type PaymentPageProducts = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
  selectedSize: string;
};

// payment section and top bar page cart items types
export type CartItemType = {
  selectedSize?: string;
  cartItems: {
    items: PaymentPageProducts[];
  }
}

// payment section page shipping type types
export type ShippingType = {
  deliveryDate: {
    shippingCost: number;
  }
}

// ordered product types
export type OrderedItemProducts = {
  id: string;
  name: string; 
  image: string; 
  price: number;
  quantity: number;
  size: string;
  selectedSize: string;
};

export type OrderProducts = {
  image: string;
  name: string;
  price: string;
  id: string; 
  quantity: number;
  conformDate: string;
  size: string;
}

export type FinalOrderItems = {
  received: { [date: string]: OrderProducts[] };
  pending: { [date: string]: OrderProducts[] };
};

// track id page product type
export type TrackIdProducts = {
  name: string,
  image: string,
  date: string,
  quantity: number,
  size: string,
}

// redux types

// Define interfaces for the state and items
interface DeliveryItem {
  id: number|string;
  selectedOption: 'option1' | 'option2' | 'option3'|string;
  conformDate: string;
  name: string;
  image: string;
  price: number|string;
  quantity: number;
  size: string;
  shipping: number;
}

export interface DeliveryDateState {
  shippingCost: number;
  deliveryDate: DeliveryItem[];
  userOrder: DeliveryItem[];
}

// Define types for action payloads
export interface HydrateOrderPayload {
  deliveryDate: DeliveryItem[];
  userOrder: DeliveryItem[];
}

export interface AddDeliveryDatePayload {
  id: number|string;
  selectedOption: 'option1' | 'option2' | 'option3'|string;
  conformDate: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
}

export interface RemoveDeliveryDatePayload {
  productId: number|string;
  selectedOption:string;
}

// Define interfaces for our types
interface CartItem {
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
  selectedSize: string;
  id:string;
}

export interface CartState {
  items: CartItem[];
}

// Define types for our actions
export interface HydratePayload {
  items: CartItem[];
}
//name,image,price,id,selectedSize
export interface AddRemovePayload {
  id: number|null|string;
  selectedSize: string;
  name?: string|null;
  image?: string;
  price?: string|null;
  conformDate?: string;
  size?: string;
}