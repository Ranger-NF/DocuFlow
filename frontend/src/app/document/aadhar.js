"use client";

import React from "react";
import { useState } from "react";

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
    <div className="container mx-auto p-10 bg-white ">
      <h1 className="text-2xl font-bold mb-4 text-black text-center">Aadhar</h1>

      <div className="bg-primary p-4 rounded-[30px] shadow-xl \">
        <img
          src="/image-placeholder.png"
          alt="Document Placeholder"
          className="w-16 h-40 mx-auto"
        />
      </div>
      <div className="flex justify-center">
        <h2 className="text-xl text-center font-semibold mt-4 text-black border-b-2 border-green-500 inline-block">Documents required</h2>
      </div>
      <br></br>
      <br></br>
      <div className="mt-2 justify-center text-center">
        <h3 className="text-lg font-medium mb-1 text-black">
          Proof of Address (Only 1 required)
        </h3>
        <div >
          <button
            className={`border rounded-full px-4 py-2 mr-2 ${selectedDocuments.address === "voterId" ? "bg-blue-500 text-white" : ""} text-black bg-primary`}
            onClick={() => handleDocumentSelection("address", "voterId")}
          >
            Voter ID
          </button>
          <button
            className={`border rounded-full px-4 py-2 ${selectedDocuments.address === "passport" ? "bg-blue-500 text-white" : ""} text-black bg-primary`}
            onClick={() => handleDocumentSelection("address", "passport")}
          >
            Passport
          </button>
        </div>
      </div>

      <div className="mt-2 text-center">
        <h3 className="text-lg font-medium mb-1 text-black">
          Proof of Identity (Only 1 required)
        </h3>
        <button
          className={`border rounded-full px-4 py-2 mr-2 ${selectedDocuments.identity === "birthCertificate" ? "bg-blue-500 text-white" : ""} text-black bg-primary`}
          onClick={() =>
            handleDocumentSelection("identity", "birthCertificate")
          }
        >
          Birth Certificate
        </button>
        <button
          className={`border rounded-full px-4 py-2 ${selectedDocuments.identity === "passport" ? "bg-blue-500 text-white" : ""} text-black bg-primary`}
          onClick={() => handleDocumentSelection("identity", "passport")}
        >
          Passport
        </button>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-medium mb-1 text-black">
          Proof of Date of Birth (Only 1 required)
        </h3>
        <button
          className={`border rounded-full px-4 py-2 mr-2 ${selectedDocuments.dob === "panCard" ? "bg-blue-500 text-white" : ""} text-black bg-primary`}
          onClick={() => handleDocumentSelection("dob", "panCard")}
        >
          PAN card
        </button>
        <button
          className={`border border- rounded-full px-4 py-2   ${selectedDocuments.dob === "passport" ? "bg-blue-500 text-white" : ""} text-black bg-primary`}
          onClick={() => handleDocumentSelection("dob", "passport")}
        >
          Passport
        </button>
      </div>
    </div>
  );
}

export default Aadhar;
