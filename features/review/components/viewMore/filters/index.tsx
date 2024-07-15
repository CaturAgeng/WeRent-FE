'use client'

import React, { useState } from 'react';

interface ReviewFiltersProps {
  onFilterChange: (filter: FilterOptions) => void;
}
interface FilterOptions {
  type: 'all' | 'photos' | 'newest';
  rating: number | null;
}

const ReviewFilters: React.FC<ReviewFiltersProps> = ({ onFilterChange }) => {
  const [filterType, setFilterType] = useState<FilterOptions['type']>('all');
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const handleFilterTypeChange = (type: FilterOptions['type']) => {
    setFilterType(type);
    onFilterChange({ type, rating: filterRating });
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const rating = event.target.value === 'Rating: All' ? null : parseInt(event.target.value);
    setFilterRating(rating);
    onFilterChange({ type: filterType, rating });
  };

  return (
    <div className='mt-4 flex space-x-4'>
      <button
        className={`px-4 py-2 ${filterType === 'all' ? 'bg-yellow-500 text-white' : 'bg-gray-300'} hover:bg-yellow-500 hover:text-white`}
        onClick={() => handleFilterTypeChange('all')}
      >
        All Reviews
      </button>
      <button
        className={`px-4 py-2 ${filterType === 'photos' ? 'bg-yellow-500 text-white' : 'bg-gray-300'} hover:bg-yellow-500 hover:text-white`}
        onClick={() => handleFilterTypeChange('photos')}
      >
        Photos/Videos
      </button>
      <button
        className={`px-4 py-2 ${filterType === 'newest' ? 'bg-yellow-500 text-white' : 'bg-gray-300'} hover:bg-yellow-500 hover:text-white`}
        onClick={() => handleFilterTypeChange('newest')}
      >
        Newest Reviews
      </button>
      <div className='px-4 py-2 bg-gray-300'>
        <label htmlFor="rating-filter" className='mr-2'>Rating:</label>
        <select 
          id="rating-filter" 
          onChange={handleRatingChange} 
          value={filterRating === null ? 'Rating All' : filterRating}
        >
          <option>All</option>
          <option>5 Stars</option>
          <option>4 Stars</option>
          <option>3 Stars</option>
          <option>2 Stars</option>
          <option>1 Stars</option>
        </select>
      </div>
    </div>
  );
};

export default ReviewFilters;
