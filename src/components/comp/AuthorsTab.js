import React from "react";

const AuthorsTab = ({ isActive, onClick }) => (
    <div className={`flex justify-center items-center 320:text-xl text-2xl cursor-pointer w-full py-6 ${isActive ? "border-b border-black text-black" : "border-b text-[#8F929E] border-[#DFDFDF]"
        }`}
        onClick={() => onClick("authors")} >
        Authors
    </div >
);

export default AuthorsTab;
