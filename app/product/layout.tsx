import { TopNavigation, BottomNavigation } from "@/features/product/components";


export default function Layout({ children }: {children: React.ReactNode}) {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-between">
            
            {/* TOP NAVIGATION */}
            <div className="fixed top-0">
                <TopNavigation />
            </div>
            
            {/* VIEW PRODUCT PAGE */}
            <div className="overflow-y-auto py-24 ">
                {children}
            </div>

            {/* BOTTOM NAVIGATION */}
            <div className="fixed bottom-0">
                <BottomNavigation 
                    rent={[{price: "300.000", days: 4}]} 
                />
            </div>
        </div>
    )
}