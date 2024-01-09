import React, { useState } from "react";
import Footer from "../../components/Footer";

const SearchResultsMenu = () => {
    const [activeTab, setActiveTab] = useState("books");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="mb-96">
                <div className={`flex flex-col items-center py-8`}>
                    <p className="text-5xl font-fairplay py-10 font-normal">Search results</p>
                    <div className="bg-[#F3F4F3] h-[55px] p-4 flex items-center w-[35%] my-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 mr-2 text-gray-500"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 bg-transparent focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex items-center 1024:px-10 320:p-5 1440:px-36 2560:px-96 gap-4">
                    <div className="flex-grow border-t border-[#8F9191]" />
                    <div
                        onClick={() => handleTabClick("books")}
                        className={`text-[#5D6162] flex 320:text-lg 1024:text-xl font-roboto pl-4 cursor-pointer py-2 ${activeTab === "books" ? "text-[#B79248] border-b border-[#B79248]" : ""
                            }`}
                    >
                        <p className="font-fairplay mr-1 text-xl">4</p> Books
                    </div>
                    <div
                        onClick={() => handleTabClick("authors")}
                        className={`text-[#5D6162] 320:text-lg 1024:text-xl font-roboto pr-4 cursor-pointer py-2 flex ${activeTab === "authors" ? "text-[#B79248] border-b border-[#B79248]" : ""
                            }`}
                    >
                        <p className="font-fairplay mr-1 text-xl">10</p> Authors
                    </div>
                    <div className="flex-grow border-t border-[#8F9191]" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SearchResultsMenu;
