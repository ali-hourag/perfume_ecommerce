import { FC, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { SideBarLeftProps } from '../../../types/propTypes/propTypes';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { PriceSort, ProductFor, ProductTypes } from '../../../types/dataTypes/product.d';
import './sidebarLeft.css';
import { useFilterContext } from '../../../hooks/useFilters';
import { setNewFilter } from '../../../utils/setNewFilter';


export const SidebarLeft: FC<SideBarLeftProps> = ({ showSidebarLeft, changeSidebarLeftState }) => {
    const showSidebar = showSidebarLeft.toString();
    const { filters, changeFilters } = useFilterContext();
    const navigate = useNavigate();
    const location = useLocation();


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        changeFilters(setNewFilter())
        navigate("products");
    }

    const handleAccountClicked = () => {
        changeSidebarLeftState();
        localStorage.setItem("previous-page", location.pathname);
    }

    useEffect(() => {
        const checkedInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".sidebar-form_input-checked");
        const topSellerInput: HTMLInputElement = document.querySelector(".sidebar-form-top-seller_input") as HTMLInputElement;
        topSellerInput.checked = false;
        checkedInputs.forEach(checkedInput => { checkedInput.checked = true })
    }, [filters])

    return (
        <div className={`sidebar-left show-sidebar-left_${showSidebar}`}  >
            <AiOutlineClose className="sidebar_icon-close" onClick={changeSidebarLeftState} />

            <form onSubmit={handleSubmit} className="sidebar-left-form">
                <fieldset className="fieldset">
                    <legend className="legend">Type of fragrance</legend>
                    <input type="radio" id={ProductTypes.all} name="type-products" className="sidebar-form_input sidebar-form-input_fragrance-type sidebar-form_input-checked" />
                    <label htmlFor={ProductTypes.all} className="sidebar-form_label">All</label>
                    <input type="radio" id={ProductTypes.eauDeParfum} name="type-products" className="sidebar-form_input sidebar-form-input_fragrance-type" />
                    <label htmlFor={ProductTypes.eauDeParfum} className="sidebar-form_label">Perfume</label>
                    <input type="radio" id={ProductTypes.oilFragrance} name="type-products" className="sidebar-form_input sidebar-form-input_fragrance-type" />
                    <label htmlFor={ProductTypes.oilFragrance} className="sidebar-form_label">Oil</label>
                    <input type="radio" id={ProductTypes.giftBox} name="type-products" className="sidebar-form_input sidebar-form-input_fragrance-type" />
                    <label htmlFor={ProductTypes.giftBox} className="sidebar-form_label">Giftbox</label>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="legend">For</legend>
                    <input type="radio" id={ProductFor.all} name="product-for" className="sidebar-form_input sidebar-form-input_for sidebar-form_input-checked" />
                    <label htmlFor={ProductFor.all} className="sidebar-form_label">all</label>
                    <input type="radio" id={ProductFor.both} name="product-for" className="sidebar-form_input sidebar-form-input_for" />
                    <label htmlFor={ProductFor.both} className="sidebar-form_label">Both</label>
                    <input type="radio" id={ProductFor.him} name="product-for" className="sidebar-form_input sidebar-form-input_for" />
                    <label htmlFor={ProductFor.him} className="sidebar-form_label">Him</label>
                    <input type="radio" id={ProductFor.her} name="product-for" className="sidebar-form_input sidebar-form-input_for" />
                    <label htmlFor={ProductFor.her} className="sidebar-form_label">Her</label>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="legend">Sort by price</legend>
                    <input type="radio" id={PriceSort.none} name="price" className="sidebar-form_input sidebar-form-input_price sidebar-form_input-checked" />
                    <label htmlFor={PriceSort.none} className="sidebar-form_label">None</label>
                    <input type="radio" id={PriceSort.moreExpensive} name="price" className="sidebar-form_input sidebar-form-input_price" />
                    <label htmlFor={PriceSort.moreExpensive} className="sidebar-form_label">more expensive</label>
                    <input type="radio" id={PriceSort.cheaper} name="price" className="sidebar-form_input sidebar-form-input_price" />
                    <label htmlFor={PriceSort.cheaper} className="sidebar-form_label">more cheap</label>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="legend">Get top sellers</legend>
                    <input type="checkbox" id="top-seller" name="top-seller" className="sidebar-form_input sidebar-form-top-seller_input" />
                    <label htmlFor="top-seller" className="sidebar-form_label">top seller</label>
                </fieldset>

                <button className="sidebar-form-btn" type="submit" disabled={false} onClick={changeSidebarLeftState}>APPLY</button>

            </form>
            <div className="sidebar-left-home">
                <NavLink to="/" className="sidebar-form-link" onClick={changeSidebarLeftState}>HOME</NavLink>
            </div>
            <div className="sidebar-left-account">
                <NavLink to="profile" className="sidebar-form-link" onClick={handleAccountClicked}>ACCOUNT</NavLink>
            </div>
        </div>
    )
}
