import { ISOString, MutationData } from "./api"

export interface UserQuery extends MutationData {
    userId: string
}
export interface User {
    firstName: string
    lastName: string
    dateOfBirth: ISOString
}

export interface CreateUserData extends MutationData, User { }