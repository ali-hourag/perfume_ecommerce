import { useContext } from "react"
import { filterContext } from "../context/FilterProvider"


export const useFilterContext = () => {
    return useContext(filterContext);
}