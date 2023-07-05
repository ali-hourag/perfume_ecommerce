import { ProductType } from "../types/dataTypes/product";
import { UserType } from "../types/dataTypes/user";

export async function getData(dataType: string): Promise<ProductType[] | UserType[] | null> {
    const response: Response = await fetch(`http://localhost:3000/${dataType}`);
    if (response.status === 404) return null;
    const productsData: ProductType[] = await response.json();
    return productsData;
}