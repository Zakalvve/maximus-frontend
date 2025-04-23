import { Account } from "./accounts";
import { SeriesParams } from "./series";

export interface ProjectionQuery {
    projectionId: string
}

export interface ProjectionSeriesParams extends ProjectionQuery, SeriesParams { }

export interface Projection {
    id: string
    name: string
    description: string
    iterations: number
    meanIteration: number
    accounts?: Account[]
    series: string[]
}