import { UserType } from "../dataTypes/user";

export interface UserContextTypes {
    users: UserType[],
    currentUser: UserType,
    changeUsers: (users: UserType[]) => void,
    login: (user: UserType) => void,
    logout: () => void,
    registerUser: (user: UserType) => void
}
export type initialValueType = {
    users: UserType[],
    currentUser: UserType
}