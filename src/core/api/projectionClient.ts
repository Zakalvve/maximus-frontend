import { useTanstackMutation } from "../hooks/useTanstackMutation"
import { useTanstackQuery } from "../hooks/useTanstackQuery"
import { Account } from "../types/accounts"
import { ApiResponse } from "../types/api"
import { Projection, ProjectionQuery, ProjectionSeriesParams } from "../types/projections"
import { Series } from "../types/series"
import api from "./api"

const getProjections = (): ApiResponse<Projection[]> => {
    return api.get('projections')
  }
  
  const getProjection = (query: ProjectionQuery): ApiResponse<Projection> => {
    return api.get(`projections/${query.projectionId}`)
  }
  
  const getProjectionAccounts = (query: ProjectionQuery): ApiResponse<Account[]> => {
    return api.get(`projections/${query.projectionId}/accounts`)
  }
  
  const getProjectionSeries = (query: ProjectionSeriesParams): ApiResponse<Record<string, Series>> => {
    const { projectionId, from, to, ...params } = query
    return api.get(`projections/${projectionId}/series`, { params })
  }
  
  const deleteProjection = (query: ProjectionQuery): ApiResponse<void> => {
    return api.delete(`projections/${query.projectionId}`)
  }

const projectionClient = {
    getProjections:  () => useTanstackQuery(getProjections, ['get-projections']),
    getProjection: (query: ProjectionQuery) => useTanstackQuery(getProjection, ['get-projection'], query),
    getProjectionAccounts:  (query: ProjectionQuery) => useTanstackQuery(getProjectionAccounts, ['get-projection-accounts'], query),
    getProjectionSeries:  (query: ProjectionSeriesParams) => useTanstackQuery(getProjectionSeries, ['get-projection-series'], query),
    deleteProjection: () =>  useTanstackMutation(deleteProjection)
}

export default projectionClient;