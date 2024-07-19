import { SearchNavigation, ProductCard } from "features/home"

export default function HomeWrapper() {

    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            
            {/* TOP NAVIGATION */}
            <div className="w-full max-w-md top-0 h-24 flex-col z-50">
                <SearchNavigation />
            </div>

            <div 
                className="grid grid-cols-2 w-full max-w-md py-4 px-6 justify-between items-center gap-4"
                style={{ maxHeight: 'calc(2 * (18rem + 1rem))' }}    
            >
                <ProductCard
                    src="/dummy/contohAbaya.png"
                    alt="test"
                    title="Black Kaftan with Embellishment"
                    description="by Sewa Baju Uhuy"
                    // href="/product"
                />
                <ProductCard
                    src="/dummy/contohMobil.png"
                    alt="test"
                    title="1991 G Wagon 300GF W463 ..."
                    description="by Rental Mobil 90an"
                    // href="/product"
                />
                <ProductCard
                    src="/dummy/contohDress.png"
                    alt="test"
                    title="White Wedding Dress Open Shoulder"
                    description="by Hihihi Kunti Studio"
                    // href="/product"
                />
                <ProductCard
                    src="/dummy/contohCosplay.png"
                    alt="test"
                    title="Full Set AOT Cosplay + Contact Lens"
                    description="by Comicon Rent"
                    // href="/product"
                />
                <ProductCard
                    src="/dummy/contohMobil2.png"
                    alt="test"
                    title="VW Beetle 1303 1974 Cream Wedding Car"
                    description="by Rental Mobil 90an"
                    // href="/product"
                />
                <ProductCard
                    src="/dummy/contohDress2.png"
                    alt="test"
                    title="Korean Minimalist Dress"
                    description="by Anyeong Dress Rental"
                    // href="/product"
                />
                <ProductCard
                    src="/dummy/contohMobil3.png"
                    alt="test"
                    title="W140 S600 Mercedes Benz Mafia theme"
                    description="by The Benz Rent"
                    // href="/product"
                />
                <ProductCard
                    src="/dummy/contohMotor.png"
                    alt="test"
                    title="Vespa Super Siap Panturace"
                    description="by Jamaah Kura"
                    // href="/product"
                />
            </div>

        </div>
    )
}