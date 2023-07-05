import { HiOutlineEmojiSad } from "react-icons/hi";
import "./unavailableProducts.css";

export const UnavailableProducts = () => {
    return (
        <div className="unavailable-products-modal-container">
            <h2>we are sorry</h2>
            <HiOutlineEmojiSad className="sad-face-icon" />
            <p className="unavailable-products_message">there are no results for your search</p>
        </div>
    )
}
