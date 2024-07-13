import { TopNavigation, BottomNavigation } from "@/app/ui/product/components";
import { products } from "../lib/dummy-data";

export default function Layout({ children }: {children: React.ReactNode}) {
    const product = products[0];

    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-full max-w-md h-full flex flex-col items-center justify-between border shadow-lg">
                
                {/* TOP NAVIGATION */}
                <div className="fixed top-0 z-50 w-full max-w-md">
                <TopNavigation />
                </div>
        
                {/* VIEW PRODUCT PAGE */}
                <div className="overflow-y-auto h-full w-full py-24">
                {children}
                </div>
        
                {/* BOTTOM NAVIGATION */}
                <div className="fixed bottom-0 w-full max-w-md">
                <BottomNavigation
                    rent={[{ price: product.rentPrice, days: product.rentDays }]}
                />
                </div>
            </div>
            </div>
        );
    }