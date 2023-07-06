import { createContext, useReducer } from "react"
import { UserType } from "../types/dataTypes/user"
import { UserContextTypes, initialValueType } from "../types/contextTypes/userContextTypes"
import { initialUser, userReducer } from "./actions"



const initialValue: initialValueType = {
    users: [],
    currentUser: initialUser,
}
export const userContext = createContext<UserContextTypes>({
    users: [],
    currentUser: initialUser,
    changeUsers: () => { },
    login: () => { },
    logout: () => { },
    registerUser: () => { }
})


export const UserContextProvider = ({ ...props }) => {
    const [userInfo, dispatch] = useReducer(userReducer, initialValue);
    const users = userInfo.users;
    const currentUser = userInfo.currentUser;
    const changeUsers = (users: UserType[]) => {
        dispatch({
            type: "CHANGE_USERS",
            payload: users
        });
    }
    const login = (user: UserType) => {
        dispatch({
            type: "LOGIN",
            payload: user
        })
    }
    const logout = (user: UserType = users[0]) => {
        dispatch({
            type: "LOGOUT",
            payload: user
        })
    }
    const registerUser = (newUser: UserType) => {
        dispatch({
            type: "REGISTER",
            payload: newUser
        })
    }
    return (
        <userContext.Provider value={{ users, currentUser, changeUsers, login, logout, registerUser }} >
            {props.children}
        </userContext.Provider>
    )
}
