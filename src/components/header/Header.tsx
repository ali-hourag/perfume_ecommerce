import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './header.css'
import { useState } from 'react';

export const Header = () => {
    const [sideBarWidth, setSideBarWidth] = useState<string>("0");
    const handleMenuIcon = () => {
        if (sideBarWidth === "0") setSideBarWidth("75")
        else setSideBarWidth("0")
    }
    const handleSidebarIconClose = () => {
        setSideBarWidth("0")
    }
    return (
        <>
            <header className="header">
                <AiOutlineMenu class="header_icon-menu" onClick={handleMenuIcon} />
                <img src="src/assets/img/sunnah-musk.avif" />
                <AiOutlineSearch class="header_icon-search" />
                <AiOutlineShoppingCart class="header_icon-cart" />
            </header>
            <div className="sidebar-left" style={{ width: `${sideBarWidth}vw` }}>
                <AiOutlineClose className="sidebar_icon-close" onClick={handleSidebarIconClose} />
            </div>
        </>
    )
}