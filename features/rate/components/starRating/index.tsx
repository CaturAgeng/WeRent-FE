'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface StarRatingProps {
    userId: number;
    productId: number;
    value: number; 
    onChange: React.Dispatch<React.SetStateAction<number>>; 
    required?: boolean;
    showErrors?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({ userId, productId, value, onChange, required = false, showErrors = false }) => {
    const [hover, setHover] = useState<number>(0);

    const handleRating = (starValue: number) => {
        onChange(starValue);
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            userId,
            productId,
            value: starValue
        }).then(response => {
            console.log('Rating saved:', response.data);
        }).catch(error => {
            console.error("Error saving rating:", error);
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
        </div>
    );
};

export default StarRating;
