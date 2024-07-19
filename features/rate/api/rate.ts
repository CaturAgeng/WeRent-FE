import { axiosInstance } from "api/axiosClients";
import { AxiosError } from "axios";
import { ratingRequestProps } from "../type";

export async function submitRating(ratingData: ratingRequestProps): Promise<void> {
    try {
        const response = await axiosInstance.post('/rating/add', ratingData);
        console.log('Rating saved:', response.data);
        // Handle any success scenarios here if needed
    } catch (error) {
        if (error instanceof AxiosError) {
            const { response } = error;
            // throw new Error(response?.data?.error?.message || "Failed to save rating.");
        }
        // throw new Error("Unexpected Error");
    }
}
