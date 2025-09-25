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

// payment section and top bar page quantity types
export type QuantityType = {
  cart: {
    cartBase: number;
  }
}

// payment section page shipping type types
export type ShippingType = {
  deliveryDate: {
    shippingCost: number;
  }
}