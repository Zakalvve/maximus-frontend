import { ISOString } from "./api"

export interface SeriesParams {
    series: string[]
    iterations: number[]
    from?: ISOString
    to?: ISOString
}

export interface Series {
    id: string
    metric: string
    points: SeriesPoint[]
}

export interface SeriesPoint {
    id: string
    seriesId: string
    date: ISOString
    iteration: number
    value: number
}