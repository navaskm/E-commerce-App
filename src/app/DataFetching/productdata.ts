// dynamic product
export const fetchProduct = async () => {
  const response = await fetch("https://6732f3e02a1b1a4ae1117250.mockapi.io/Products",{
    cache: 'no-cache'
  })
  const product = await response.json();
  return product;
}

// scrolling products
export const fetchScrollingProduct = async () => {
  const response = await fetch("https://6732f3e02a1b1a4ae1117250.mockapi.io/Scrolling",{
    cache: 'no-cache'
  })
  const scrollingProduct = await response.json();
  return scrollingProduct;
}
