import { FC } from 'react';
import { ProductProps } from '../../../types/propTypes/productProps';
import { BsHeart } from "react-icons/bs";
import "./product.css";



export const Product: FC<ProductProps> = ({ title, id, img, price, intensity }) => {
    return (
        <div className="product-card" id={id}>
            <BsHeart className="product-card-wishlist_icon" />
            <img src={`src/assets/img/${img}`} className="product-card_img" />
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
