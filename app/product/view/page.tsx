import Image from "@/node_modules/next/image";
import { StarRating, ProductSize, ProductSizeDetail  } from '@/features/product/components'

export default function View() {
    return (
        <div className="flex items-center justify-start h-screen flex-col overflow-hidden">
            
            {/* PRODUCT IMAGE */}
            <Image 
                src="/dummy/contohAbaya.png"
                width="1000"
                height="1000"
                alt="contoh abaya"
            />

            {/* PRODUCT NAME & GUIDE */}
            <div className="flex flex-col items-start w-screen pt-2 px-8">
                
                {/* Product Name */}
                <h1 className="text-2xl font-semibold mt-2">Black Kaftan with Embellishment</h1>
                {/* <h1 className="text-2xl font-semibold mt-2">{product.name}</h1> */}
                
                {/* Product Review Rating */}
                <StarRating review={4}
                />
                
                {/* Product Size & Guide */}
                <ProductSize />
            </div>

            {/* PRODUCT DESIGNER */}
            <div className="flex flex-col items-start w-screen py-2 px-8">
                <div className="bg-gray-500 w-full h-0.5 mt-1"></div>
                
                {/* Designer Banner */}
                <div className="flex flex-row w-full justify-between my-2">
                    <h1 className="text-xs font-bold">DESIGNERS</h1>
                    <span className="text-xs">VIEW THE COLLECTION</span>
                </div>
                <Image className="mb-2"
                    src="/dummy/designerBanner.png"
                    width="1000"
                    height="1000"
                    alt="designer banner"
                />
            </div>

            {/* PRODUCT DETAIL & SIZE GUIDE */}
            <div className="flex flex-col items-start w-screen py-2 px-8">
                <div className="bg-gray-500 w-full h-0.5 my-1"></div>
                
                <h1 className="text-s font-bold">PRODUCT DETAIL</h1>

                {/* Product Material */}
                <div className="flex flex-row w-full justify-between my-1">
                    <h1 className="text-xs font-bold">FABRIC</h1>
                    <p className="text-xs text-gray-500">SILK</p>
                </div>

                {/* Product Material */}
                <div className="flex flex-row w-full justify-between my-1">
                    <h1 className="text-xs font-bold">FIT</h1>
                    <p className="text-xs text-gray-500">TRUE TO SIZE</p>
                </div>

                {/* Size Guide */}
                <div className="flex flex-col w-full justify-between my-1">
                    <h1 className="text-xs font-bold mb-1">SIZE GUIDE</h1>
                    <div className="flex flex-auto w-full justify-evenly py-2 border-t border-x border-b-2 border-gray-500">
                        <p className="text-xs w-1/3 font-bold text-center">SIZE</p>
                        <p className="text-xs w-1/3 font-bold text-center">BUST</p>
                        <p className="text-xs w-1/3 font-bold text-center">LENGTH</p>
                    </div>

                    {/* Product Detail Here */}
                    <ProductSizeDetail
                        sizes={[
                            {size: "XS", bustSize: "74", lengthSize: "87"},
                            {size: "S", bustSize: "76", lengthSize: "88"},
                            {size: "M", bustSize: "78", lengthSize: "89"},
                            {size: "L", bustSize: "80", lengthSize: "90"},
                            {size: "XL", bustSize: "82", lengthSize: "91"},
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}