import { FC, useState } from 'react';
import { ProductProps } from '../../../types/propTypes/productProps';
import { BsHeart } from "react-icons/bs";
import "./product.css";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';



export const Product: FC<ProductProps> = ({ title, id, img, price, intensity }) => {
    const navigate = useNavigate();
    const [activeHeart, setActiveHeart] = useState(false);

    const handleHeartClicked = (event: React.TouchEvent) => {
        event.stopPropagation();
        if (!activeHeart) {
            setActiveHeart(true)
            toast.success("Added to wishlist!");
        } else {
            setActiveHeart(false)
            toast.success("Removed from wishlist!");
        }
    }

    const handleProductClicked = () => {
        navigate(`${id}`);
    }

    return (
        <div className="product-card" id={id} onClick={handleProductClicked}>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <BsHeart className={`product-card-wishlist_icon ${activeHeart ? "active-heart" : ""}`} onClick={handleHeartClicked} />
            <img src={`/src/assets/img/${img}`} className="product-card_img" />
            <div className="product-card_info">
                <p className="product-card_title">{title}</p>
                <p className="product-card_price">{price} &euro;</p>
                <div className="product-card_intensity-container">
                    <p className="product-card_intensity-p">Intensity</p>
                    <div className="product-card_intensity-span-container">
                        <span className={`product-card_intensity-span ${intensity >= 1 ? "intensity-active" : ""}`}></span>
                        <span className={`product-card_intensity-span ${intensity >= 2 ? "intensity-active" : ""}`}></span>
                        <span className={`product-card_intensity-span ${intensity >= 3 ? "intensity-active" : ""}`}></span>
                        <span className={`product-card_intensity-span ${intensity >= 4 ? "intensity-active" : ""}`}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
