import React from "react";

interface ReviewPrecentageProps {
    label: string;
    precentage: number;
}

const ReviewPrecentage: React.FC<ReviewPrecentageProps> = ({label, precentage}) => {
    return (
        <div className="mt-4">
            <div className="flex justify-between text-sm">
                <span>{label}</span>
                <span>{precentage.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-md mt-1">
                <div 
                    className="bg-green-900 h-2 rounded-md" 
                    style={{ width: `${precentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ReviewPrecentage;