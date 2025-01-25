import React from 'react';
import { useState } from 'react';

function Aadhar() {
  const [selectedDocuments, setSelectedDocuments] = useState({
    address: null,
    identity: null,
    dob: null,
  });

  const handleDocumentSelection = (type, document) => {
    setSelectedDocuments({
      ...selectedDocuments,
      [type]: document,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Aadhar</h1>

      <div className="bg-green-200 p-4 rounded-md">
        <img src="/image-placeholder.png" alt="Document Placeholder" className="w-16 h-16 mx-auto" />
      </div>

      <h2 className="text-xl font-semibold mt-4">Documents required</h2>

      <div className="mt-2">
        <h3 className="text-lg font-medium mb-1">Proof of Address (Only 1 required)</h3>
        <button
          className={`border rounded px-4 py-2 mr-2 ${selectedDocuments.address === 'voterId' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleDocumentSelection('address', 'voterId')}
        >
          Voter ID
        </button>
        <button
          className={`border rounded px-4 py-2 ${selectedDocuments.address === 'passport' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleDocumentSelection('address', 'passport')}
        >
          Passport
        </button>
      </div>

      <div className="mt-2">
        <h3 className="text-lg font-medium mb-1">Proof of Identity (Only 1 required)</h3>
        <button
          className={`border rounded px-4 py-2 mr-2 ${selectedDocuments.identity === 'birthCertificate' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleDocumentSelection('identity', 'birthCertificate')}
        >
          Birth Certificate
        </button>
        <button
          className={`border rounded px-4 py-2 ${selectedDocuments.identity === 'passport' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleDocumentSelection('identity', 'passport')}
        >
          Passport
        </button>
      </div>

      <div className="mt-2">
        <h3 className="text-lg font-medium mb-1">Proof of Date of Birth (Only 1 required)</h3>
        <button
          className={`border rounded px-4 py-2 mr-2 ${selectedDocuments.dob === 'panCard' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleDocumentSelection('dob', 'panCard')}
        >
          PAN card
        </button>
        <button
          className={`border rounded px-4 py-2 ${selectedDocuments.dob === 'passport' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleDocumentSelection('dob', 'passport')}
        >
          Passport
        </button>
      </div>
    </div>
  );
}

export default Aadhar;