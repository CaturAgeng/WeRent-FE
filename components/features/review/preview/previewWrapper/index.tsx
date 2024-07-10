'use client'

import React, { useState } from "react";
import ReviewStar from "../previewStar";
import ReviewPrecentage from "../previewPrecentage";
import Link from 'next/link';

interface ReviewWrapperProps {
    initialSmall: number;
    initialTrueToSize: number;
    initialLarge: number;
}

const PreviewWrapper: React.FC<ReviewWrapperProps> = ({initialSmall, initialTrueToSize, initialLarge}) => {
    const [small, setSmall] = useState(initialSmall);
    const [trueToSize, setTrueToSize] = useState(initialTrueToSize);
    const [large, setLarge] = useState(initialLarge);
    const [rating, setRating] = useState(0);
    const [userCount, setUserCount] = useState(0);

    const totalReviews = small + trueToSize + large;

    const getPrecentage = (value: number) => (value / totalReviews) * 100;

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);

        if (newRating <= 2) {
            setSmall(small + 1);
        } else if (newRating === 3) {
            setLarge(large + 1);
        } else {
            setTrueToSize(trueToSize + 1);
        }

        setUserCount(userCount + 1);
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <div className="mt-4">
                <span className="text-black text-xl">REVIEWS ({userCount})</span>
            </div>
            <div className="flex justify-between">
                <ReviewStar rating={rating} onRatingChange={handleRatingChange} />
                <Link href='/reviews' className="mt-2 text-green-900 hover:text-gray-500 cursor-pointer">
                    View More &gt;
                </Link>
            </div>
            <ReviewPrecentage label="Small" precentage={getPrecentage(small)} />
            <ReviewPrecentage label="True to Size" precentage={getPrecentage(trueToSize)} />
            <ReviewPrecentage label="Large" precentage={getPrecentage(large)} />
        </div>
    );
};

export default PreviewWrapper;