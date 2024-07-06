'use client'

import React from "react";

export default function StarRating() {
    const [rating, setRating] = React.useState<number>(0);

    function handleClick(index: number) {
        setRating(index);
    }
    
    return (
        <div className="flex justify-end gap-1">
            <div className="flex">
                {[...Array(5)].map((_, index) => ( 
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor"
                    className={`w-6 h-6 cursor-pointer ${index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                    onClick={() => {
                        handleClick(index + 1);
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
    );
}

