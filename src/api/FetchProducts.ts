import { productType } from "../types/product";

export async function getData(dataType: string): Promise<productType[] | null> {
    const response: Response = await fetch(`http://localhost:3000/${dataType}`);
    if (response.status === 404) return null;
    const productsData: productType[] = await response.json();
    return productsData;
}