import { TopNavigation } from "@/features/product";

export default function Page() {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-full max-w-md h-full flex flex-col items-center justify-between">
                <TopNavigation />
            </div>
        </div>
    );
}