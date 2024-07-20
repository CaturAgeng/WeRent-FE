import axios from "axios";
import { token } from "config";
import Cookies from "js-cookie";


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const axiosInstance = axios.create({
    baseURL : baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
});

// console.log("Initial axiosInstance configuration:",axiosInstance)

axiosInstance.interceptors.request.use(
    (config) => {
        const auth = Cookies.get(token);
        // console.log("Auth token from cookies:", auth);

        if (auth) { 
            config.headers.Authorization = `Bearer ${auth}`;
        }  
        else {
           // console.warn("token not found")
        } 
        return config;

    },
    (error) => {
       // console.error("Request error:", error);
        return Promise.reject(error);
    }
)