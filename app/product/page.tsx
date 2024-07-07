

export default function Page() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-between">
            
            {/* TOP NAVIGATION */}
            <div className="w-full h-24 flex-col bg-white drop-shadow-md ">
                <div className="w-screen h-1/3 "></div>
                <div className="w-screen h-2/3 p-4 flex flex-row justify-start items-center">
                    <div className="rounded-full w-8 h-8 flex items-center cursor-pointer justify-center hover:bg-gray-300">
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
                    </div>
                    <a className="text-black">Back Button</a>
                </div>
            </div>
            
            <h1>View Product Page</h1>
            <p>hello</p>

            {/* BOTTOM NAVIGATION */}
            <div className="w-full h-24 flex-col bg-white border-t-2">
                <div className="w-screen h-2/3 py-2 px-4 flex flex-row justify-between items-center">
                    <div className=" h-full flex flex-col items-start cursor-pointer justify-center">
                        <div className="h-1/4 flex items-center">
                            <p className="text-xs">Rent Fee</p>
                        </div>
                        <div className="h-2/4 flex items-center">
                            <h1>Rp 300.000/4 Day</h1>
                        </div>
                        <div className="h-1/4 items-center"></div>
                    </div>
                    <button className="rounded-md h-9 w-32 bg-yellow-500 text-xs cursor-pointer hover:bg-yellow-600">ADD</button>
                </div>
                <div className="w-screen h-1/3 "></div>
            </div>
        </div>
    );
}