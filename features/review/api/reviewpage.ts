import { axiosInstance } from 'api/axiosClients';
import { AxiosError } from 'axios';

export async function fetchProductReviews(productId: string) {
    try {
    console.log(`Requesting review data for reviewId: ${productId}`);
    
    const response = await axiosInstance.get(`https://werent-production.up.railway.app/product/${productId}`);
    return response.data.data.reviews;
    } catch (error) {
        throw new Error('Error fetching product reviews');
    }
}
