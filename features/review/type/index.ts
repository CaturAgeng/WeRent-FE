export type Review = {
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
    review: Review;
  }

export type ReviewSummaryProps = {
    reviews: Review[];
    setFilteredReviews: (reviews: Review[]) => void;
  }