import React, { useRef, useEffect } from "react";

const FileUpload = ({ label }) => {
    const fileInputRef = useRef(null);

    useEffect(() => {
        fileInputRef.current = document.getElementById("fileUploadButton");
    }, []);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log("Selected File:", selectedFile);
    };

    return (
        <div className="mb-8 flex justify-between items-center 1024:mb-4 2000:mb-12">
            <>
                <label
                    className="bg-[#15344C] text-white text-[9px] 1024:text-[7px] px-3 py-2 2000:px-8 2000:py-[12px] rounded-3xl cursor-pointer 2000:text-[16px] font-fairplay"
                    htmlFor="fileUploadButton"
                    onClick={handleButtonClick}
                >
                    {label}
                </label>
                <input
                    type="file"
                    className="hidden"
                    id="fileUploadButton"
                    onChange={handleFileChange}
                />
            </>
            <h1 className="text-[#5D6162] text-[9px] 1024:text-[8px] 2000:text-[16px]">( 1 file only in PDF or Word format)</h1>
        </div>
    );
};

export default FileUpload;