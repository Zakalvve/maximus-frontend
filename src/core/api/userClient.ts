import { AxiosResponse } from "axios";
import { CreateUserData } from "../types/users";
import api from "./api";
import { useTanstackMutation } from "../hooks/useTanstackMutation";

const createUser = (data: CreateUserData): Promise<AxiosResponse> => {
    return api.post(`users`, data);
}

const userClient = {
    useCreateUser: () => useTanstackMutation(createUser)
}

export default userClient;