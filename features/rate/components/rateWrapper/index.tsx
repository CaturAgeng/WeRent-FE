'use client'

import React, { useState } from 'react';
import StarRating from '../starRating';
import RadioButton from '../radioButton';
import FileInput from '../fileInput';
import axios from 'axios';

const RateWrapper: React.FC = () => {
    const userId = 1;  // Example user ID, should be dynamically set
    const productId = 1;  // Example product ID, should be dynamically set
    const [review, setReview] = useState<string>('');
    const [fitScale, setFitScale] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [ratingValue, setRatingValue] = useState<number>(0); // State untuk menyimpan nilai rating
    const [responseMessage, setResponseMessage] = useState<string>('');
    const [showErrors, setShowErrors] = useState<boolean>(false);

    const handleReviewSubmit = () => {
        // Validasi semua required fields sebelum mengirimkan data
        if (!fitScale || ratingValue === 0) {
            setShowErrors(true); // Menampilkan pesan kesalahan
            return; // Menghentikan proses pengiriman jika ada required field yang kosong
        }

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
            // Reset state dan tampilkan pesan sukses jika perlu
            setShowErrors(false); // Menyembunyikan pesan kesalahan setelah berhasil submit
            // Tambahkan navigasi ke halaman review atau halaman lain setelah submit
            window.location.href = '/product'; // Contoh navigasi, sesuaikan dengan kebutuhan Anda
        })
        .catch(error => {
            console.error("Error submitting review:", error);
        });
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <div className="flex items-center">
                <div>
                    <StarRating userId={userId} productId={productId} value={ratingValue} onChange={setRatingValue} required={showErrors} />
                    <RadioButton fitScale={fitScale} setFitScale={setFitScale} required={showErrors} />
                    {showErrors && (!fitScale || ratingValue === 0) && <p className='text-red-600 text-sm mt-2'>Fit scale and rating are required.</p>}
                </div>
            </div>
            <div className="space-y-2">
                <textarea
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows={4}
                    placeholder='Give your review'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                ></textarea>
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
