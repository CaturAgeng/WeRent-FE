import { TopNavigation, BottomNavigation } from "@/features/product/components";

export default function Page() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-between">
            
            {/* TOP NAVIGATION */}
            <TopNavigation />
            
            <h1>View Product Page</h1>
            <p>hello</p>

            {/* BOTTOM NAVIGATION */}
            <BottomNavigation />
        </div>
    );
}