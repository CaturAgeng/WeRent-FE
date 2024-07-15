import React from 'react';
import { Review } from './types';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className="mt-4">
      {reviews.map(review => (
        <div key={review.review_id} className="border-b py-4">
          <div>{review.user}</div>
          <div>{review.comment}</div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
