import { useContext } from "react"
import { userContext } from "../context/UserContextProvider"

export const useUsersContext = () => {
    return useContext(userContext);
}