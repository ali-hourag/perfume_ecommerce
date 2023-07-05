
export type ProductType = {
    title: string;
    id: string;
    img: string;
    type: ProductTypes;
    for: ProductFor;
    topSeller: boolean;
    quantity: number;
    description: string;
    price: number;
    intensity: number;
}

export enum ProductTypes {
    all = "all",
    eauDeParfum = "eau-de-parfume",
    oilFragrance = "oil-fragrance",
    giftBox = "gift-box"
}

export enum ProductFor {
    all = "for-all",
    him = "him",
    her = "her",
    both = "him-her"
}

export enum PriceSort {
    none = "none",
    moreExpensive = "more-expensive",
    cheaper = "cheaper"
}