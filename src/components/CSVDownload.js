import React from 'react';
import config from '../config.js';

const CSVDownload = () => {
  // Function to download the CSV file
  const downloadCSV = () => {
    fetch(`${config.BACKEND_URL}/download-csv`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to download CSV');
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'business_card_data.csv';  // Triggers the download
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((error) => {
        console.error('Error downloading CSV:', error);
      });
  };

  // Function to view the CSV file in a new tab
  const viewCSV = () => {
    const csvUrl = `${config.BACKEND_URL}/view-csv`; // URL for the CSV file (view route)
    window.open(csvUrl, '_blank'); // Opens the CSV file in a new tab (without downloading)
  };
  
  return (
    <div>
      <div className="button-container">
        <button className="download-btn" onClick={downloadCSV}>
          Download CSV
        </button>
        <button className="view-btn" onClick={viewCSV}>
          View CSV
        </button>
      </div>
    </div>
  );
};

export default CSVDownload;