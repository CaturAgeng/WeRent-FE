import { axiosInstance } from "./axiosClients";
import { dummyAxiosInstance } from "./dummy-axiosClient";

const useDummyAPI = process.env.NEXT_PUBLIC_USE_DUMMY_API === "true";

export const apiClient = useDummyAPI? dummyAxiosInstance : axiosInstance;