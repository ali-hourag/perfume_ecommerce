import { useEffect, useState, FC } from "react";
import { getData } from "../../api/FetchProducts";
import { ProductType } from "../../types/product";


export const ProductsPage: FC = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    /**
     * MAKE IT LOAD WITH A SPINNER WHILE THE API IS BEING FETCHED
     * for it enter a loading status 
     * when it is on true, add the awesome loading from react
     */
    useEffect((): void => {
        (async function fetchProductsData() {
            const getProducts: ProductType[] = await getData("products") as ProductType[];
            setProducts(getProducts);
        })();
    }, [])
    return (
        <>
        </>
    )
}
