import './App.css';
import React, { useState } from 'react';
import UploadBusinessCard from './components/UploadBusinessCard';
import CardDataDisplay from './components/CardDataDisplay';
import CSVDownload from './components/CSVDownload';

const App = () => {
  const [cardData, setCardData] = useState(null);

  const handleDataExtraction = (data) => {
    // Log the extracted data to the console
    console.log('Extracted Data Received:', data);

    // Set the card data state with the received data
    setCardData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Business Card Extractor</h1>
      </header>
      
      <div className="upload-section">
        <UploadBusinessCard onDataExtracted={handleDataExtraction} />
      </div>

      {cardData && (
        <div className="card-data-section">
          <CardDataDisplay cardData={cardData} />
        </div>
      )}
      
      {cardData && (
        <div className="download-section">
          <CSVDownload cardData={cardData} />
        </div>
      )}
    </div>
  );
};

export default App;
