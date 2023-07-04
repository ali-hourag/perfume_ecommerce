import { FC, useEffect, useState } from "react"
import { sideBarRightProps } from "../../types/propTypes"
import { AiOutlineClose } from "react-icons/ai";
import "./sidebarRight.css"
import { useProductsContext } from "../../hooks/useProducts";


export const SidebarRight: FC<sideBarRightProps> = ({ showSidebarRight, changeSidebarRightState }) => {
    const { products } = useProductsContext();
    const [filterProducts, setFilterProducts] = useState<string>("")
    const [foundProducts, setFoundProducts] = useState<boolean>(false);
    const showSidebar = showSidebarRight.toString();


    const handleFilterInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setFilterProducts(target.value)
        if (products && products.filter(({ title }) => title.toUpperCase().includes(target.value.toUpperCase())).length !== 0) {
            setFoundProducts(true);
        } else setFoundProducts(false);
    }

    //al clickarles nos llevan a la página de producto
    //Crear un contexto con productos y quitar el useEffect de aquí
    //crear contexto para filtrado
    useEffect(() => {
        setFilterProducts("");
        setFoundProducts(false);
    }, [showSidebarRight])


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
            {filterProducts && foundProducts ?
                <p className="sidebar-right_search-result">Search results: </p> :
                <p className="sidebar-right_search-result">No products matching your selection.</p>}

            <div className="sidebar-right_results">
                <ul className="resuts-products-container">
                    {
                        filterProducts && products && products.filter(({ title }) => {
                            const productTitle = title.toUpperCase();
                            return productTitle.includes(filterProducts.toUpperCase());
                        }).map(({ id, img, title, price }) => {
                            return (
                                <li key={id} className="results-product-card">
                                    <img src={`/src/assets/img/${img}`} className="product-card_img" />
                                    <div className="product-card_info">
                                        <h4>{title}</h4>
                                        <p className="product-card_info-p">{price}&euro;</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        </div>
    )
}
