import { useContext } from "react";
import { productsContext } from "../context/ProductsProvider";

export const useProductsContext = () => {
    return useContext(productsContext);
}