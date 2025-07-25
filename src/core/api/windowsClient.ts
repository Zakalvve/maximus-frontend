import { AxiosResponse } from "axios";
import api from "./api";

const minimize = (): Promise<AxiosResponse> => {
    return api.patch(`windows/minimize`);
}

const toggleMaximized = (): Promise<AxiosResponse> => {
    return api.patch(`windows/toggle-maximized`);
}

const close = (): Promise<AxiosResponse> => {
    return api.patch(`windows/close`);
}

const windowsClient = {
    minimize,
    toggleMaximized,
    close
}

export default windowsClient;