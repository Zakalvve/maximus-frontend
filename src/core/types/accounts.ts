import { QueryParams } from "./api"
import { SeriesParams } from "./series"
import { TransactionParams } from "./transactions"

export interface AccountQuery extends QueryParams {
    accountId: string
}

export interface AccountTransactionsParams extends AccountQuery, TransactionParams { }
export interface AccountSeriesParams extends AccountQuery, SeriesParams { }

export interface Account {
    id: string
    projectionId: string
    name: string
    type: string
    series: string[]
}