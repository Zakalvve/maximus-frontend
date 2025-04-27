import { useTanstackMutation } from "../hooks/useTanstackMutation";
import { useTanstackQuery } from "../hooks/useTanstackQuery";
import { CreateForecastData, GetForecastParams, PromoteForecastData } from "../types/forecasts";
import api from "./api";

const getForecast = (params: GetForecastParams) => {
    return api.get(`forecasts/${params.userId}`);
}

const promoteForecast = (data: PromoteForecastData) => {
    return api.patch(`forecasts/promote/${data.userId}`)
}

const createForecast = (data: CreateForecastData) => {
    return api.post(`forecasts/simulate`, data)
}

const forecastClient = {
    useGetForecast: (params: GetForecastParams) => useTanstackQuery(getForecast, ['get-forecast'], params),
    usePromoteForecast: () => useTanstackMutation(promoteForecast),
    useCreateForecast: () => useTanstackMutation(createForecast)
}

export default forecastClient;