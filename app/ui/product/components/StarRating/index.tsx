'use client'

import React from "react";

interface StarRatingProps {
    review: number;
    rate: number;
}

export default function StarRating({ review, rate }: StarRatingProps) {
    
    return (
        <div className="flex flex-row w-full gap-6 py-4 items-center">
            <div className="flex justify-center gap-1">
                <div className="flex">
                    {[...Array(5)].map((_, index) => ( 
                            <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg" 
                            fill={index < rate ? "currentColor" : "none"} 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor"
                            className={`w-6 h-6 cursor-pointer ${index < rate ? 'text-yellow-500' : 'text-gray-300'}`}
                            >
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" >
                                </path>
                            </svg>
                        ))
                    }
                </div>
            </div>
            <p className="text-xs text-gray-500">{review} REVIEW(S)</p>
        </div>
        
    );
}

