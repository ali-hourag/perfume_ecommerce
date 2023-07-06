import { FC, useEffect, useState } from "react";
import { useProductsContext } from "../../hooks/useProducts";
import { useFilterContext } from "../../hooks/useFilters";
import { PriceSort, ProductFor, ProductTypes } from "../../types/dataTypes/product.d";
import { Product, UnavailableProducts } from "../../components";
import { adjustScrollbar } from "../../utils/adjustScrollbar";
import "./productsPage.css";


/**
 * MAKE IT LOAD WITH A SPINNER WHILE THE API IS BEING FETCHED
 * for it enter a loading status 
 * when it is on true, add the awesome loading from react
 */
export const ProductsPage: FC = () => {
    const { products } = useProductsContext();
    const { filters } = useFilterContext();
    const { fragranceType, productFor, priceSort, topSeller } = filters;
    const [existingProducts, setExistingProducts] = useState<{ existing: boolean, firstLoad: boolean }>
        ({ existing: true, firstLoad: true });



    // To control when the UnavailableProducts component has to be shown.
    // It indicates that there are no products matching the filters set by the user.
    // In the firstLoad the products are still not rendered and it shows that filter
    // are not matching when in reality the productsDiv are still not rendered at that
    // time. This solves the problem that happens if the modal of no results is showing 
    // and after rechargin it is appended with next products
    // and loses all of its changes on the state
    useEffect(() => {
        const productsDiv: NodeListOf<HTMLDivElement> = document.querySelectorAll(".product-card");
        if (productsDiv.length !== 0) setExistingProducts({ existing: true, firstLoad: false });
        else if (existingProducts.firstLoad) setExistingProducts({ existing: true, firstLoad: false })
        else setExistingProducts({ existing: false, firstLoad: false })
    }, [filters])

    useEffect(() => {
        adjustScrollbar();
    })

    return (
        <section className="products-container">
            {!existingProducts.existing && !existingProducts.firstLoad && <UnavailableProducts />}
            {products && products.filter(({ type }) => {
                if (fragranceType === ProductTypes.all) return true;
                return type === fragranceType;
            }).filter((product) => {
                if (productFor === ProductFor.all) return true;
                return product.for === productFor;
            }).filter((product) => {
                if (!topSeller) return true;
                return product.topSeller;
            }).sort((a, b) => {
                if (priceSort === PriceSort.none) return 0;
                if (priceSort === PriceSort.moreExpensive) return (a.price > b.price) ? -1 : 1;
                return (a.price > b.price) ? 1 : -1;
            }).map((product) => (
                <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    intensity={product.intensity}
                    img={product.img}
                />
            ))}
        </section>
    )
}
