'use client'
import React, { useState, useEffect, useRef } from "react";

export default function ProductSize() {
    const [selectedSize, setSelectedSize] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        function handleClickOutside(event: { target: any; }) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSizeSelect = (size: React.SetStateAction<string>) => {
        setSelectedSize(size);
        setIsOpen(false);
        console.log(`Selected size: ${size}`);
    }

    return (
        <div className="w-full relative">
            <div className="flex flex-row w-full justify-between">
                <p 
                className="text-xs cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                >
                    {selectedSize || "CHOOSE SIZE"}
                </p>
                <p className="text-xs">VIEW SIZE GUIDE</p>
            </div>

            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute w-24 bg-white border border-gray-200 shadow-lg rounded-md"
                >
                    <ul className="py-1">
                        {["XS", "S", "M", "L", "XL"].map((size) => (
                            <li
                                key={size}
                                className="text-sm cursor-pointer px-4 py-2 hover:bg-gray-300"
                                onClick={() => handleSizeSelect(size)}
                            >
                                {size}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
