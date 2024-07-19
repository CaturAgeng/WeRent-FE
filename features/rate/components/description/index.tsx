import React from "react";
import { descriptionProps } from "features/rate";

const Description: React.FC<descriptionProps> = ({ description, setDescription }) => {
    return (
        <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            placeholder='Give your review'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        ></textarea>
    );
};

export default Description;