// dynamic product
export const fetchProduct = async () => {
  const response = await fetch("https://6732f3e02a1b1a4ae1117250.mockapi.io/Products",{
    cache: 'no-cache'
  })

  return await response.json();
};

// scrolling products
export const fetchScrollingProduct = async () => {
  const response = await fetch("https://6732f3e02a1b1a4ae1117250.mockapi.io/Scrolling",{
    cache: 'no-cache'
  })

  return await response.json();
};