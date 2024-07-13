'use client'

import React, { useState } from 'react';
import StarRating from '../starRating'; // Pastikan import StarRating dari path yang benar
import RadioButton from '../radioButton';
import FileInput from '../fileInput';
import axios from 'axios';

const RateWrapper: React.FC = () => {
    const [userId] = useState<number>(1);  // Example user ID, should be dynamically set
    const [productId] = useState<number>(1);  // Example product ID, should be dynamically set
    const [review, setReview] = useState<string>('');
    const [fitScale, setFitScale] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [ratingValue, setRatingValue] = useState<number>(0); // State untuk menyimpan nilai rating
    const [responseMessage, setResponseMessage] = useState<string>('');

    const handleReviewSubmit = () => {
        const formData = new FormData();
        formData.append('userId', userId.toString());
        formData.append('productId', productId.toString());
        formData.append('description', review);
        formData.append('fit_scale', fitScale);
        formData.append('ratingValue', ratingValue.toString()); // Menambahkan nilai rating ke dalam FormData
        if (file) {
            formData.append('file', file);
        }

        axios.post('/api/rate', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            setResponseMessage(response.data.message);  // Menyimpan pesan respons
            console.log("Review submitted successfully:", response.data);
        })
        .catch(error => {
            console.error("Error submitting review:", error);
        });
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <div className="flex items-center">
                <div>
                    {/* Komponen StarRating dengan prop value dan onChange */}
                    <StarRating userId={userId} productId={productId} value={ratingValue} onChange={setRatingValue} />
                    <RadioButton fitScale={fitScale} setFitScale={setFitScale} />
                </div>
            </div>
            <div className="space-y-2">
                <textarea
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows={4}
                    placeholder='Berikan ulasan anda'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                ></textarea>
                <FileInput setFile={setFile} />
                <button onClick={handleReviewSubmit} className="w-full bg-yellow-500 text-white p-2 rounded-md">Kirim</button>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
        </div>
    );
};

export default RateWrapper;

