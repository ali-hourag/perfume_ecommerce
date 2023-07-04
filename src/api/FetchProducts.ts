import { productType } from "../types/product";

export async function getData(dataType: string): Promise<productType[]> {
    const response: Response = await fetch(`http://localhost:3000/${dataType}`);
    const productsData: productType[] = await response.json();
    return productsData;
}