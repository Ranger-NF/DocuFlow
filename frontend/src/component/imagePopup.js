import React, { useState } from 'react';

function ImagePopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button 
        onClick={handleButtonClick} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Show Image
      </button>

      {isPopupOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" 
        >
          <div 
            className="bg-white rounded-lg p-6" 
          >
            <img src="../../public/popUpImage/Aadhar.jpg" alt="Image A" className="w-64" />
            <button 
              onClick={handleClosePopup} 
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImagePopup;