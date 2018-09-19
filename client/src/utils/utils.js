export function getProductById(products, id) {
  return products.find(product => {
    return product.id === id;
  });
}
