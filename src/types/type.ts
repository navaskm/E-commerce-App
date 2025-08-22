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

// small products type
export const allowedTypes = [
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

// small scrolling type
export const smallScrollingProduct = ['face-wash', 'phone'];

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
export const allowedLastLargeProductTypes = [
  'waterHouse',
  'curtain',
  'waterTank'
]