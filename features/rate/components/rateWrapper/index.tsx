'use client'

import React, { useState } from 'react';
import StarRating from '../starRating';
import FitScale from '../fitScale';
import FileInput from '../fileInput';
import Description from '../description';
import { axiosInstance } from "api/axiosClients";
import { rateWrapperProps } from 'features/rate';

const RateWrapper: React.FC<rateWrapperProps> = ({ userId, productId }) => {
    const [review, setReview] = useState<string>('');
    const [fitScale, setFitScale] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [ratingValue, setRatingValue] = useState<number>(0);
    const [responseMessage, setResponseMessage] = useState<string>('');
    const [showErrors, setShowErrors] = useState<boolean>(false);

    const handleReviewSubmit = () => {
        if (!fitScale || ratingValue === 0) {
            setShowErrors(true);
            return;
        }

        if (userId === undefined || productId === undefined || ratingValue === undefined) {
            console.error("userId, productId, atau ratingValue tidak didefinisikan");
            return;
        }


        const formData = new FormData();
        formData.append('userId', userId.toString());
        formData.append('productId', productId.toString());
        formData.append('description', review);
        formData.append('fit_scale', fitScale);
        formData.append('value', ratingValue.toString());
        if (file) {
            formData.append('file', file);
        }

        axiosInstance.post('/rating/add', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            setResponseMessage(response.data.message);
            console.log("Review submitted successfully:", response.data);
            setShowErrors(false);
            setReview('');
            setFitScale('');
            setFile(null);
            setRatingValue(0);
            window.location.href = '/product';
        })
        .catch(error => {
            console.error("Error submitting review:", error);
            setResponseMessage('Error submitting review.');
        });
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <div className="flex items-center">
                <div>
                    <StarRating userId={userId} productId={productId} value={ratingValue} onChange={setRatingValue} required={showErrors} showErrors={showErrors} />
                    <FitScale fitScale={fitScale} setFitScale={setFitScale} required={showErrors} />
                    {showErrors && (!fitScale || ratingValue === 0) && <p className='text-red-600 text-sm mt-2'>Fit scale is required.</p>}
                </div>
            </div>
            <div className="space-y-2">
                <Description description={review} setDescription={setReview} />
                <FileInput setFile={setFile} />
                <button 
                    onClick={handleReviewSubmit} 
                    className="w-full bg-green-800 text-white p-2 rounded-md hover:bg-green-600"
                >
                    Kirim
                </button>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
        </div>
    );
};

export default RateWrapper;
