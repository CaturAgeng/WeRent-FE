'use client';

import React, { useState } from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/outline'; // Updated import for Heroicons v2
import { ReviewCardProps } from '@/features/review/type';

const defaultUserImage = "https://static.vecteezy.com/system/resources/previews/024/983/914/original/simple-user-default-icon-free-png.png";
const defaultProductImage = "https://cdn-icons-png.flaticon.com/512/1785/1785255.png";

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likes, setLikes] = useState(review.helpful);
  const toggleReadMore = () => setIsExpanded(!isExpanded);
  const handleLike = () => setLikes(likes + 1);

  const truncatedReview = `${review.review.slice(0, 100)}...`;

  const userImageSrc = review.userImage || defaultUserImage;
  const productImageSrc = review.productImage || defaultProductImage;

  return (
    <div key={review.id} className="p-4 border-b">
      <div className="flex items-start mb-2">
        <img
          src={userImageSrc}
          alt="User"
          className="w-10 h-10 rounded-full mr-4"
          onError={(e) => (e.currentTarget.src = defaultUserImage)}
        />
        <div className="flex flex-col">
          <div className="flex items-center mb-1">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-yellow-400">★</span>
            ))}
          </div>
          <div className="text-sm text-gray-600">
            {`${review.height} CM  ${review.weight} KG  ${review.measurements}`}
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-600 mb-2 flex justify-between">
        <div>
          {[...Array(5)].map((_, index) => (
            <span key={index} className={`text-yellow-400 ${index < review.rating ? '★' : '☆'}`}></span>
          ))}
        </div>
        <div className="flex items-center">
          <HandThumbUpIcon className="w-5 h-5 text-gray-400 cursor-pointer" onClick={handleLike} />
          <span className="ml-1 text-gray-600">{likes}</span>
        </div>
      </div>
      <p className="text-gray-700 mb-2">
        {isExpanded ? review.review : truncatedReview}
        {!isExpanded && (
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
        {review.date}
      </div>
    </div>
  );
};

export default ReviewCard;
