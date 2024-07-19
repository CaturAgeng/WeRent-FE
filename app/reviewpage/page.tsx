'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import ReviewSummary from '@/features/review/components/viewMore/reviewSummary';
import ReviewCard from '@/features/review/components/viewMore/reviewCard';
import { fetchProductReviews } from '@/features/review/api/reviewpage';

interface Review {
  review_id: number;
  user_id: number;
  description: string;
  fit_scale: string;
  createdAt: string;
  helpful: number;
  userImage?: string;
  productImage?: string;
}

interface ReviewSummary {
  setFilteredReviews: (reviews: Review[]) => void; // Function to update filtered reviews
}


const ReviewPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Replace with the actual product ID you want to use
  const productId = '1';

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchProductReviews(productId);
        setReviews(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    getReviews();
  }, [productId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Head>
        <title>Reviews</title>
      </Head>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-2xl">
        <ReviewSummary reviews={[]} />
        <div className="border-t">
          {reviews.map(review => (
            <ReviewCard key={review.review_id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
