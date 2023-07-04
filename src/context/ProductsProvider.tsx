import { createContext, useState } from "react"
import { ProductType } from "../types/product"

export const productsContext = createContext<{ products: ProductType[] | null, changeProducts: (newProducts: ProductType[]) => void }>
    ({ products: null, changeProducts: () => { } });

export const ProductsProvider = ({ ...props }) => {
    const [products, setProducts] = useState<ProductType[] | null>(null);

    const changeProducts = (newProducts: ProductType[]) => {
        setProducts(newProducts);
    }

    return (
        <productsContext.Provider value={{ products, changeProducts }} >
            {props.children}
        </productsContext.Provider>
    )
}
