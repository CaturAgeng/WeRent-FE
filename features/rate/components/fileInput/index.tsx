// 'use client'

import React from 'react';

interface FileInputProps {
    setFile: (file: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ setFile }) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    return (
        <div className="mt-2">
            <label className="block mb-1">Tambahkan gambar atau video</label>
            <input 
                type="file" 
                accept="image/*,video/*" 
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-200 file:text-green-900 hover:file:bg-green-300" 
                onChange={handleFileChange} 
                placeholder='Photos/Videos'
            />
        </div>
    );
};

export default FileInput;
