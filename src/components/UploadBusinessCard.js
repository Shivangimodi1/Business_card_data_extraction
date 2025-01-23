import React, { useState } from 'react';
import axios from 'axios';
import config from '../config.js';
import './UploadBusinessCard.css';  // Import custom CSS file for styles

const UploadBusinessCard = ({ onDataExtracted }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setErrorMessage('');  // Reset error message if a new file is selected
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('image', selectedFile);
        setIsUploading(true);

        try {
            // Send the image to backend for processing
            const response = await axios.post(`${config.BACKEND_URL}/upload-card`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.status === 200) {
                const extractedData = response.data.extractedData;
                onDataExtracted(extractedData); // Pass extracted data to parent component
            }
        } catch (error) {
            setErrorMessage('Error uploading file, please try again.');
            console.error('Error uploading file:', error);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="upload-card-container">
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange} 
                className="file-input" 
            />
            {selectedFile && (
                <div className="file-info">
                    <p>File Selected: {selectedFile.name}</p>
                </div>
            )}
            
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button 
                onClick={handleUpload} 
                disabled={!selectedFile || isUploading} 
                className="upload-btn"
            >
                {isUploading ? 'Uploading...' : 'Upload Card'}
            </button>
        </div>
    );
};

export default UploadBusinessCard;
