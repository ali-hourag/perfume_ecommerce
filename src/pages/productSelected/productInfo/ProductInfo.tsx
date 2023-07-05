import { FC, useState } from "react"
import { ProductInfoProps } from "../../../types/propTypes/productInfoProps"
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { BsHeart } from "react-icons/bs";
import "./productInfo.css"
import toast, { Toaster } from "react-hot-toast";

export const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
    const { img, title, price, description } = product;
    const [counter, setCounter] = useState<number>(0);
    const [activeHeart, setActiveHeart] = useState(false);

    const handleMinusIcon = () => {
        if (counter !== 0) setCounter(prevState => prevState - 1);
    }
    const handlePlusIcon = () => {
        setCounter(prevState => prevState + 1);
    }
    const handleHeartClicked = () => {
        if (!activeHeart) {
            setActiveHeart(true)
            toast.success("Added to wishlist!");
        } else {
            setActiveHeart(false)
            toast.success("Removed from wishlist!");
        }
    }

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
                    <button className="d2-btn_add-cart">ADD TO CART</button>
                </div>
            </div>
        </>
    )
}
