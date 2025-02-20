"use client";

import React, { Suspense } from "react";
import { TiArrowLeftThick, TiChevronRight } from "react-icons/ti";
import { useSearchParams } from "next/navigation";

const categoryItems = {
  gov: [
    { key: "Aadhaar", title: "Aadhaar" },
    { key: "Voter ID", title: "Voter ID" },
    { key: "Birth Certificate", title: "Birth Certificate" },
  ],
  finance: [
    { key: "PAN Card", title: "PAN Card" },
    { key: "Business License", title: "Business License" },
    { key: "Loan Application", title: "Loan Application" },
  ],
  vehicle: [
    { key: "Registration Card (RC)", title: "Registration Card (RC)" },
    { key: "Pollution Certificate (PUCC)", title: "Pollution Certificate (PUCC)" },
  ],
};

function ListPage() {
  return (
    <div className="container mx-auto p-7">
      <div className="flex">
        <a href="/">
          <TiArrowLeftThick className="w-8 h-8 align-middle" />
        </a>
        <input
          type="text"
          placeholder="Search for documents..."
          className="border justify-center rounded px-4 py-2 ml-2 w-full"
        />
      </div>

      {/* Wrap the category list in Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryList />
      </Suspense>
    </div>
  );
}

function CategoryList() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  if (!category || !categoryItems[category]) {
    return <div className="mt-5">No category selected.</div>;
  }

  return (
    <div className="space-y-4 mt-5">
      {categoryItems[category].map((item) => (
        <a
          href={`/document/?doc=${item.title}`}
          className="flex items-center justify-between bg-primary p-4 rounded-lg shadow-lg"
          key={item.key}
        >
          <div className="flex items-center gap-4">
            <div>
              <p className="font-medium text-black">{item.title}</p>
            </div>
          </div>
          <TiChevronRight className="w-8 h-8 text-green-500" />
        </a>
      ))}
    </div>
  );
}

export default ListPage;
