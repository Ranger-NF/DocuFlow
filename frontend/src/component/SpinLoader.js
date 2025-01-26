import React from "react";

const Spinner = () => {
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative"></div>
                <div className="animate-spin rounded-full h-16 w-16 border-4  border-blue-500 bordert-t-tansparent"></div>
                <span className="absolute inset-0 fllex items-center justify-center font-bold text-blue-500">Loading</span>
        </div>
    );
};

export default Spinner