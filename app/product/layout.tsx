import { TopNavigation, BottomNavigation } from "@/app/ui/product/components";
import { products } from "../lib/dummy-data";

export default function Layout({ children }: {children: React.ReactNode}) {
    const product = products[0];

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-between">
            
            {/* TOP NAVIGATION */}
            <div className="fixed top-0 z-50">
                <TopNavigation />
            </div>
            
            {/* VIEW PRODUCT PAGE */}
            <div className="overflow-y-auto h-screen py-24 ">
                {children}
            </div>

            {/* BOTTOM NAVIGATION */}
            <div className="fixed bottom-0">
                <BottomNavigation 
                    rent={[{price: product.rentPrice, days: product.rentDays}]} 
                />
            </div>
        </div>
    )
}