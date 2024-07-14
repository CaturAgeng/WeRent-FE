'use client'
import React from "react";

type SizeDetail = {
    size: string;
    bustSize: string;
    lengthSize: string;
};

interface ProductSizeDetailProps {
    sizes: SizeDetail[];
}

export default function ProductSizeDetail({ sizes }: ProductSizeDetailProps) {
    return (
        <div>
            {sizes.map((detail) => (
                <div key={detail.size} className="flex flex-auto w-full justify-evenly py-2 border-x border-b border-gray-500">
                    <p className="text-xs w-1/3 font-normal text-center">{detail.size}</p>
                    <p className="text-xs w-1/3 font-normal text-center">{detail.bustSize} cm</p>
                    <p className="text-xs w-1/3 font-normal text-center">{detail.lengthSize} cm</p>
                </div>
            ))}
        </div>
    );
}

