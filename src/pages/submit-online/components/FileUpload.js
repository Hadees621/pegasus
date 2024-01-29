import React from "react";

const FileUpload = ({ label, onClick, onChange }) => {
    return (
        <div className="mb-8 flex justify-between items-center">
            <>
                <label
                    className="bg-[#15344C] text-white text-[9px] px-3 py-2 1440:px-8 1440:py-[12px] rounded-3xl cursor-pointer 1440:text-[12px] font-fairplay"
                    htmlFor="fileUploadButton"
                    onClick={onClick}
                >
                    {label}
                </label>
                <input
                    type="file"
                    className="hidden"
                    id="fileUploadButton"
                    onChange={onChange}
                />
            </>
            <h1 className="text-[#5D6162] text-[9px] 1440:text-[13px]">( 1 file only in PDF or Word format)</h1>
        </div>
    );
};

export default FileUpload;
