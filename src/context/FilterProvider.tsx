import { createContext, useState } from "react"
import { PriceSort, ProductFor, ProductTypes } from "../types/product.d"
import { FilterContextTypes, Filters } from "../types/filterContextTypes";



export const filterContext = createContext<FilterContextTypes>({
    filters: {
        fragranceType: ProductTypes.all,
        productFor: ProductFor.all, priceSort: PriceSort.none, topSeller: false
    }, changeFilters: () => { }
})

export const FilterProvider = ({ ...props }) => {

    const [filters, setFilters] = useState<Filters>({
        fragranceType: ProductTypes.all,
        productFor: ProductFor.all, priceSort: PriceSort.none, topSeller: false
    });

    const changeFilters = (newFilters: Filters) => {
        setFilters(newFilters);
    }

    return (
        <filterContext.Provider value={{ filters, changeFilters }}>
            {props.children}
        </filterContext.Provider>
    )
}
