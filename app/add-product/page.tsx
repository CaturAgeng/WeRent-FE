'use client'
import { useState } from "react";
import { TopNavigation } from "@/features/product";

export default function Page() {
    const [sizes, setSizes] = useState(['XS', 'S', 'M', 'L', 'XL']);
    const [customSize, setCustomSize] = useState('');
    const [images, setImages] = useState<File[]>([]);
    const [video, setVideo] = useState<File | null>(null);
    const [productName, setProductName] = useState('');
    const [productID, setProductID] = useState(Math.random().toString(36).substr(2, 9)); // Generating a random product ID


    // HANDLE ADD NEW SIZE
    const handleAddCustomSize = (e: React.FormEvent) => {
        e.preventDefault();
        if (customSize && !sizes.includes(customSize)) {
            setSizes([...sizes, customSize]);
            setCustomSize('');
        }
    };

    // HANDLE DELETE NEW CUSTOM SIZE
    const handleDeleteSize = (sizeToDelete: string) => {
        setSizes(sizes.filter(size => size !== sizeToDelete));
    };

    // HANDLE IMAGE UPLOAD
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImages(Array.from(e.target.files));
        }
    };

    // HANDLE VIDEO UPLOAD
    const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setVideo(e.target.files[0]);
        }
    };

    // HANDLE SUBMIT BUTTON LOGIC
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submit Clicked');

        // handle form submission logic below
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('productID', productID);
        formData.append('sizes', JSON.stringify(sizes));
        images.forEach(image => {
            formData.append('images', image);
        });
        if (video) {
            formData.append('video', video);
        }

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Form submitted successfully:', result);
            // Reset the form after successful submission
            setProductName('');
            setSizes(['XS', 'S', 'M', 'L', 'XL']);
            setImages([]);
            setVideo(null);
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };

    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-full max-w-md h-full flex flex-col items-center justify-between">
                
                <div className="fixed top-0 z-50 w-full max-w-md">
                <TopNavigation />
                </div>

                <div className="py-24 px-4 w-full">

                    {/* HEADINGS */}
                    <div className="flex flex-col pt-4">
                        <h1 className="font-semibold text-2xl">
                            Rent Your Product
                        </h1>
                        <p className="text-gray-400 text-sm">
                            Renting product now getting easier using WeRent!
                        </p>
                    </div>

                    {/* FORM */}
                    <div className="mt-6 ">
                        
                        {/* PRODUCT NAME FORM */}
                        <div className="mt-2 mb-4">
                            <label className="text-xl font-medium">Product Name</label>
                            <div className="mt-1 ring-2 rounded-lg ring-gray-200 hover:ring-green-900 ">
                                <input type="text" name="productname" id="productid" className=" flex w-full rounded-lg py-2 pl-2 text-sm text-gray-800 placeholder:text-gray-400" placeholder="Nike Air Jordan 1 Black Red White..." />
                            </div>
                        </div>

                        {/* PRODUCT DESCRIPTION FORM */}
                        <div className="mt-2">
                            <label className="text-xl font-medium">Size Detail</label>
                            <div className="px-2 py-2 border-2 rounded-md">
                                {sizes.map(size => (
                                    <div key={size} className="flex items-center">
                                        <input 
                                            id={`size-${size}`} 
                                            name="productsize" 
                                            type="checkbox" 
                                            value={size} 
                                            className="h-4 w-4 text-green-600 border-gray-300 ring-green-900 hover:border-green-900" 
                                        />
                                        <label htmlFor={`size-${size}`} className="ml-3 py-1 block text-sm text-gray-700">
                                            {size}
                                        </label>
                                        {['XS', 'S', 'M', 'L', 'XL'].includes(size) ? null : (
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteSize(size)}
                                                className=" ml-2 h-5 w-5 text-xs font-bold text-white bg-gray-300 hover:bg-red-500 rounded-full"
                                            >
                                                X
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* ADD CUSTOM SIZE */}
                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700">
                                Add Custom Size
                            </label>
                            <p className="text-xs text-gray-400">
                                Use indonesian general size, e.g. : 42 for shoes, XL for dress
                            </p>
                            <div className="mt-1 flex">
                                <input 
                                    type="text" 
                                    id="custom-size" 
                                    value={customSize}
                                    onChange={(e) => setCustomSize(e.target.value)}
                                    className="border-2 flex w-full rounded-lg py-1 pl-2 text-sm text-gray-800 placeholder:text-gray-400 hover:border-green-900" 
                                    placeholder="Enter custom size" 
                                />
                                <button 
                                    type="button" 
                                    onClick={handleAddCustomSize}
                                    className="ml-2 px-4 py-2 bg-green-900 text-white text-sm font-medium rounded-md hover:bg-green-700"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                        
                        {/* IMAGE VIDEO UPLOAD */}
                        <div className="mt-2 mb-4">
                            <label className="text-xl font-medium">Upload Image & Video</label>
                            {/* Image Upload */}
                            <div className="my-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Upload Image
                                </label>
                                <p className="text-xs text-gray-400">
                                    Upload greatest image of your product
                                </p>
                                <div className="mt-1">
                                    <input 
                                        type="file" 
                                        id="image-upload" 
                                        accept="image/*"
                                        placeholder="image-upload"
                                        multiple
                                        onChange={handleImageChange}
                                        className="cursor-pointer text-sm py-8 pl-2 flex w-full border-2 rounded-md border-gray-200 bg-transparent text-gray-800 hover:border-green-900" 
                                    />
                                </div>
                            </div>

                            {/* Video Upload */}
                            <div className="my-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Upload Video
                                </label>
                                <p className="text-xs text-gray-400">
                                    Upload HD Video by showing all the angle of your product 
                                </p>
                                <div className="mt-1">
                                    <input 
                                        type="file" 
                                        id="video-upload" 
                                        accept="video/*"
                                        placeholder="video-upload"
                                        onChange={handleVideoChange}
                                        className="cursor-pointer text-sm py-8 pl-2 flex w-full border-2 rounded-md border-gray-200 bg-transparent text-gray-800 hover:border-green-900" 
                                    />
                                </div>
                            </div>

                        </div>


                        {/* Submit Button */}
                        <div>
                            <button 
                                type="submit" 
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900"
                                onClick={handleSubmit}
                            >
                                Submit Product
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}