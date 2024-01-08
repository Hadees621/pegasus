import React from "react";

const AuthorsTab = ({ isActive, onClick }) => (
    <div className={`flex justify-center items-center text-2xl cursor-pointer w-full py-6 ${isActive ? "border-b border-black text-black" : "border-b text-[#8F929E] border-[#DFDFDF]"
        }`}
        onClick={() => onClick("authors")} >
        Authors
    </div >
);

export default AuthorsTab;
