'use client'

import Image from "@/node_modules/next/image";
import { StarRating, ProductSize, ProductSizeDetail, BarGraph, ThumbsUp, BottomNavigation  } from 'features/product'
import { generateSizeDetail, calculateMeanRating, customers, products } from "@/app/lib/dummy-data";
import { useState, useEffect } from 'react';

// import for Axios
import { viewProductRequest } from 'features/product';

export default function ProductViewWrapper() {
    
    // const [currentProduct, setCurrentProduct] = useState(null);
    // const [currentProductIndex, setCurrentProductIndex] = useState(0);
    // const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [currentProductId, setCurrentProductId] = useState('1');
    const [error, setError] = useState<string | null>(null);
    const [productData, setProductData] = useState<{ 
        product_name: string,
        product_desc: string,
        sizes: string[],
        price: number,
        images? : any[],
        videos?: string[],
        rent_duration : number,
        ratings?: {
            userId: number; ratingValue: number 
        }[],
        reviews?: {
            user_id: number; description: string, fit_scale: string, createdAt: string 
        }[],
    } | null>(null);
    const [loadingImage, setLoadingImage] = useState<boolean>(true);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    // GET Data from Axios Start
    useEffect(() => {
        const fetchProductData = async () => {
            try {
                console.log('Fetching product data for productId:', currentProductId);
                const { product } = await viewProductRequest(currentProductId);
                const { product_name, product_desc, sizes, price, product_pictures, product_videos, rent_duration, ratings, reviews  } = product;
                const images = product_pictures ? [product_pictures] : [];
                const videos = product_videos || [];
                setProductData({ product_name, product_desc, sizes, price, images, videos, rent_duration, ratings, reviews });
                setLoadingImage(false);
            } catch (err: any) {
                setError(err.message);
                console.error('Error fetching product data:', err);
                setLoadingImage(false);
            }
        };
    
        fetchProductData();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentProductId]);
    
    if (error) {
            return <div className="pt-64 h-full w-full font-semibold flex flex-auto justify-center items-center">Error: {error}</div>;
    }
    
    if (!productData) {
            return <div className="pt-64 h-full w-full font-semibold flex flex-auto justify-center items-center">Loading...</div>;
    }
    // GET Data from Axios END

    // const currentProduct = products[currentProductIndex];
        
    const sizeDetail = generateSizeDetail(productData.sizes);
    const ratings = productData.ratings || [];
    const meanRating = ratings.length > 0 ? ratings.reduce((sum, r) => sum + r.ratingValue, 0) / ratings.length : 0;
    const reviews = productData.reviews || [];

    const userRating = ratings.find(rating => rating.userId === 2)?.ratingValue || 0;
    const userReviews = reviews.filter(review => review.user_id === 2);

    // INTEGRATE THE BAR DATA 
    const barData = [
        { label: 'Small', percentage: 2},
        { label: 'True to Size', percentage: 85},
        { label: 'Large', percentage: 13},
    ];

    const media = [...(productData.images || []), ...(productData.videos || [])];
    const isVideo = (url: string) => url.endsWith('.mp4') || url.endsWith('.webm');

    // BUTTON HANDLER HERE
    const handleNextMedia = () => {
        setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
    };

    const handlePrevMedia = () => {
        setCurrentMediaIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
    };

    const products = ["1", "2"];
    const handleNextProduct = () => {
        const currentIndex = products.indexOf(currentProductId);
        const nextIndex = (currentIndex + 1) % products.length;
        setCurrentProductId(products[nextIndex]);
    };

    const handlePrevProduct = () => {
        const currentIndex = products.indexOf(currentProductId);
        const prevIndex = (currentIndex - 1 + products.length) % products.length;
        setCurrentProductId(products[prevIndex]);
    };

    const fallbackImage = '/dummy/no_image.png'
    const imageUrl = productData.images ? productData.images[0] : fallbackImage;

    // CHANGE DATA FORMAT FROM BE TO FE
    const formattedPrice = productData.price.toLocaleString('id-ID', { 
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0 
    });

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    console.log("Current image URL:", imageUrl);

    return (
        <div className="flex w-screen max-w-md items-center justify-start h-full flex-col overflow-hidden scroll-smooth">
            
            {/* PRODUCT IMAGE */}
            {/* {currentProduct.image.length > 0 && ( */}
            <div className="relative w-full h-[640px] flex items-center justify-center overflow-hidden">
                {loadingImage ? (
                    <div className="absolute bg-gray-500 w-full h-full flex items-center justify-center">
                        <p className="text-white text-xl font-semibold">Loading image...</p>
                    </div>
                ) : null}
                <Image 
                    src={imageUrl}
                    // src={currentProduct.image[currentImageIndex]}
                    fill
                    priority
                    style={{objectFit: 'cover'}}
                    alt={productData.product_name}
                    onError={(e) => {
                        e.currentTarget.src = fallbackImage; // Use fallback image on error
                        console.error('Error loading image:', e);
                    }}
                />
                {/* Navigation Buttons */}
                {media.length > 1 && (
                    <>
                        <button
                            onClick={handlePrevMedia}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-30 cursor-pointer hover:bg-opacity-30 hover:bg-white hover:text-gray-500 text-white px-2 py-1 font-bold rounded-full"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={handleNextMedia}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-30 cursor-pointer hover:bg-opacity-30 hover:bg-white hover:text-gray-500 text-white px-2 py-1 font-bold rounded-full"
                        >
                            &gt;
                        </button>
                    </>
                )}
            </div>
            {/* )} */}


            {/* PRODUCT NAME & GUIDE */}
            <div className="flex flex-col items-start w-screen max-w-md pt-2 px-8">
                
                {/* Product Name & Desc */}
                <h1 className="text-2xl font-semibold mt-2">{productData.product_name}</h1>
                <p className="text-gray-400 text-sm font-medium mt-2">{productData.product_desc}</p>
                
                {/* Product Review Rating */}
                <div className="flex flex-row gap-2 py-4 pr-4 items-center">
                    <StarRating 
                        rate={meanRating}
                    />
                    <p className="text-xs text-gray-400">{reviews.length} REVIEW(S)</p>
                </div>
                
                {/* Product Size & Guide */}
                <ProductSize sizes={productData.sizes} />
                
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
                    <h1 className="text-s font-bold">REVIEWS ({reviews.length})</h1>
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
            
            {userReviews.length === 0 ? (
                <div className="flex flex-col items-center w-screen max-w-md py-2 px-8">
                    <p className="text-sm py-2 text-gray-400 font-semibold">No review yet</p>
                </div>
            ) : (
                userReviews.map((review, index) => (
                    <div key={index} className="flex flex-col items-start w-screen max-w-md py-2 px-8">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className="flex flex-row items-center gap-4">
                                <div className="bg-black w-7 h-7 rounded-full"></div>
                                <div className="flex flex-col gap-2">
                                    <StarRating rate={userRating} size="w-4 h-4" gap="gap-0.5" />
                                    <p className="text-xs text-gray-400">{review.fit_scale}</p>
                                </div>
                            </div>
                            <ThumbsUp />
                        </div>
                        <div className="flex flex-col ">
                            <p className="text-sm py-2">{review.description}</p>
                            <p className="text-xs text-gray-400">{formatDate(review.createdAt)}</p>
                        </div>
                    </div>
                ))
            )};

            {/* PREVIOUS AND NEXT PRODUCT BUTTON */}
            <div className="flex flex-row w-full">
                <button
                    onClick={handlePrevProduct}
                    className="bg-green-900 text-white w-full h-20 cursor-pointer hover:bg-green-800"
                >
                    Previous Product
                </button>
                <button
                    onClick={handleNextProduct}
                    className="bg-green-900 text-white w-full h-20 cursor-pointer hover:bg-green-800"
                >
                    Next Product
                </button>
            </div>

            {/* BOTTOM NAVIGATION */}
            <div className="fixed bottom-0 w-full max-w-md">
                <BottomNavigation
                    rent={[{ price: formattedPrice, days: productData.rent_duration }]}
                />
            </div>
        </div>
    );
}