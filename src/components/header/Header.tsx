import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import './header.css'
import { useState, FC } from 'react';
import { SidebarLeft } from '../sidebarLeft/SidebarLeft';

export const Header: FC = () => {
    const [sideBarState, setSideBarState] = useState<boolean>(false);

    const handleMenuIcon = (): void => {
        setSideBarState(true);
    }
    const hideSideBarLeft = (): void => {
        setSideBarState(false);
    }

    return (
        <header className="header">
            <AiOutlineMenu class="header_icon-menu" onClick={handleMenuIcon} />
            <img src="src/assets/img/sunnah-musk.avif" />
            <AiOutlineSearch class="header_icon-search" />
            <AiOutlineShoppingCart class="header_icon-cart" />
            <SidebarLeft
                showSideBarLeft={sideBarState}
                changeSideBarLeftState={hideSideBarLeft}
            />
        </header>
    )
}