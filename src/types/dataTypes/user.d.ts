
export type UserType = {
    id: string,
    email: string,
    name: string,
    password: string,
    cart: CartProduct[],
    wishlist: CartProduct[]
}

export type CartProduct = {
    title: string,
    id: string,
    img: string,
    price: number,
    quantity?: number
}
