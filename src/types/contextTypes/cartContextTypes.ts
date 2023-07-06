import { CartProduct } from "../dataTypes/user";

export interface cartWishContextType {
    cart: CartProduct[],
    wishlist: CartProduct[],
    changeCart: (newCart: CartProduct[]) => void,
    changeWishlist: (newWishlist: CartProduct[]) => void
}