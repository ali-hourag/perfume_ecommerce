
export type productType = {
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
    eauDeParfum = "eau-de-parfum",
    oilFragrance = "oil-fragrance",
    giftBox = "gift-box"
}

export enum ProductFor {
    him = "him",
    her = "her",
    both = "him-her"
}