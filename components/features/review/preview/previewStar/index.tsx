import React from "react";

interface ReviewStarProps {
    rating: number;
    onRatingChange: (rating: number) => void;
}

const ReviewStar: React.FC<ReviewStarProps> = ({ rating, onRatingChange }) => {
    const stars: number[] = [1, 2, 3, 4, 5];

    const handleRatingChange = (star: number) => {
        // Send rating to the backend
        fetch('/api/save-rating', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ rating: star })
        })
        .then(response => {
            if (response.ok) {
                onRatingChange(star); // Update the local state after successfully saving to backend
            } else {
                console.error('Failed to save rating');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="flex items-center">
            <div className="flex space-x-1 text-3xl">
                {stars.map((star) => (
                    <span 
                        key={star} 
                        className={star <= rating ? 'text-yellow-500 cursor-pointer' : 'text-gray-300 cursor-pointer'} 
                        onClick={() => handleRatingChange(star)}
                    >
                        ★
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ReviewStar;
