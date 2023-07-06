import { addUser } from "../api/FetchData";
import { initialValueType } from "../types/contextTypes/userContextTypes";
import { UserType } from "../types/dataTypes/user";

export const initialUser: UserType = {
    id: "user0",
    email: "guest@guest.com",
    name: "guest",
    password: "Guest1234.",
    cart: [],
    wishlist: []
}

type UserActionType =
    | { type: "CHANGE_USERS", payload: UserType[] }
    | { type: "LOGIN", payload: UserType }
    | { type: "LOGOUT", payload: UserType }
    | { type: "REGISTER", payload: UserType }

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
                currentUser: action.payload
            }
        case "REGISTER": {
            addUser(action.payload);
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        }
        default: return state;
    }
}
