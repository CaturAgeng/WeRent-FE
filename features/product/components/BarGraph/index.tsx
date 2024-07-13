interface BarGraphProps {
    data: {
        label: string;
        percentage: number;
    }[];
}

export default function BarGraph( {data}: BarGraphProps ) {
    return (
        <div className="w-full">
            {data.map((item, index) => (
            <div key={index} className="flex my-2 flex-row justify-between items-center">
                <span className="text-xs w-36">{item.label}</span>
                <div className="w-full bg-gray-300 h-2.5">
                    <div
                    className="h-2.5 bg-green-900 "
                    style={{ width: `${item.percentage}%` }}
                    ></div>
                </div>
                <span className="text-xs w-14 pl-2">{item.percentage}%</span>
            </div>
            ))}
        </div>
    );
}
