'use client'

import React, { useState } from 'react';
import { starRatingProps, ratingRequestProps, submitRating } from 'features/rate';

const StarRating: React.FC<starRatingProps> = ({ userId, productId, value, onChange, required = false, showErrors = false }) => {
    const [hover, setHover] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    const handleRating = (starValue: number) => {
        onChange(starValue);
        const ratingData: ratingRequestProps = {
            userId,
            productId,
            value: starValue
        };

        submitRating(ratingData)
            .then(() => {
                console.log('Rating submitted successfully!');
                setError(null); // Clear any previous errors on successful save
            })
            .catch(error => {
                console.error('Error submitting rating:', error.message);
                setError(error.message || "Unexpected Error");
            });
    };

    const handleHover = (starValue: number) => {
        setHover(starValue);
    };

    return (
        <div>
            <div className="flex items-center text-4xl space-x-1">
                {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    const isHovered = starValue <= (hover || value);
                    return (
                        <span
                            key={starValue}
                            className={`cursor-pointer ${isHovered ? 'text-yellow-500' : 'text-gray-300'}`}
                            onClick={() => handleRating(starValue)}
                            onMouseEnter={() => handleHover(starValue)}
                            onMouseLeave={() => handleHover(value)}
                        >
                            ★
                        </span>
                    );
                })}
            </div>
            {required && showErrors && value === 0 && <p className='text-red-600 text-sm mt-2'>Rating is required.</p>}
            {error && <p className='text-red-600 text-sm mt-2'>{error}</p>}
        </div>
    );
};

export default StarRating;
