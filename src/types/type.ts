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