import { ISOString } from "./api"

export interface TransactionParams {
    tags: string[]
    iteration: number
    from?: ISOString
    to?: ISOString
}

export interface Transaction {
    id: string
    accountId: string
    date: ISOString
    iteration: number
    type: string
    accountFrom: string
    accountTo: string
    amount: number
    tags: string[]
}