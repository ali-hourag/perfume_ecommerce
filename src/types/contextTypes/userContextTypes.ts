import { UserTypes } from "../dataTypes/user";

export interface UserContextTypes {
    users: UserTypes[],
    currentUser: UserTypes,
    changeUsers: (users: UserTypes[]) => void,
    login: (user: UserTypes) => void,
    logout: () => void,
    register: (user: UserTypes) => void
}
export type initialValueType = {
    users: UserTypes[],
    currentUser: UserTypes
}