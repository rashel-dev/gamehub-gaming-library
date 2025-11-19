import React from "react";

const Loading = ({ message = "Loading..." }) => {
    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center">
            <div className="text-center">
                <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
                <h2 className="text-2xl font-bold mb-2">{message}</h2>
                <p className="text-gray-600">Please wait while we process your request.</p>
            </div>
        </div>
    );
};

export default Loading;
