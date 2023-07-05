import { ProductType } from "../types/dataTypes/product";

/**
 * Receives an array and an ID.
 * @param products array of products
 * @return object with the corresponding id
 *  returns null if there is no matching product
 */
export const getProductById = (products: ProductType[], id: string): ProductType | undefined => {
    return products.find((product) => product.id === id);
}