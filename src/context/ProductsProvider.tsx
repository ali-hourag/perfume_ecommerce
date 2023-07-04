import { createContext, useState } from "react"
import { productType } from "../types/product"

export const productsContext = createContext<{ products: productType[] | null, changeProducts: (newProducts: productType[]) => void }>
    ({ products: null, changeProducts: () => { } });

export const ProductsProvider = ({ ...props }) => {
    const [products, setProducts] = useState<productType[] | null>(null);

    const changeProducts = (newProducts: productType[]) => {
        setProducts(newProducts);
    }

    return (
        <productsContext.Provider value={{ products, changeProducts }} >
            {props.children}
        </productsContext.Provider>
    )
}
