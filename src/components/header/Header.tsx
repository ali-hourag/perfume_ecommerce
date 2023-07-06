import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { FC } from 'react';
import { SidebarLeft } from '.';
import { SidebarRight } from '.';
import { useSidebar } from '../../hooks/useSidebar';
import { useProductsContext } from '../../hooks/useProducts';
import { ProductType } from '../../types/dataTypes/product.d';
import { getData } from '../../api/FetchData';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../../types/dataTypes/user';
import './header.css'
import { useUsersContext } from '../../hooks/useUsers';
import { useCartWishContext } from '../../hooks/useCartWish';

export const Header: FC = () => {
    const [sidebarLeft, sidebarRight] = useSidebar();
    const { sidebarLeftState, showSidebarLeft, hideSidebarLeft } = sidebarLeft;
    const { sidebarRightState, showSidebarRight, hideSidebarRight } = sidebarRight;
    const { products, changeProducts } = useProductsContext();
    const { changeUsers, login } = useUsersContext();
    const { cart, changeCart, changeWishlist } = useCartWishContext();
    const navigate = useNavigate();

    if (products === null) {
        (async function getProducts() {
            const fetchProducts: ProductType[] = await getData("products") as ProductType[];
            const fetchUsers: UserType[] = await getData("users") as UserType[];
            changeProducts(fetchProducts);
            changeUsers(fetchUsers);
            if (localStorage.getItem("user") === null) {
                localStorage.setItem("user", JSON.stringify(fetchUsers[0]));
                login(fetchUsers[0]);
            } else {
                const userLS = localStorage.getItem("user");
                if (userLS !== null) {
                    const userLogged = JSON.parse(userLS);

                    login(userLogged);
                }
            }
            const activeUserLS = localStorage.getItem("user") as string;
            const activeUser = JSON.parse(activeUserLS);

            changeCart(activeUser.cart);
            changeWishlist(activeUser.wishlist);

        })();
    }

    const handleLogoClicked = () => {
        navigate("/");
    }

    const handleCartClicked = () => {
        navigate("cart");
    }

    return (
        <header className="header">
            <AiOutlineMenu className="header_icon-menu" onClick={showSidebarLeft} />
            <img src="/src/assets/img/sunnah-musk.avif" onClick={handleLogoClicked} />
            <AiOutlineSearch className="header_icon-search" onClick={showSidebarRight} />
            <div className="cart-icon-container" onClick={handleCartClicked}>
                <AiOutlineShoppingCart className="header_icon-cart" />
                <span className="icon-number_span header-icon-number_span">{cart.length}</span>
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