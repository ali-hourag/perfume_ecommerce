import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import './header.css'
import { FC } from 'react';
import { SidebarLeft } from '../sidebarLeft/SidebarLeft';
import { SidebarRight } from '../sidebarRight/SidebarRight';
import { useSidebar } from '../../hooks/useSidebar';

export const Header: FC = () => {
    const [sidebarLeft, sidebarRight] = useSidebar();
    const { sidebarLeftState, showSidebarLeft, hideSidebarLeft } = sidebarLeft;
    const { sidebarRightState, showSidebarRight, hideSidebarRight } = sidebarRight;


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