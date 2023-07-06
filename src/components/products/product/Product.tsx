import { FC, useEffect, useState } from 'react';
import { ProductProps } from '../../../types/propTypes/productProps';
import { BsHeart } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useCartWishContext } from '../../../hooks/useCartWish';
import { CartProduct, UserType } from '../../../types/dataTypes/user.d';
import "./product.css";



export const Product: FC<ProductProps> = ({ title, id, img, price, intensity }) => {
    const navigate = useNavigate();
    const { changeWishlist } = useCartWishContext();
    const [activeHeart, setActiveHeart] = useState(false);

    const newProduct: CartProduct = {
        title: title,
        id: id,
        img: img,
        price: price
    }

    const handleHeartClicked = (event: React.TouchEvent) => {
        event.stopPropagation();
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

    const handleProductClicked = () => {
        navigate(`${id}`);
    }
    useEffect(() => {
        const userLS = localStorage.getItem("user") as string;
        const activeUser: UserType = JSON.parse(userLS);

        if (activeUser.wishlist.find((product) => product.id === id)) {
            setActiveHeart(true)
        }
    }, [])
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
