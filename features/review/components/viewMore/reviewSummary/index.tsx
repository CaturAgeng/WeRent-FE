import React, { useState } from 'react';
import { ReviewSummaryProps } from '@/features/review/type';

const ReviewSummary: React.FC<ReviewSummaryProps> = ({ reviews }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('All Reviews');

  const handleFilter = (rating: number) => {
    const filtered = reviews.filter(review => review.rating === rating);
    // setFilteredReviews(filtered);
    setShowDropdown(false);
    setSelectedFilter(`${rating} Star`);
  };

  const handleButtonClick = (filter: string) => {
    setSelectedFilter(filter);
    if (filter === 'All Reviews') {
      // setFilteredReviews(reviews); // Reset to show all reviews
    }
  };

  return (
    <div className="px-4 py-4">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">Reviews ( )</h1>
      </div>
      <hr className="border-gray-300 mb-4" />
      <div className="mb-4">
        <div className="flex items-center">
          <span className="text-gray-600 text-xl font-bold mr-2">0</span>
          <span className="text-yellow-400 text-xl">☆ ☆ ☆ ☆ ☆</span>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-xl font-bold">Fit Scale</span>
        </div>
        <div className="mt-2 space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
          <div className="w-full sm:w-1/3 text-left">
            <span className="text-sm text-gray-600 block">2%</span>
            <div className="w-full h-2 bg-gray-200 mt-1">
              <div className="bg-green-800 h-full" style={{ width: '2%' }}></div>
            </div>
            <span className="text-sm text-gray-600 mt-1 block text-center">Small</span>
          </div>
          <div className="w-full sm:w-1/3 text-left">
            <span className="text-sm text-gray-600 block">85%</span>
            <div className="w-full h-2 bg-gray-200 mt-1">
              <div className="bg-green-800 h-full" style={{ width: '85%' }}></div>
            </div>
            <span className="text-sm text-gray-600 mt-1 block text-center">True to Size</span>
          </div>
          <div className="w-full sm:w-1/3 text-left">
            <span className="text-sm text-gray-600 block">13%</span>
            <div className="w-full h-2 bg-gray-200 mt-1">
              <div className="bg-green-800 h-full" style={{ width: '13%' }}></div>
            </div>
            <span className="text-sm text-gray-600 mt-1 block text-center">Large</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap justify-between space-y-2 sm:space-y-0 sm:space-x-2 relative">
        <button
          className={`py-3 px-6 w-full sm:w-auto ${selectedFilter === 'All Reviews' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-700'} text-sm`}
          onClick={() => handleButtonClick('All Reviews')}
        >
          All Reviews
        </button>
        <button
          className={`py-3 px-6 w-full sm:w-auto ${selectedFilter === 'Photos/Videos' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-700'} text-sm`}
          onClick={() => handleButtonClick('Photos/Videos')}
        >
          Photos/Videos
        </button>
        <button
          className={`py-3 px-6 w-full sm:w-auto ${selectedFilter === 'Newest Reviews' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-700'} text-sm`}
          onClick={() => handleButtonClick('Newest Reviews')}
        >
          Newest Reviews
        </button>
        <div className="relative w-full sm:w-auto">
          <button
            className={`py-3 px-6 w-full sm:w-auto ${selectedFilter.includes('Star') ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-700'} text-sm`}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {selectedFilter.includes('Star') ? selectedFilter : 'Rating: All'} ▼
          </button>
          {showDropdown && (
            <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => handleFilter(star)}
                >
                  {star} Star
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
