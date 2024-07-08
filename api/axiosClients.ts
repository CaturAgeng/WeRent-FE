import axios from "axios";
import { token } from "config";
import Cookies from "js-cookie";
const baseUrl = process.env.BASE_URL

export const axiosInstance = axios.create({
    baseURL : baseUrl
})

axiosInstance.interceptors.request.use(
    (config) => {
        const auth = Cookies.get(token);

        config.headers.Authorization = `Bearer ${auth}`;
        return config;

    },
    (error) => Promise.reject(error)
)