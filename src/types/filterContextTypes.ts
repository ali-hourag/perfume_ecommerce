import { PriceSort, ProductFor, ProductTypes } from "./product"

export interface FilterContextTypes {
    filters: Filters,
    changeFilters: (newFilters: Filters) => void
}

export type Filters = {
    fragranceType: ProductTypes,
    productFor: ProductFor,
    priceSort: PriceSort,
    topSeller: boolean
}