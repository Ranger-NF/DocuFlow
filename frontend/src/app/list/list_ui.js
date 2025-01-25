import React from 'react';

function ListPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white">
      <div className="container mx-auto p-4">
        <div className="flex items-center mb-4">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0"></path></svg>
          <input type="text" placeholder="Search for documents..." className="border rounded px-4 py-2 ml-2 w-full" />
        </div>

        <button className="flex items-center justify-between bg-green-400 text-white rounded-md px-4 py-3">
          <div className="flex items-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-2 4 2M4 12a8 8 0 0116 0c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1z"></path></svg>
            <span className="ml-2 text-lg font-semibold">Aadhar Card</span>
          </div>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      </div>
    </div>
  );
}

export default ListPage;