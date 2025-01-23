import React from 'react';
import './CardDataDisplay.css'; // Import custom CSS file for styles

const CardDataDisplay = ({ cardData }) => {
    return (
        <div className="card-data-container">
            {cardData ? (
                <div className="card-data">
                    <h3 className="card-title">Extracted Data:</h3>
                    <ul className="card-data-list">
                        <li><strong>Name:</strong> {cardData?.NAME?.join(', ') || 'N/A'}</li>
                        <li><strong>Business:</strong> {cardData?.ORG?.join(', ') || 'N/A'}</li>
                        <li><strong>Designation:</strong> {cardData?.DES?.join(', ') || 'N/A'}</li>
                        <li><strong>Phone:</strong> {cardData?.PHONE?.join(', ') || 'N/A'}</li>
                        <li><strong>Email Address:</strong> {cardData?.EMAIL?.join(', ') || 'N/A'}</li>
                        <li><strong>Website:</strong> {cardData?.WEB?.join(', ') || 'N/A'}</li>
                    </ul>
                    {cardData.outputImagePath && (
                        <div className="image-container">
                            <h4>Processed Image:</h4>
                            <img src={cardData.outputImagePath} alt="Processed Business Card" />
                        </div>
                    )}
                </div>
            ) : (
                <p className="no-data-message">Data extraction is in progress...</p>
            )}
        </div>
    );
};

export default CardDataDisplay;