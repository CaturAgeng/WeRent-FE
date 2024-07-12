import { Product, Customer } from './definitions';
import { axiosInstance } from "api/axiosClients";
import { AxiosError } from "axios";

export async function viewProductRequest(productId: string, customerId: string) {
    try {
        console.log(`Requesting product data for productId: ${productId} and customerId: ${customerId}`);
        const { data } = await axiosInstance.get(`/product/${productId}`);
        console.log('Product data received:', data);
        // Assuming the API returns the customer data along with product data
        return data;
    } catch (error) {
        console.error('Error in viewProductRequest:', error);
        if (error instanceof AxiosError) {
            const { response } = error;
            console.error('AxiosError response:', response);
            throw new Error(response?.data?.error?.message || 'An error occurred while fetching product data');
        }
        throw new Error("Unexpected Error");
    }
}