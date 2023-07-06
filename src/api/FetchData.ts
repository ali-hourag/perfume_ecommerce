import { ProductType } from "../types/dataTypes/product";
import { UserType } from "../types/dataTypes/user";

export async function getData(dataType: string): Promise<ProductType[] | UserType[] | null> {
    const response: Response = await fetch(`http://localhost:3000/${dataType}`);
    if (response.status === 404) return null;
    const fetchedData: ProductType[] = await response.json();
    return fetchedData;
}

export const addUser = (user: UserType) => {
    console.log(user);
    fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}