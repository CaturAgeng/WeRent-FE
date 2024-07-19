import { axiosInstance } from 'api/axiosClients';
import { AxiosError } from 'axios';

export async function viewProductRequest(productId: string) {
    try {
        console.log(`Post product data `);
        
        // const productRequest = axiosInstance.post(`/product/${productId}`);

        // const [productResponse] = await Promise.all([productRequest]);

        // const product = productResponse.data;

        // return { product };
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