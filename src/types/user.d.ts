
export type UserType = {
    email: string,
    name: string,
    password: string,
    cart: CartProduct[]
}

export type CartProduct = {
    title: string,
    id: string,
    img: string,
    price: number
}
