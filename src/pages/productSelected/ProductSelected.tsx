import { useParams } from "react-router-dom"
import { getProductById } from "../../utils/productFunctions";
import { useProductsContext } from "../../hooks/useProducts";
import { UnavailableProducts } from "../../components";
import "./productSelected.css"
import { ProductInfo } from "./productInfo/ProductInfo";

export const ProductSelected = () => {
    const params = useParams();
    const { products } = useProductsContext();
    const productID = params.productId;
    if (!products || !productID) return;
    const product = (getProductById(products, productID));


    return (
        <section className="product-selected-container">
            {!product && <UnavailableProducts />}
            {product && <ProductInfo product={product} />}
        </section>
    )
}
