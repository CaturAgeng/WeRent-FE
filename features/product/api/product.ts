import { axiosInstance } from 'api/axiosClients';
import { AxiosError } from 'axios';

export async function viewProductRequest(productId: string) {
    try {
        const productRequest = axiosInstance.get(`/product/${productId}`);
        // const customerRequest = axiosInstance.get(`/customer/${customerId}`);

        const [productResponse] = await Promise.all([productRequest]);

        const product = productResponse.data.data;
        // const customer = customerResponse.data;

        return {product};
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