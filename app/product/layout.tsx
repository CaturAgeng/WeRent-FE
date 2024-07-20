import { TopNavigation, BottomNavigation } from "features/product";

export default function Layout({ children }: {children: React.ReactNode}) {

    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-full max-w-md h-full flex flex-col items-center justify-between">
                
                {/* TOP NAVIGATION */}
                <div className="fixed top-0 z-50 w-full max-w-md">
                <TopNavigation />
                </div>
        
                {/* VIEW PRODUCT PAGE */}
                <div className="overflow-y-auto h-full w-full py-24">
                {children}
                </div>
                
            </div>
        </div>
        );
    }