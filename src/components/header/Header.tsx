import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { FC } from 'react';
import { SidebarLeft } from '../sidebarLeft/SidebarLeft';
import { SidebarRight } from '../sidebarRight/SidebarRight';
import { useSidebar } from '../../hooks/useSidebar';
import './header.css'
import { useProductsContext } from '../../hooks/useProducts';
import { ProductType } from '../../types/product';
import { getData } from '../../api/FetchProducts';

export const Header: FC = () => {
    const [sidebarLeft, sidebarRight] = useSidebar();
    const { sidebarLeftState, showSidebarLeft, hideSidebarLeft } = sidebarLeft;
    const { sidebarRightState, showSidebarRight, hideSidebarRight } = sidebarRight;
    const { products, changeProducts } = useProductsContext();

    if (products === null) {
        (async function getProducts() {
            const fetchProducts: ProductType[] = await getData("products") as ProductType[];
            changeProducts(fetchProducts);
        })();
    }


    return (
        <header className="header">
            <AiOutlineMenu className="header_icon-menu" onClick={showSidebarLeft} />
            <img src="src/assets/img/sunnah-musk.avif" />
            <AiOutlineSearch className="header_icon-search" onClick={showSidebarRight} />
            <div className="cart-icon-container">
                <AiOutlineShoppingCart className="header_icon-cart" />
                <span className="icon-number_span header-icon-number_span">0</span>
            </div>
            <SidebarLeft
                showSidebarLeft={sidebarLeftState}
                changeSidebarLeftState={hideSidebarLeft}
            />
            <SidebarRight
                showSidebarRight={sidebarRightState}
                changeSidebarRightState={hideSidebarRight}
            />
        </header>
    )
}