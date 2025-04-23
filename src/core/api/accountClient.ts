import { useTanstackQuery } from "../hooks/useTanstackQuery";
import { Account, AccountQuery, AccountSeriesParams, AccountTransactionsParams } from "../types/accounts";
import { ApiResponse } from "../types/api";
import { Series } from "../types/series";
import { Transaction } from "../types/transactions";
import api from "./api";

const getAccounts = (): ApiResponse<Account[]> => {
    return api.get('accounts')
}

const getAccount = (query: AccountQuery): ApiResponse<Account> => {
    return api.get(`accounts/${query.accountId}`)
}

const getAccountTransactions = (query: AccountTransactionsParams): ApiResponse<Transaction[]> => {
    const { accountId, ...params } = query
    return api.get(`accounts/${accountId}/transactions`, { params })
}

const getAccountSeries = (query: AccountSeriesParams): ApiResponse<Record<string, Series>> => {
    const { accountId, ...params } = query
    return api.get(`accounts/${accountId}/series`, { params })
}

const accountClient = {
    getAccounts: () => useTanstackQuery(getAccounts, ['get-accounts']),
    getAccount: (query: AccountQuery) => useTanstackQuery(getAccount, ['get-account'], query),
    getAccountTransactions: (query: AccountTransactionsParams) => useTanstackQuery(getAccountTransactions, ['get-account-transactions'], query),
    getAccountSeries: (query: AccountSeriesParams) => useTanstackQuery(getAccountSeries, ['get-account-series'], query)
}

export default accountClient;