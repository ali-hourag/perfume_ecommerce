import { createContext, useState } from "react"
import { CartProduct } from "../types/dataTypes/user";
import { cartWishContextType } from "../types/contextTypes/cartContextTypes";

export const cartWishContext = createContext<cartWishContextType>({ cart: [], wishlist: [], changeCart: () => { }, changeWishlist: () => { } })

export const CartWishProvider = ({ ...props }) => {
    const [cart, setCart] = useState<CartProduct[]>([]);
    const [wishlist, setWishlist] = useState<CartProduct[]>([]);

    const changeCart = (newCart: CartProduct[]) => {
        setCart(newCart)
    }
    const changeWishlist = (newWishlist: CartProduct[]) => {
        setWishlist(newWishlist);
    }
    return (
        <cartWishContext.Provider value={{ cart, wishlist, changeCart, changeWishlist }}>
            {props.children}
        </cartWishContext.Provider>
    )
}
