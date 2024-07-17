'use client'

import { token } from "config";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';

export default function SearchNavigation() {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter()

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Search Query:', searchQuery);
    };

    const handleLogout = () => {

        Cookies.remove(token)
        router.push('/login')

        // Logic for handling logout, e.g., clearing authentication tokens, redirecting to login page, etc.
        console.log('Logout button clicked');
    };

    return (
        <div className="w-full max-w-md h-24 flex-col bg-white border-b-2 z-50">
            <div className="px-4 pt-8 w-full h-full flex justify-between items-center">
                <div className="w-8 h-8 bg-black rounded-full">
                    {/* CUSTOMER PROFILE PICTURE */}
                </div>
                
                {/* SEARCH BUTTON */}
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search for products"
                        className="px-8 py-1 border text-sm border-gray-300 rounded-l-md"
                    />
                    <button
                        type="submit"
                        className="px-4 py-1 text-sm bg-custom-blue text-white rounded-r-md hover:bg-custom-blue hover:bg-opacity-80"
                    >
                        <svg 
                            width="22px" 
                            height="22px" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" 
                                stroke="white" 
                                stroke-width="2" 
                                stroke-linecap="round" 
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </form>

                {/* LOGOUT BUTTON */}
                <button
                        onClick={handleLogout}
                        className="rounded-full w-8 h-8 flex items-center bg-red-500 cursor-pointer text-white hover:bg-red-600 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500 500"
                            fill="white"
                            strokeWidth={10}
                            stroke="white"
                            xmlSpace="preserve"
                            className="w-5 h-5 ml-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M0,121.05v248.2c0,34.2,27.9,62.1,62.1,62.1h200.6c34.2,0,62.1-27.9,62.1-62.1v-40.2c0-6.8-5.5-12.3-12.3-12.3
                                s-12.3,5.5-12.3,12.3v40.2c0,20.7-16.9,37.6-37.6,37.6H62.1c-20.7,0-37.6-16.9-37.6-37.6v-248.2c0-20.7,16.9-37.6,37.6-37.6h200.6
                                c20.7,0,37.6,16.9,37.6,37.6v40.2c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-40.2c0-34.2-27.9-62.1-62.1-62.1H62.1
                                C27.9,58.95,0,86.75,0,121.05z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round" 
                                d="M385.4,337.65c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l83.9-83.9c4.8-4.8,4.8-12.5,0-17.3l-83.9-83.9 
                                c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l63,63H218.6c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h229.8l-63,63 
                                C380.6,325.15,380.6,332.95,385.4,337.65z"
                            />
                        </svg>
                    </button>
            </div>
        </div>
    );
}
