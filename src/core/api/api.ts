import axios from "axios";
import qs from "qs"
import { isDevelopment } from "../lib/utils";

const protocol = isDevelopment() ? `https://` : `http://`
const baseURL = protocol + 'localhost:8001/api/'

axios.defaults.baseURL = baseURL;

const api = axios.create({
    baseURL,
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
  });

export default api;