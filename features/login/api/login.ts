
import { axiosInstance } from "api/axiosClients";
import { AxiosError } from "axios";
import { loginRequestProps } from "features/login";

export async function loginRequest( payload : loginRequestProps ) {
    try {
        const {data} = await axiosInstance.post("/user/login", payload)
        return data
    } catch(error) {
        if (error instanceof AxiosError) {
            const {response} = error
            throw new Error(response?.data?.error?.message)
        }

        throw new Error("Unexpected Error")
    }
}