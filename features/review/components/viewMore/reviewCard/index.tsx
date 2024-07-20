'use client';

import React, { useState, useEffect  } from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import { StarRating } from '@/features/product';

const defaultUserImage = "https://static.vecteezy.com/system/resources/previews/024/983/914/original/simple-user-default-icon-free-png.png";
const defaultProductImage = "https://cdn-icons-png.flaticon.com/512/1785/1785255.png";

const ReviewCard: React.FC<{ review: any }> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likes, setLikes] = useState(review.helpful || 0);
  const toggleReadMore = () => setIsExpanded(!isExpanded);
  const handleLike = () => setLikes(likes + 1);

  if (!review) {
    return <div className="p-4 border-b">Review data is not available</div>;
  }

  const truncatedReview = `${review.description.slice(0, 100)}...`;

  const userImageSrc = review.userImage || defaultUserImage;
  const productImageSrc = review.productImage || defaultProductImage;

  return (
    <div key={review.review_id} className="p-4 border-b">
      <div className="flex items-start mb-2">
        <img
          src={userImageSrc}
          alt="User"
          className="w-10 h-10 rounded-full mr-4"
          onError={(e) => (e.currentTarget.src = defaultUserImage)}
        />
        
        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-col gap-2">
            <StarRating rate={review.ratingValue} size="w-4 h-4" gap="gap-0.5" />
            <p className="text-sm text-gray-400">{review.fit_scale}</p>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-gray-600 mb-2 flex justify-end">
        <div className="flex items-center">
          <HandThumbUpIcon className="w-5 h-5 text-gray-400 cursor-pointer" onClick={handleLike} />
          <span className="ml-1 text-gray-600">{likes}</span>
        </div>
      </div>

      <p className="text-gray-700 mb-2">
        {isExpanded ? review.description : truncatedReview}
        {!isExpanded && review.description.length > 100 && (
          <button
            onClick={toggleReadMore}
            className="text-blue-500 ml-1"
          >
            {'Read more >'}
          </button>
        )}
      </p>
      
      <div>
        <img
          src={productImageSrc}
          alt="Product"
          className="mt-2 w-16 h-16 rounded-lg"
          onError={(e) => (e.currentTarget.src = defaultProductImage)}
        />
      </div>
      <div className="text-sm text-gray-600 mt-2">
        {new Date(review.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default ReviewCard;