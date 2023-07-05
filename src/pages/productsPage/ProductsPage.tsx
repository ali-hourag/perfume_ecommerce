import { FC, useEffect, useState } from "react";
import { useProductsContext } from "../../hooks/useProducts";
import { useFilterContext } from "../../hooks/useFilters";
import { PriceSort, ProductFor, ProductTypes } from "../../types/dataTypes/product.d";
import { Product, UnavailableProducts } from "../../components";
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
    const [existingProducts, setExistingProducts] = useState(true);

    useEffect(() => {
        const productsDiv: NodeListOf<HTMLDivElement> = document.querySelectorAll(".product-card");
        if (productsDiv.length !== 0) setExistingProducts(true);
        else setExistingProducts(false);
    }, [filters])

    return (
        <section className="products-container">
            {!existingProducts && <UnavailableProducts />}
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
