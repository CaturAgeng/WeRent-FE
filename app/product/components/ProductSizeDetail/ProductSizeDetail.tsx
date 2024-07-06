'use client'
import React from "react";

interface ProductSizeDetailProps {
    sizes: { size: string; bustSize: string; lengthSize: string }[];
}

export default function ProductSizeDetail({ sizes }: ProductSizeDetailProps) {
    return (
        <div>
            {sizes.map((sizeDetail, index) => (
                <div key={index} className="flex flex-auto w-full justify-evenly py-2 border-x border-b border-gray-500">
                    <p className="text-xs w-1/3 font-normal text-center">{sizeDetail.size}</p>
                    <p className="text-xs w-1/3 font-normal text-center">{sizeDetail.bustSize} cm</p>
                    <p className="text-xs w-1/3 font-normal text-center">{sizeDetail.lengthSize} cm</p>
                </div>
            ))}
        </div>
    );
}

