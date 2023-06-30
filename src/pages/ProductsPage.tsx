import { useEffect, useState } from "react";
import { getProductsData } from "../api/FetchProducts";
import { productType } from "../types/product";


export const ProductsPage = () => {
    const [products, setProducts] = useState<productType[]>([]);

    /**
     * MAKE IT LOAD WITH A SPINNER WHILE THE API IS BEING FETCHED
     * for it enter a loading status 
     * when it is on true, add the awesome loading from react
     */
    useEffect((): void => {
        (async function fetchProductsData() {
            const getProducts = await getProductsData();
            setProducts(getProducts);
        })();
    }, [])
    return (
        <>
        </>
    )
}
