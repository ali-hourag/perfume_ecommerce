import { useContext } from "react"
import { cartWishContext } from "../context/CartWishProvider"

export const useCartWishContext = () => {
    return useContext(cartWishContext);
}