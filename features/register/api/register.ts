import { axiosInstance } from "api/axiosClients";
import { AxiosError } from "axios";
import { registerRequestProps } from "features/register";

export async function registerRequest(payload: registerRequestProps) {
    try {
        const {data} = await axiosInstance.post("/user/register", payload )
        return data
    } catch(error) {
        if (error instanceof AxiosError) {
            const {response} = error
            throw new Error(response?.data?.error?.message)
        }
        
        throw new Error("Unexpected Error")
    }
}
