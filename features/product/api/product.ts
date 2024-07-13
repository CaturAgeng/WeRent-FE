import { axiosInstance } from 'api/axiosClients';
import { AxiosError } from 'axios';

export async function viewProductRequest(productId: string, customerId: string) {
    try {
        console.log(`Requesting product data for productId: ${productId} and customerId: ${customerId}`);
        
        const productRequest = axiosInstance.get(`/product/${productId}`);
        const customerRequest = axiosInstance.get(`/customer/${customerId}`);

        const [productResponse, customerResponse] = await Promise.all([productRequest, customerRequest]);

        const product = productResponse.data;
        const customer = customerResponse.data;

        return { product, customer };
    } catch (error) {
        console.error('Error in viewProductRequest:', error);
        if (error instanceof AxiosError) {
            const { response } = error;
            console.error('AxiosError response:', response);
            throw new Error(response?.data?.error || 'An error occurred while fetching data');
        }
        throw new Error('Unexpected Error');
    }
}