export type Review = {
    // [x: string]: ReactNode;
    description: any;
    id: number;
    userImage?: string;
    rating: number;
    date: string;
    height: number;
    weight: number;
    measurements: string;
    review: string;
    helpful: number;
    productImage?: string;
}

export type ReviewCardProps = {
    id: number;
    description: any;
    reviewId: number;
    userImage?: string;
    rating: number;
    date: string;
    height: number;
    weight: number;
    fit_scale: string;
    review: string;
    helpful: number;
    productImage?: string;
  }

export type ReviewSummaryProps = {
    reviews: Review[];
    setFilteredReviews: (reviews: Review[]) => void;
  }