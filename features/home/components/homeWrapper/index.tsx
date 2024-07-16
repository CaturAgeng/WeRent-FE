import SearchNavigation from "../searchNavigation"

export function HomeWrapper() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            
            {/* TOP NAVIGATION */}
            <div className="w-full max-w-md h-24 flex-col bg-white border-b-2 z-50">
                <SearchNavigation />
            </div>

            <div>
                <p>Next</p>
            </div>

        </div>
    )
}