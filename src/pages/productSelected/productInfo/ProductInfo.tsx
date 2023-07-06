import { FC, useEffect, useState } from "react"
import { ProductInfoProps } from "../../../types/propTypes/productInfoProps"
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { BsHeart } from "react-icons/bs";
import "./productInfo.css"
import toast, { Toaster } from "react-hot-toast";
import { CartProduct, UserType } from "../../../types/dataTypes/user";
import { useCartWishContext } from "../../../hooks/useCartWish";

export const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
    const { img, title, price, description, id } = product;
    const [counter, setCounter] = useState<number>(0);
    const [activeHeart, setActiveHeart] = useState(false);
    const { changeWishlist, changeCart } = useCartWishContext();

    const newProduct: CartProduct = {
        title: title,
        id: id,
        img: img,
        price: price,
        quantity: counter
    }

    const handleMinusIcon = () => {
        if (counter !== 0) setCounter(prevState => prevState - 1);
    }
    const handlePlusIcon = () => {
        setCounter(prevState => prevState + 1);
    }
    const handleHeartClicked = () => {
        const userLS = localStorage.getItem("user") as string;
        const activeUser: UserType = JSON.parse(userLS);
        const activeWishlist: CartProduct[] = activeUser.wishlist;
        if (!activeHeart) {
            setActiveHeart(true)
            activeWishlist.push(newProduct);
            toast.success("Added to wishlist!");
        } else {
            const productWishlistIndex = activeWishlist.findIndex((product) => product.id === id);
            if (productWishlistIndex !== -1) activeWishlist.splice(productWishlistIndex, 1);
            setActiveHeart(false)
            toast.success("Removed from wishlist!");
        }
        activeUser.wishlist = activeWishlist;
        localStorage.setItem("user", JSON.stringify(activeUser));
        changeWishlist(activeWishlist)
    }

    const handleAddToCartBtn = () => {
        if (counter > 0) {
            const userLS = localStorage.getItem("user") as string;
            const activeUser: UserType = JSON.parse(userLS);
            const activeCart: CartProduct[] = activeUser.cart;
            if (activeCart.length > 0) {
                const searchedProductIndex = activeCart.findIndex((product) => product.id === id);
                if (searchedProductIndex !== -1) {
                    const quantityProductCart = activeCart[searchedProductIndex].quantity as number;
                    activeCart[searchedProductIndex].quantity = quantityProductCart + counter;
                } else {
                    activeCart.push(newProduct);
                }
            } else {
                activeCart.push(newProduct);
            }
            activeUser.cart = activeCart;
            localStorage.setItem("user", JSON.stringify(activeUser));
            changeCart(activeUser.cart);
            toast.success("Cart updated successfully!");
        }
    }

    useEffect(() => {
        const userLS = localStorage.getItem("user") as string;
        const activeUser: UserType = JSON.parse(userLS);

        if (activeUser.wishlist.find((product) => product.id === id)) {
            setActiveHeart(true)
        }
    }, [])

    return (
        <>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <img src={`/src/assets/img/${img}`} className="product-info_img" />
            <h2 className="product-info_title">{title}</h2>
            <p className="product-info_price">{price} &euro;</p>
            <p className="product-info_description">{description}</p>
            <div className="product-info_quantity">
                <div className="product-info_quantity-d1">
                    <div className="quantity-counter-container">
                        <CgMathMinus className="quantity-counter-icon-minus" onClick={handleMinusIcon} />
                        <span className="quantity-counter-number">{counter}</span>
                        <CgMathPlus className="quantity-counter-icon-plus" onClick={handlePlusIcon} />
                    </div>
                    <BsHeart className={`d1-icon-wishlist ${activeHeart ? "active-heart" : ""}`} onClick={handleHeartClicked} />
                </div>
                <div className="product-info_quantity-d2">
                    <button className="d2-btn_add-cart" onClick={handleAddToCartBtn}>ADD TO CART</button>
                </div>
            </div>
        </>
    )
}
