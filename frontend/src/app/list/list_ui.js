import React from "react";
import { TiArrowLeftThick, TiChevronRight } from "react-icons/ti";

function ListPage() {
  return (
    <div>
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
        <div className="place-items-center p-4">
          <button className="flex items-center justify-between bg-green-200 text-white rounded-[15] px-2 py-3">
            <div className="flex items-center">
              <span className="flex ml-2 text-lg font-semibold text-black">
                Aadhar Card{" "}
                <TiChevronRight className="w-8 h-8 text-green-500" />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListPage;
