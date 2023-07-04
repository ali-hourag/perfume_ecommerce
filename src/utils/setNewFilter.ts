import { Filters } from "../types/filterContextTypes";
import { PriceSort, ProductFor, ProductTypes } from "../types/product.d";


export const setNewFilter = () => {
    let fragranceType: ProductTypes = ProductTypes.all;
    let productFor: ProductFor = ProductFor.both;
    let priceSort: PriceSort = PriceSort.none;
    let topSeller: boolean = false;

    const typeFilterInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".sidebar-form-input_fragrance-type");
    const forFilterInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".sidebar-form-input_for");
    const priceFilterInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".sidebar-form-input_price");
    const topSellerInput: HTMLInputElement = document.querySelector(".sidebar-form-top-seller_input") as HTMLInputElement;


    for (let i = 0; i < 3; i++) {
        if (typeFilterInputs[i].checked) fragranceType = typeFilterInputs[i].id as ProductTypes;
        if (forFilterInputs[i].checked) productFor = forFilterInputs[i].id as ProductFor;
        if (priceFilterInputs[i].checked) priceSort = priceFilterInputs[i].id as PriceSort;
    }
    if (typeFilterInputs[3].checked) fragranceType = typeFilterInputs[3].id as ProductTypes;
    if (forFilterInputs[3].checked) productFor = forFilterInputs[3].id as ProductFor;
    if (topSellerInput.checked) topSeller = true;
    const newFilter: Filters = { fragranceType, productFor, priceSort, topSeller }
    return newFilter
}