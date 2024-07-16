'use client'

import { token } from "config";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function TopNavigation() {

    const router = useRouter()
    const handleLogout = () => {

        Cookies.remove(token)
        router.push('/login')

        // Logic for handling logout, e.g., clearing authentication tokens, redirecting to login page, etc.
        console.log('Logout button clicked');
    };
    
    return (
        <div className="w-full h-24 flex-col bg-white border-b-2 z-50">
                <div className="w-screen max-w-md pt-12 p-4 flex flex-row justify-between items-center">
                    <button className="rounded-full w-8 h-8 flex items-center cursor-pointer justify-center hover:bg-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
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