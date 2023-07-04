import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiDeliveryTruck } from "react-icons/ci";
import { CgMathPlus } from "react-icons/cg";
import { MdPayment } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { BiLogoInstagram, BiLogoTwitter, BiLogoYoutube, BiLogoTiktok } from "react-icons/bi"
import { Toaster } from "react-hot-toast";
import { handleHelpButton, handleInfoClicked, handleSubscribeButton } from "../../utils/utils";
import { useProductsContext } from "../../hooks/useProducts";
import { getData } from "../../api/FetchProducts";
import { productType } from "../../types/product";
import "./homePage.css";


export const HomePage: FC = () => {

    const { products, changeProducts } = useProductsContext();

    if (products === null) {
        (async function getProducts() {
            const fetchProducts: productType[] = await getData("products") as productType[];
            changeProducts(fetchProducts);
        })();
    }


    return (
        <>
            <section className="home-page_section">
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
                <div className="home-page_entry home-page_entry_premium">
                    <h3 className="entry-type_heading">PREMIUM FRAGRANCES</h3>
                    <h5 className="entry-info_heading">DISCOVER YOUR SCENT</h5>
                    <NavLink className="entry-link" to="/products">Shop now</NavLink>
                </div>
                <div className="home-page_entry home-page_entry_oil">
                    <h3 className="entry-type_heading">OIL FRAGRANCES</h3>
                    <h5 className="entry-info_heading">DISCOVER YOUR SCENT</h5>
                    <NavLink className="entry-link" to="/products">Shop now</NavLink>
                </div>
                <div className="home-page_entry home-page_entry_gift">
                    <h3 className="entry-type_heading">GIFT SETS</h3>
                    <h5 className="entry-info_heading">DISCOVER YOUR SCENT</h5>
                    <NavLink className="entry-link" to="/products">Shop now</NavLink>
                </div>
                <div className="home-page_entry_delivery">
                    <div className="delivery-entry">
                        <CiDeliveryTruck className="delivery-entry_icon" />
                        <div className="delivery-entry_info">
                            <p className="delivery-info-p1">FREE DELIVERY</p>
                            <p className="delivery-info-p2">On Spain orders</p>
                        </div>
                    </div>
                    <div className="delivery-entry">
                        <MdPayment className="delivery-entry_icon" />
                        <div className="delivery-entry_info">
                            <p className="delivery-info-p1">SAFE & SECURE PAYMENT</p>
                            <p className="delivery-info-p2">Protected by secure connection</p>
                        </div>
                    </div>
                    <div className="delivery-entry">
                        <GiReturnArrow className="delivery-entry_icon" />
                        <div className="delivery-entry_info">
                            <p className="delivery-info-p1">EASY RETURN</p>
                            <p className="delivery-info-p2">Within 14 days</p>
                        </div>
                    </div>
                    <div className="delivery-entry">
                        <CiDeliveryTruck className="delivery-entry_icon" />
                        <div className="delivery-entry_info">
                            <p className="delivery-info-p1">INTERNATIONAL DELIVERY</p>
                            <p className="delivery-info-p2">From 14.99&euro;</p>
                        </div>
                    </div>

                </div>
                <div className="home-page_entry_info">
                    <div className="info-entry">
                        <div className="info-entry-title">
                            <p>NEWSLETTER</p>
                            <CgMathPlus onClick={() => handleInfoClicked("newsletter")} />
                        </div>
                        <div className="newsletter">
                            <p>SUNNAMUSK is responsible for processing your personal data. The information collected above is used to send our personalised offers, news and events. You have, amongst others, the right to access and correct your personal data and to request erasure. For more information about how we protect your personal data, please read our Privacy Policy or contact our data protection officer by e-mail at the following address online@sunnamusk.com</p>
                            <input type="email" placeholder="Your email address" className="newsletter-input" />
                            <button className="newsletter-button" onClick={handleSubscribeButton}>Subscribe</button>
                        </div>
                    </div>
                    <div className="info-entry">
                        <div className="info-entry-title">
                            <p>NEED HELP</p>
                            <CgMathPlus onClick={() => handleInfoClicked("need-help")} />
                        </div>
                        <div className="need-help">
                            <textarea className="need-help-textarea" placeholder="type your question" rows={4} cols={30} />
                            <input type="email" placeholder="Your email address" className="need-help-input" />
                            <button className="need-help-button" onClick={handleHelpButton}>Submit question</button>
                        </div>
                    </div>
                    <div className="info-entry">
                        <div className="info-entry-title">
                            <p>LEGAL</p>
                            <CgMathPlus onClick={() => handleInfoClicked("legal")} />
                        </div>
                        <div className="legal">
                            <p>Get in contact with our legal team: sunnalegal@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-entry">
                        <div className="info-entry-title">
                            <p>CONTACT US</p>
                            <CgMathPlus onClick={() => handleInfoClicked("contact")} />
                        </div>
                        <div className="contact">
                            <p>+34 689098765</p>
                            <p>sunnamusk@contact.com</p>
                        </div>
                    </div>
                    <div className="info-entry">
                        <div className="info-entry-title">
                            <p>FOLLOW US</p>
                            <CgMathPlus onClick={() => handleInfoClicked("follow-us")} />
                        </div>
                        <div className="follow-us">
                            <Link to="https://www.instagram.com/sunnamusk/" target="_blank"><BiLogoInstagram className="follow-us_icon" /></Link>
                            <Link to="https://twitter.com/sunnamusk" target="_blank"><BiLogoTwitter className="follow-us_icon" /></Link>
                            <Link to="https://www.youtube.com/channel/UCtrAUVcaRKlmc6qH7RAzPiA" target="_blank"><BiLogoYoutube className="follow-us_icon" /></Link>
                            <Link to="https://www.tiktok.com/@sunnamusk" target="_blank"><BiLogoTiktok className="follow-us_icon" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
