import { useEffect, useState, FC } from "react";
import { getData } from "../../api/FetchProducts";
import { productType } from "../../types/product";


export const ProductsPage: FC = () => {
    const [products, setProducts] = useState<productType[]>([]);

    /**
     * MAKE IT LOAD WITH A SPINNER WHILE THE API IS BEING FETCHED
     * for it enter a loading status 
     * when it is on true, add the awesome loading from react
     */
    useEffect((): void => {
        (async function fetchProductsData() {
            const getProducts: productType[] = await getData("products") as productType[];
            setProducts(getProducts);
        })();
    }, [])
    return (
        <>
        </>
    )
}
