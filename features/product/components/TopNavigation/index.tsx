export default function TopNavigation() {
    
    return (
        <div className="w-full h-24 flex-col bg-white border-b-2 z-50">
                <div className="w-screen h-1/3 "></div>
                <div className="w-screen h-2/3 p-4 flex flex-row justify-start items-center">
                    <div className="rounded-full w-8 h-8 flex items-center cursor-pointer justify-center hover:bg-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={4}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
    );
}