import { ProductType } from "../types/dataTypes/product";
import { UserType } from "../types/dataTypes/user";
const URL = process.env.API_URL;
export async function getData(dataType: string): Promise<ProductType[] | UserType[] | null> {
    const response: Response = await fetch(`${URL}/${dataType}`);
    if (response.status === 404) return null;
    const fetchedData: ProductType[] = await response.json();
    return fetchedData;
}

export const addUser = (user: UserType) => {
    fetch("${URL}/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}

export const updateProducts = (productSearched: ProductType, id: string, newQuantity: number) => {
    fetch(`${URL}/products/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            ...productSearched,
            quantity: newQuantity
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}

export const updateUser = (user: UserType) => {
    fetch(`${URL}/users/${user.id}`, {
        method: "PATCH",
        body: JSON.stringify({
            ...user,
            cart: user.cart,
            wishlist: user.wishlist
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}