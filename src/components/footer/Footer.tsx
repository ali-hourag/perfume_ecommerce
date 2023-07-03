import { FC } from 'react'
import { CiShoppingBasket, CiShoppingCart } from 'react-icons/ci';
import { IoMdHeartEmpty } from 'react-icons/io';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineSearch } from 'react-icons/ai';

import './footer.css'

export const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer-icon-container">
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

            <div className="footer-icon-container">
                <VscAccount className="footer-icon" />
                <p>Account</p>
            </div>
            <div className="footer-icon-container">
                <AiOutlineSearch className="footer-icon" />
                <p>Search</p>
            </div>
        </footer>
    )
}
