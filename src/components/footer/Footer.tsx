import { FC } from 'react'
import { CiShoppingBasket, CiShoppingCart } from 'react-icons/ci';
import { IoMdHeartEmpty } from 'react-icons/io';
import { VscAccount } from 'react-icons/vsc';
import './footer.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useFilterContext } from '../../hooks/useFilters';
import { PriceSort, ProductFor, ProductTypes } from '../../types/dataTypes/product.d';

export const Footer: FC = () => {
    const { changeFilters } = useFilterContext();
    const navigate = useNavigate();
    const location = useLocation();
    const handleShopBtnClicked = () => {
        changeFilters({ fragranceType: ProductTypes.all, productFor: ProductFor.all, priceSort: PriceSort.none, topSeller: false });
        navigate("products");
    }
    const handleAccountClicked = () => {
        localStorage.setItem("previous-page", location.pathname);
        navigate("profile");
    }
    return (
        <footer className="footer">
            <div className="footer-icon-container" onClick={handleShopBtnClicked}>
                <CiShoppingBasket className="footer-icon" />
                <p>Shop</p>
            </div>
            <div className="footer-icon-container">
                <IoMdHeartEmpty className="footer-icon" />
                <span className="icon-number_span icon-number_span-wishlist">0</span>
                <p>Wishlist</p>
            </div>
            <div className="footer-icon-container">
                <CiShoppingCart className="footer-icon footer-icon-shopping-cart_svg" />
                <span className="icon-number_span">0</span>
                <p>Cart</p>
            </div>

            <div className="footer-icon-container" onClick={handleAccountClicked}>
                <VscAccount className="footer-icon" />
                <p>Account</p>
            </div>
        </footer>
    )
}
