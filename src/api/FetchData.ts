import { ProductType } from "../types/dataTypes/product";
import { UserType } from "../types/dataTypes/user";

export async function getData(dataType: string): Promise<ProductType[] | UserType[] | null> {
    const response: Response = await fetch(`https://perfume-ecommerce-json.vercel.app/${dataType}`);
    if (response.status === 404) return null;
    const fetchedData: ProductType[] = await response.json();
    return fetchedData;
}

export const addUser = (user: UserType) => {
    fetch("https://perfume-ecommerce-json.vercel.app/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}

export const updateProducts = (productSearched: ProductType, id: string, newQuantity: number) => {
    fetch(`https://perfume-ecommerce-json.vercel.app/products/${id}`, {
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
    fetch(`https://perfume-ecommerce-json.vercel.app/users/${user.id}`, {
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