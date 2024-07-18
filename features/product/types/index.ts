export type Product = {
    product_id: string;
    product_name: string;
    image: string[];
    sizes: string[];
    rating: number;
    review: number;
    rentPrice: number;
    rentDays: number;
};

export type Customer = {
    id: string;
    rating: number;
}