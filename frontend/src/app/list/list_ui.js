import React from 'react';

function ListPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white">
      <div className="container mx-auto p-7">
        <div className="flex items-center mb-4">
          <input type="text" placeholder="Search for documents..." className="border rounded px-4 py-2 ml-2 w-full" />
        </div>
        <div className='place-items-center'>
          <button className="flex items-center justify-between bg-green-200 text-white rounded-[15] px-8 py-3">
            <div className="flex items-center">
              <span className="ml-2 text-lg font-semibold text-black">Aadhar Card</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListPage;