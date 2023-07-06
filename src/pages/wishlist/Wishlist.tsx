import { useCartWishContext } from "../../hooks/useCartWish"
import { ImBin } from "react-icons/im";
import "./wishlist.css"
import { CartProduct, UserType } from "../../types/dataTypes/user";
import { UnavailableProducts } from "../../components";

export const Wishlist = () => {
    const { wishlist, changeWishlist } = useCartWishContext();

    const handleRemoveProduct = (id: string) => {
        const userLS = localStorage.getItem("user") as string;
        const activeUser: UserType = JSON.parse(userLS);
        const activeWishlist: CartProduct[] = activeUser.wishlist;
        const searchedProductIndex = wishlist.findIndex((product) => product.id === id);
        if (searchedProductIndex !== -1) activeWishlist.splice(searchedProductIndex, 1);
        changeWishlist(activeWishlist);
        activeUser.wishlist = activeWishlist;
        localStorage.setItem("user", JSON.stringify(activeUser))
    }

    return (
        <section className="wishlist-container">
            {wishlist.length === 0 && <UnavailableProducts />}
            {wishlist.length > 0 && wishlist.map((product) => (
                <div className="wishlist-entry-container">
                    <img src={`/src/assets/img/${product.img}`} className="wishlist-img" />
                    <div className="wishlist-info">
                        <h4 className="wishlist-info-h4">{product.title}</h4>
                        <p>{product.price} &euro;</p>
                    </div>
                    <div className="wishlist-remove">
                        <ImBin className="wishlist-remove-icon" onClick={() => handleRemoveProduct(product.id)} />
                    </div>
                </div>
            ))}
        </section>
    )
}
