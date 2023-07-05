import { initialValueType } from "../types/contextTypes/userContextTypes";
import { UserTypes } from "../types/dataTypes/user";

export const initialUser: UserTypes = {
    email: "guest@guest.com",
    name: "guest",
    password: "1234",
    cart: [],
    wishlist: []
}

type UserActionType =
    | { type: "CHANGE_USERS", payload: UserTypes[] }
    | { type: "LOGIN", payload: UserTypes }
    | { type: "LOGOUT" }
    | { type: "REGISTER", payload: UserTypes }

export const userReducer = (state: initialValueType, action: UserActionType) => {
    switch (action.type) {
        case "CHANGE_USERS":
            return {
                ...state,
                users: action.payload
            }
        case "LOGIN":
            return {
                ...state,
                currentUser: action.payload
            }
        case "LOGOUT":
            return {
                ...state,
                currentUser: initialUser
            }
        case "REGISTER": {
            addUser(action.payload)
            return state
        }
        default: return state;
    }
}

const addUser = (user: UserTypes) => {
    //Hacer un PATCH para añadir el usuario a la API
}