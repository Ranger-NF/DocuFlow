// "use client";

import React from "react";
import { useState } from "react";

const docExplanation = {
  "Proof of Identity": [
    "passport",
    "voter id",
    "pan card",
    "driving license",
    "ration card",
    "govt-issued id card",
    "birth certificate",
  ],
  "Proof of Address": [
    "utility bills",
    "passbook",
    "passport",
    "rent agreement",
    "voter id",
    "driving license",
    "tax receipt",
  ],
  "Proof of Date of Birth": ["birth certificate", "passport", "sslc"],
};

export default function DocDetails({ docName, docsNeeded, refLink }) {
  // const file = await fs.readFile(
  //   process.cwd() + "src/app/data/doc-explained.json",
  //   "utf8",
  // );

  // const docExplanation = JSON.parse(file);

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
      <h1 className="text-2xl font-bold mb-4 text-black text-center">
        {docName}
      </h1>

      <div className="bg-primary p-4 rounded-[30px] shadow-xl \">❇</div>
      <div className="flex justify-center">
        <h2 className="text-xl text-center font-semibold mt-4 text-black border-b-2 border-green-500 inline-block">
          Documents required
        </h2>
      </div>
      <br></br>
      <br></br>

      {docsNeeded.map((eachDoc) => {
        if (eachDoc.startsWith("Proof Of")) {
          for (const eachEntry of Object.keys(docExplanation)) {
            if (eachDoc.toLowerCase().startsWith(eachEntry.toLowerCase())) {
              return (
                <div key={eachEntry}>
                  <h3 className="text-lg font-medium mb-1 text-black">
                    {eachEntry} (Only 1 required)
                  </h3>
                  <div>
                    {docExplanation[eachEntry].map((proofDoc, index) => (
                      <button
                        key={index}
                        className={`border rounded-full px-4 py-2 mr-2 ${
                          selectedDocuments.address === proofDoc
                            ? "bg-blue-500 text-white"
                            : ""
                        } text-black bg-primary`}
                        onClick={() =>
                          handleDocumentSelection("address", proofDoc)
                        }
                      >
                        {proofDoc}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }
          }
        } else {
          return (
            <button
              key={eachDoc}
              className={`border rounded-full px-4 py-2 mr-2 ${
                selectedDocuments.address === "voterId"
                  ? "bg-blue-500 text-white"
                  : ""
              } text-black bg-primary`}
              onClick={() => handleDocumentSelection("address", "voterId")}
            >
              {eachDoc}
            </button>
          );
        }
      })}
    </div>
  );
}
