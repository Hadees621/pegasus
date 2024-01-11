import React from "react";

const BooksTab = ({ isActive, onClick }) => (
    <div
        className={`flex justify-center items-center 320:text-xl 2560:text-2xl 1024:text-[12px] 1024:py-1 cursor-pointer w-full 2560:py-6 ${isActive ? "border-b border-black text-black" : "border-b text-[#8F929E] border-[#DFDFDF]"
            }`}
        onClick={() => onClick("books")}
    >
        Books
    </div>
);

export default BooksTab;
