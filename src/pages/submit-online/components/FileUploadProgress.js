import React from "react";

const FileUploadProgress = ({ filename, progress }) => {
    return (
        <div className="relative mb-11 pt-1 1024:mb-6 2000:mb-16 flex items-center justify-between">
            <div className="w-[90%]">
                <div className="mb-2 flex items-center justify-between text-xs">
                    <div className="text-gray-600">{filename}</div>
                    <div className="text-gray-600">{`${progress}%`}</div>
                </div>
                <div className="flex h-2 overflow-hidden rounded bg-gray-100 text-[6px] relative">
                    <div style={{ width: `${progress}%` }} className="bg-[#15344C] rounded-l-xl"></div>
                </div>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-7 w-7 text-white bg-black rounded-3xl cursor-pointer p-1"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </div>
    );
};

export default FileUploadProgress;
