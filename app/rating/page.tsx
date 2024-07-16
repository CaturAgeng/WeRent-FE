import React from "react";
import RateWrapper from "@/features/rate/components/rateWrapper";

const RatePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <RateWrapper userId={0} productId={0} />
        </div>
    );
};

export default RatePage;