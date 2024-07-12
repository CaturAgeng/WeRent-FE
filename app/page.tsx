'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
    const router = useRouter();

    const handleAddClick = () => {
        router.push('/rate'); 
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <button
                onClick={handleAddClick}
                className="bg-green-500 text-white p-2 rounded-md"
            >
                Add
            </button>
        </div>
    );
};

export default Home;
