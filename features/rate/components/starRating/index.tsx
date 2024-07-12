'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface StarRatingProps {
    userId: number;
    productId: number;
    value: number; // Menambahkan properti value dengan tipe number
    onChange: React.Dispatch<React.SetStateAction<number>>; // Menambahkan properti onChange dengan tipe Dispatch<SetStateAction<number>>
}

const StarRating: React.FC<StarRatingProps> = ({ userId, productId, value, onChange }) => {
    const [hover, setHover] = useState<number>(0);

    useEffect(() => {
        // Fetch existing rating from dummy API
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)  // Using userId for demonstration
            .then(response => {
                // Assume the rating value is in response.data.rating
                // Here, we are just simulating a rating value
                onChange(response.data.id % 5 + 1);  // Simulate rating based on post ID for example
            })
            .catch(error => {
                console.error("Error fetching rating:", error);
            });
    }, [userId, productId, onChange]);

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
    );
};

export default StarRating;

