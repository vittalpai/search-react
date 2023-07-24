import { useContext } from "react";
import { ProductsContext } from "./productsContext/ProductsContext";

export { default as ProductsContextProvider } from "./productsContext/ProductsContext";

export const useProductsContext = () => useContext(ProductsContext);
