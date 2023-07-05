import { createContext, useReducer } from "react"
import { UserTypes } from "../types/dataTypes/user"
import { UserContextTypes, initialValueType } from "../types/contextTypes/userContextTypes"
import { initialUser, userReducer } from "./actions"



const initialValue: initialValueType = {
    users: [],
    currentUser: initialUser,
}
const userContext = createContext<UserContextTypes>({
    users: [],
    currentUser: initialUser,
    changeUsers: () => { },
    login: () => { },
    logout: () => { },
    register: () => { }
})


export const UserContextProvider = ({ ...props }) => {
    const [userInfo, dispatch] = useReducer(userReducer, initialValue)
    const users = userInfo.users;
    const currentUser = userInfo.currentUser;
    const changeUsers = (users: UserTypes[]) => {
        dispatch({
            type: "CHANGE_USERS",
            payload: users
        });
    }
    const login = (user: UserTypes) => {
        dispatch({
            type: "LOGIN",
            payload: user
        })
    }
    const logout = () => {
        dispatch({
            type: "LOGOUT"
        })
    }
    const register = (user: UserTypes) => {
        dispatch({
            type: "REGISTER",
            payload: user
        })
    }
    return (
        <userContext.Provider value={{ users, currentUser, changeUsers, login, logout, register }} >
            {props.children}
        </userContext.Provider>
    )
}
