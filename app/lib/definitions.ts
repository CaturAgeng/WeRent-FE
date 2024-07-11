export type Product = {
    id: string;
    name: string;
    image: string[];
    size: string[];
    rating: number;
    review: number;
    rentPrice: string;
    rentDays: number;
};

export type Customer = {
    id: string;
    rating: number;
}