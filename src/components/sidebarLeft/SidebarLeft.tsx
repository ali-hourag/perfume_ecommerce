import { FC, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './sidebarLeft.css';
import { sideBarLeftProps } from '../../types/propTypes';


export const SidebarLeft: FC<sideBarLeftProps> = ({ showSideBarLeft, changeSideBarLeftState }) => {
    const showSideBar = showSideBarLeft.toString();


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //Ver qué está checked y aplicar los filtros necesarios!!
        //guardar el filtrado en un contexto
        //meter en el menú, account, home y log out si nadie está logged
    }

    useEffect(() => {
        const checkedInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".sidebar-form_input-checked");
        checkedInputs.forEach(checkedInput => { checkedInput.checked = true })
    }, [])

    return (
        <>
            <div className={`sidebar-left show-sidebar-left_${showSideBar}`}  >
                <AiOutlineClose className={`sidebar_icon-close show-menu-elements_${showSideBar}`} onClick={changeSideBarLeftState} />
                <form onSubmit={handleSubmit} className={`sidebar-left-form show-menu-form-elements_${showSideBar}`}>
                    <fieldset className="fieldset">
                        <legend className="legend">Type of fragrance</legend>
                        <input type="radio" id="all" name="type-products" className="sidebar-form_input sidebar-form-input_fragrance-type sidebar-form_input-checked" />
                        <label htmlFor="all" className="sidebar-form_label">All</label>
                        <input type="radio" id="perfume" name="type-products" className="sidebar-form_input sidebar-form-input_fragrance-type" />
                        <label htmlFor="perfume" className="sidebar-form_label">Perfume</label>
                        <input type="radio" id="oil" name="type-products" className="sidebar-form_input sidebar-form-input_fragrance-type" />
                        <label htmlFor="oil" className="sidebar-form_label">Oil</label>
                        <input type="radio" id="gift" name="type-products" className="sidebar-form_input sidebar-form-input_fragrance-type" />
                        <label htmlFor="gift" className="sidebar-form_label">Giftbox</label>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="legend">For</legend>
                        <input type="radio" id="both" name="product-for" className="sidebar-form_input sidebar-form-input_for sidebar-form_input-checked" />
                        <label htmlFor="both" className="sidebar-form_label">Both</label>
                        <input type="radio" id="Him" name="product-for" className="sidebar-form_input sidebar-form-input_for" />
                        <label htmlFor="Him" className="sidebar-form_label">Him</label>
                        <input type="radio" id="Her" name="product-for" className="sidebar-form_input sidebar-form-input_for" />
                        <label htmlFor="Her" className="sidebar-form_label">Her</label>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="legend">Sort by price</legend>
                        <input type="radio" id="none" name="price" className="sidebar-form_input sidebar-form-input_price sidebar-form_input-checked" />
                        <label htmlFor="none" className="sidebar-form_label">None</label>
                        <input type="radio" id="expensive" name="price" className="sidebar-form_input sidebar-form-input_price" />
                        <label htmlFor="expensive" className="sidebar-form_label">more expensive</label>
                        <input type="radio" id="cheap" name="price" className="sidebar-form_input sidebar-form-input_price" />
                        <label htmlFor="cheap" className="sidebar-form_label">more cheap</label>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="legend">Get top sellers</legend>
                        <input type="checkbox" id="top-seller" name="top-seller" className="sidebar-form_input sidebar-form-top-seller_input" />
                        <label htmlFor="top-seller" className="sidebar-form_label">top seller</label>
                    </fieldset>
                    <button className="sidebar-form-btn" type="submit" disabled={false}>APPLY</button>
                </form>
            </div>
        </>
    )
}
