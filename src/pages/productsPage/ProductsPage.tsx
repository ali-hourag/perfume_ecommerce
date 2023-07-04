import { FC, useEffect, useState } from "react";
import { useProductsContext } from "../../hooks/useProducts";
import { useFilterContext } from "../../hooks/useFilters";
import { PriceSort, ProductFor, ProductType, ProductTypes } from "../../types/product.d";


/**
 * MAKE IT LOAD WITH A SPINNER WHILE THE API IS BEING FETCHED
 * for it enter a loading status 
 * when it is on true, add the awesome loading from react
 */
export const ProductsPage: FC = () => {
    const { products } = useProductsContext();
    const { filters } = useFilterContext();
    const { fragranceType, productFor, priceSort, topSeller } = filters;
    console.log(fragranceType);

    return (
        <section className="products-container">
            {products && products.filter(({ type }) => {
                console.log(type);

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
                <div className="product-card" key={product.id}>
                    <img src={`src/assets/img/${product.img}`} />
                    <p>{product.price}</p>
                </div>
            ))}
        </section>
    )
}
