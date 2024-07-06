'use client'

import React from "react";

export default function StarRating() {
    const [rating, setRating] = React.useState<number>(0);
    const [review, setReview] = React.useState<number>(0);
    const [hasRated, setHasRated] = React.useState<boolean>(false);

    function handleClick(index: number) {
        // star rating
        const newRating = index + 1
        setRating(newRating);

        // review counter
        if (!hasRated) {
            setReview(prev => prev + 1);
            setHasRated(true);
        }
    }
    
    return (
        <div className="flex flex-row w-full gap-6 py-4 items-center">
            <div className="flex justify-center gap-1">
                <div className="flex">
                    {/* SELECTING THE STAR RATING OF THE PRODUCT */}
                    {[...Array(5)].map((_, index) => ( 
                        <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg" 
                        fill={index < rating ? "currentColor" : "none"} 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor"
                        className={`w-6 h-6 cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        onClick={() => {
                            handleClick(index);
                            console.log("star clicked");
                        }}
                        >
                            <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" >
                            </path>
                        </svg>
                    ))}
                </div>
            </div>
            <p className="text-xs text-gray-500">{review} REVIEWS</p>
        </div>
        
    );
}

