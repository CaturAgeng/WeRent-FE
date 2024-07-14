'use client'

import Image from "@/node_modules/next/image";
import { StarRating, ProductSize, ProductSizeDetail, BarGraph, ThumbsUp  } from 'features/product'
import { generateSizeDetail, calculateMeanRating, customers } from "@/app/lib/dummy-data";
// import { useEffect, useState } from 'react';
// import { viewProductRequest } from 'features/product'
// import { Product, Customer } from "features/product";
import { products } from "@/app/lib/dummy-data";

export default function ProductViewWrapper() {
    const customer = customers[0];
    const product = products[0];

    // GET Data from Axios
    // const [productData, setProductData] = useState<Product | null>(null);
    // const [customerData, setCustomerData] = useState<Customer | null>(null);
    // const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     const fetchProductData = async () => {
    //         try {
    //             console.log('Fetching product data...');
    //             const { product, customer } = await viewProductRequest('01', '01');
    //             setProductData(product);
    //             setCustomerData(customer);
    //         } catch (err) {
    //             setError(err.message);
    //         }
    //     };

    //     fetchProductData();
    // }, []);

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }

    // if (!productData || !customerData) {
    //     return <div>Loading...</div>;
    // }

    // const sizeDetail = generateSizeDetail(productData.size);
    
    const sizeDetail = generateSizeDetail(product.size);
    const meanRating = calculateMeanRating(customers);

    const barData = [
        { label: 'Small', percentage: 2},
        { label: 'True to Size', percentage: 85},
        { label: 'Large', percentage: 13},
    ];

    return (
        <div className="flex w-screen max-w-md items-center justify-start h-full flex-col overflow-hidden">
            
            {/* PRODUCT IMAGE */}
            {product.image.map((imgSrc, index) => (
                <Image 
                    key={index}
                    src={imgSrc}
                    width="1000"
                    height="1000"
                    alt={product.name}
                    className="flex flex-row w-screen"
                />
            ))}

            {/* PRODUCT NAME & GUIDE */}
            <div className="flex flex-col items-start w-screen max-w-md pt-2 px-8">
                
                {/* Product Name */}
                <h1 className="text-2xl font-semibold mt-2">{product.name}</h1>
                
                {/* Product Review Rating */}
                <div className="flex flex-row gap-2 py-4 pr-4 items-center">
                    <StarRating 
                        rate={meanRating}
                    />
                    <p className="text-xs text-gray-400">{product.review} REVIEW(S)</p>
                </div>
                
                {/* Product Size & Guide */}
                <ProductSize sizes={product.size} />
            </div>

            {/* PRODUCT DESIGNER */}
            <div className="flex flex-col items-start w-screen max-w-md py-2 px-8">
                <div className="bg-gray-400 w-full h-0.5 mt-1"></div>
                
                {/* Designer Banner */}
                <div className="flex flex-row w-full justify-between my-2">
                    <h1 className="text-sm font-bold">DESIGNERS</h1>
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
            <div className="flex flex-col items-start w-screen max-w-md py-2 px-8">
                <div className="bg-gray-400 w-full h-0.5 my-1"></div>
                
                <h1 className="text-s font-bold">PRODUCT DETAIL</h1>

                {/* Product Material */}
                <div className="flex flex-row w-full justify-between my-1">
                    <h1 className="text-xs font-bold">FABRIC</h1>
                    <p className="text-xs text-gray-400 font-semibold">SILK</p>
                </div>

                {/* Product Material */}
                <div className="flex flex-row w-full justify-between my-1">
                    <h1 className="text-xs font-bold">FIT</h1>
                    <p className="text-xs text-gray-400 font-semibold">TRUE TO SIZE</p>
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
                    <ProductSizeDetail sizes={sizeDetail}
                    />
                </div>
            </div>

            {/* REVIEW AND COMMMENT */}
            <div className="flex flex-col items-start w-screen max-w-md py-2 px-8">
                <div className="bg-gray-00 w-full h-0.5 my-1"></div>
                <div className="flex w-full justify-between items-center">
                    <h1 className="text-s font-bold">REVIEWS ({product.review})</h1>
                    <a className="text-xs text-green-900 font-semibold underline" href="/review">View More</a>
                </div>
                <div className="p-1 w-full">
                    <div className="flex justify-start">
                        <StarRating 
                            rate={meanRating}
                            size="w-5 h-5"
                        />
                    </div>
                    <BarGraph 
                        data={barData}
                    />
                </div>
                <div className="w-full flex flex-row justify-center">
                    <div className="bg-gray-200 w-5/6 h-0.5"></div>
                </div>
            </div>

            <div className="flex flex-col items-start w-screen max-w-md py-2 px-8">
                <div className="flex flex-row w-full justify-between items-center">
                    <div className="flex flex-row items-center gap-4">
                        <div className="bg-black w-7 h-7 rounded-full"></div>
                        <div className="flex flex-col gap-2">
                            {/* USER RATING */}
                            <StarRating 
                                rate={customer.rating}
                                size="w-4 h-4"
                                gap="gap-0.5"
                            />
                            <p className="text-xs text-gray-400">Size Detail</p>
                        </div>
                    </div>
                    <ThumbsUp />
                </div>
                <div className="flex flex-col ">
                    <p className="text-sm py-2">This black kaftan is a wardrobe staple for me now! The quality is outstanding, and it&apos;s incredibly versatile. ...</p>
                    <p className="text-xs text-gray-400">Nov 29. 2023</p>
                </div>
            </div>
        </div>
    );
}