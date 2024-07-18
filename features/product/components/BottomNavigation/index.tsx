import Link from 'next/link';

interface RentDetailProps {
    rent: { price: number; days: number }[];
}

export default function BottomNavigation({ rent }: RentDetailProps) {

    return (
        <div className=" w-full h-24 flex-col bg-white border-t-2">
            <div className="w-screen max-w-md h-2/3 py-2 px-4 flex flex-row justify-between items-center">
                <div className=" h-full flex flex-col items-start justify-center">
                    <div className="h-1/4 flex items-center">
                        <p className="text-xs">Rent Fee</p>
                    </div>
                    <div className="h-2/4 flex items-center">
                        {rent.map((rentDetail, index) =>(
                            <h1 key={index} >Rp {rentDetail.price}/{rentDetail.days} Day</h1>
                        ))}
                    </div>
                    <div className="h-1/4 items-center"></div>
                </div>
                    <Link href="/rating">
                        <button className="rounded-md h-9 w-32 bg-yellow-500 text-xs cursor-pointer hover:bg-yellow-600">ADD</button>
                    </Link>
                </div>
            <div className="w-screen h-1/3 "></div>
        </div>
    );
}