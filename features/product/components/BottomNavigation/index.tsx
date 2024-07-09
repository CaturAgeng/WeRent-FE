export default function BottomNavigation() {
    
    return (
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
    );
}