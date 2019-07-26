export function getProductById(products: any, id: any) {
  return products.find((product: any) => {
    return product.id === id;
  });
}
