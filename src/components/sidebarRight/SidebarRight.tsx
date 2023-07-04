import { FC, useEffect, useState } from "react"
import { sideBarRightProps } from "../../types/propTypes"
import { AiOutlineClose } from "react-icons/ai";
import "./sidebarRight.css"
import { productType } from "../../types/product";
import { getData } from "../../api/FetchProducts";


export const SidebarRight: FC<sideBarRightProps> = ({ showSidebarRight, changeSidebarRightState }) => {
    const [filterProducts, setFilterProducts] = useState<string>("")
    const [products, setProducts] = useState<productType[]>([]);
    const showSidebar = showSidebarRight.toString();

    const handleFilterInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setFilterProducts(target.value)
    }

    useEffect(() => {
        (async function getProducts() {
            const fetchProducts = await getData("products");
            setProducts(fetchProducts)
        })();
    }, [])

    return (
        <div className={`sidebar-right sidebar-right-${showSidebar}`}>
            <AiOutlineClose className="sidebar_icon-close sidebar-right_icon-close" onClick={changeSidebarRightState} />
            <div className="search-product_container">
                <label htmlFor="input-search" className="sidebar-right_label-search">Search products by name:</label>
                <input type="text" className="sidebar-right_input-search" id="input-search"
                    value={filterProducts}
                    onChange={handleFilterInput}
                    name="input-search"
                    placeholder="add product name"
                />
            </div>
        </div>
    )
}
