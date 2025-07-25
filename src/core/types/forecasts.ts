import { ISOString, MutationData, QueryParams } from "./api"

export interface GetForecastParams extends QueryParams {
    userId: string
}

export interface PromoteForecastData extends MutationData {
    userId: string
}

export interface CreateForecastData extends MutationData {
    userId: string
    name: string
    notes: string
    forecastSettings: ForecastSettings
}

interface ForecastSettings {
    logProgress: boolean
    startDate: ISOString
    monthsToSimulate: number
    taxProfile: UserTaxProfileSettings
    monteCarlo: MonteCarloSettings
    accounts: AccountSettings[]
    operations: OperationSettings[]
}

interface UserTaxProfileSettings {
    rebateAccountId: string
    predictedTaxBand: TaxBand
    predictedYearlyIncome: number
    age: number
    crystallizedPotValue: number
    initialTaxFreeWithdrawn: number
}

type TaxBand =
    | 'StartingRate'
    | 'BasicRate'
    | 'HigherRate'
    | 'AdditionalRate'

interface MonteCarloSettings {
    enabled: boolean
    iterations: number
    defaultAccountSettings: MonteCarloAccountSettings
    seed?: number
}

interface MonteCarloAccountSettings {
    stdDeviation: number
}

interface AccountSettings {
    accountId: string
    type: AccountType
    name: string
    initialBalance: number
    annualInterestRate: number
    monteCarloAccountSettings?: MonteCarloAccountSettings
    fallbackAccountId?: string
}

type AccountType =
    | 'Current'
    | 'StocksAndShares'
    | 'Pension'
    | 'Isa'

interface OperationSettings {
    type: string
}

export interface FixedStandingOrderOperationSettings extends OperationSettings {
    type: 'FixedStandingOrderOperationSettings'
    fromAccount: string
    toAccount: string
    amount: number
    interval: number
}