import React from 'react';

interface RatingProps {
  averageRating: number;
}

const Rating: React.FC<RatingProps> = ({ averageRating }) => {
  return (
    <div className="flex items-center">
      <div className="text-3xl font-bold mr-4">{averageRating.toFixed(1)}</div>
      <div className="flex text-4xl">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < Math.round(averageRating) ? 'text-yellow-500' : 'text-gray-300'}>★</span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
