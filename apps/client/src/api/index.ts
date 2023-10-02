import { createAlova } from "alova";
import GlobalFetch from "alova/GlobalFetch";
import VueHook from "alova/vue";

const alovaInstance = createAlova({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  responded: (response) => response.json(),
});

export const getProducts = alovaInstance.Get("/products");
export const getCategories = alovaInstance.Get("/categories");
export const getProductsByCategory = (category: string) =>
  alovaInstance.Get(`/products/${category}`);
export const getProductById = (id: string) =>
  alovaInstance.Get(`/product/${id}`);
