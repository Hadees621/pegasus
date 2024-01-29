import React from "react";

const FileUpload = ({ label, onClick, onChange }) => {
    return (
        <div className="mb-8 flex justify-between items-center">
            <>
                <label
                    className="bg-[#15344C] text-white px-8 py-[12px] rounded-3xl cursor-pointer text-[12px] font-fairplay"
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
            <h1 className="text-[#5D6162] text-[13px]">( 1 file only in PDF or Word format)</h1>
        </div>
    );
};

export default FileUpload;
