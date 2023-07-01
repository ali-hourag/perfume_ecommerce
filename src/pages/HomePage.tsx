import { FC } from "react"
import { Link } from "react-router-dom"


export const HomePage: FC = () => {
    return (
        <>
            <Link to="/products">All products</Link>
        </>
    )
}
