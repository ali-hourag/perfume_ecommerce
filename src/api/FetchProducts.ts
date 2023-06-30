import { productType } from "../types/product";

export async function getProductsData(): Promise<productType[]> {
    const response: Response = await fetch("http://localhost:3000/products");
    const productsData: productType[] = await response.json();
    return productsData;
}