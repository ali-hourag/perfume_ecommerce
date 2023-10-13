import { useNavigate } from "react-router-dom";
import { UnavailableProducts } from "../../components";
import { useCartWishContext } from "../../hooks/useCartWish";
import { useUsersContext } from "../../hooks/useUsers";
import { roundDecimals } from "../../utils/roundDecimals";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CartProduct } from "../../types/dataTypes/user";
import { updateProducts } from "../../api/FetchData";
import { useProductsContext } from "../../hooks/useProducts";
import { ProductType } from "../../types/dataTypes/product";
import "./cart.css";

export const Cart = () => {
    const { cart } = useCartWishContext();
    const { products, changeProducts } = useProductsContext();
    const { currentUser, login } = useUsersContext();
    const { changeCart } = useCartWishContext();
    const [checkout, setCheckout] = useState(false);
    const navigate = useNavigate();
    let totalPrice = 0;
    cart.forEach(({ quantity, price }) => {
        if (quantity) totalPrice += price * quantity;
    })
    totalPrice = roundDecimals(totalPrice, 2);

    const handleProductClicked = (id: string) => {
        navigate(`/products/${id}`)
    }
    const handleBtnCheckout = () => {
        const checkoutInput: HTMLInputElement = document.querySelector(".checkout-email-input") as HTMLInputElement;
        const checkoutInputAddress: HTMLInputElement = document.querySelector(".checkout-email-input") as HTMLInputElement;
        let readyToCheckout = false;
        if (currentUser.email !== "guest@guest.com") {
            if (checkoutInputAddress.value.length > 5) {
                readyToCheckout = true;
            }
        } else {
            const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
            if (regex.test(checkoutInput.value) && checkoutInputAddress.value.length > 5) {
                readyToCheckout = true;
            }
        }
        if (readyToCheckout) {
            setCheckout(true)
            toast.success("Successful purchase")
            const newUser = currentUser;
            newUser.cart = [];
            login(newUser);
            const userLS = localStorage.getItem("user") as string;
            const user = JSON.parse(userLS);
            const activeCart: CartProduct[] = user.cart as CartProduct[];
            for (let i = 0; i < activeCart.length; i++) {
                const productSearched = products?.find((product) => product.id === activeCart[i].id) as ProductType;
                if (productSearched && products) {
                    const purchasedQuantity = activeCart[i].quantity as number;
                    const totalQuantity = productSearched?.quantity - purchasedQuantity;
                    productSearched.quantity = productSearched?.quantity - purchasedQuantity;
                    updateProducts(productSearched, activeCart[i].id, totalQuantity)
                }
            }

            if (products) {
                changeProducts(products);
            }
            localStorage.setItem("user", JSON.stringify(newUser));
        } else toast.error("Invalid data")
    }
    const handleBtnContinue = () => {
        changeCart([])
        navigate("/", {
            replace: true
        })
    }

    return (
        <section className="wishlist-container">
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
            {/* Since the structure of the map is very similar
            from the wishlist page, some classes will be the same. */}
            {cart.length === 0 && !checkout && <UnavailableProducts />}
            {cart.length > 0 && !checkout && cart.map((product) => (
                <div className="wishlist-entry-container" key={product.id}>
                    <img src={`/src/assets/img/${product.img}`} className="wishlist-img" onClick={() => handleProductClicked(product.id)} />
                    <div className="wishlist-info">
                        <h4 className="wishlist-info-h4">{product.title}</h4>
                        <p>{product.price} &euro;</p>
                    </div>
                    <div className="wishlist-remove">
                        <p className="cart-product-quantity">{product.quantity}</p>
                    </div>
                </div>
            ))}
            {cart.length > 0 && !checkout &&
                <form className="checkout-container">
                    <p className="checkout-total-price">TOTAL: {totalPrice} &euro;</p>
                    {currentUser.email === "guest@guest.com" ? <input type="email"
                        placeholder="Enter your e-mail"
                        className="checkout-email-input"
                    /> : ""}
                    <input type="text" className="checkout-email-input"
                        placeholder="ADDRESS"
                    />
                    <button type="button" className="checkout-btn-clicked" onClick={handleBtnCheckout}>CHECKOUT</button>
                </form>}
            {checkout &&
                <div className="checkout-summary-container">
                    <p>You have made a purchase for {totalPrice} &euro;</p>
                    <p>The rest of the information is on your e-mail</p>
                    <button className="checkout-btn-clicked" onClick={handleBtnContinue}>CONTINUE SHOPPING</button>
                </div>}


        </section>
    )
}
