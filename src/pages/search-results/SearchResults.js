import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { bookData } from "./utils";

const SearchResults = () => {
    const [activeTab, setActiveTab] = useState("authors");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const renderBooksContent = () => (
        <div className="grid md:grid-cols-3 lg:grid-cols-6 w-full justify-center 320:p-5 1024:p-0 1024:px-40 1440:px-36 2560:px-96">
            {bookData.map((book, index) => (
                <div key={index} className="m-4 p-3 text-center 768:m-0 1440:m-1">
                    <img className="320:h-[420px] 1024:h-[140px] 1024:w-[160px] 1440:h-[210px] 1440:w-[150px] 2560:w-[240px] 2560:h-[380px]" src={book.imageSrc} alt={`Book Image ${index + 1}`} />
                    <div className='w-full text-start my-2'>
                        <h3 className="1024:text-[6px] 1440:text-[9px] 2560:text-[19px] font-medium font-fairplay">{book.title}</h3>
                        <p className="1024:text-[6px] 1440:text-[9px] 2560:text-[17px] text-[#B79248] font-roboto">{book.author}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderAuthorsContent = () => (
        <div className="grid md:grid-cols-3 lg:grid-cols-5 1024:gap-x-2 1024:gap-y-2.5 2560:gap-y-6 2560:gap-x-6 1440:gap-x-5 gap-y-7 320:p-5 1024:py-0 1024:px-52 1440:px-72 2560:px-[550px] 768:gap-x-4 mb-44 2560:py-9">
            {[...Array(9)].map((_, index) => (
                <div
                    key={index}
                    className="flex justify-center items-center h-16 1024:h-[27px] 1440:h-[35px] 2560:h-[65px]  1024:text-[12px] border rounded-sm border-black text-[#8F9191] text-lg transition duration-300 ease-in-out hover:bg-[#EEF1F2] hover:font-extrabold hover:shadow-lg hover:text-black hover:border-none"
                >
                    <p className="font-normal font-roboto 1024:text-[8px] 1440:text-[11px] 2560:text-[20px]">Author Name</p>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <Header />
            <div className="mb-20">
                <div className={`flex flex-col items-center py-8 1024:py-0`}>
                    <p className="text-5xl 320:text-3xl 1024:text-[20px] 1440:text-[31px] 1024:py-3 1440:py-6 2560:text-[53px] 2560:py-14 font-fairplay py-10 font-normal">Search results</p>
                    <div className="bg-[#F3F4F3] 2560:h-[55px] p-4 1024:p-1 flex items-center 1024:w-[30%] 1024:h-[23px] 1440:h-[31px] 1024:my-0 1440:w-[33%] 2560:w-[35%] 320:w-[85%] my-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 1024:w-3 1440:w-4 2560:w-6 ml-2 text-gray-500"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 ml-2 1024:text-[8px] 1440:text-[13px] 2560:text-[20px] bg-transparent focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex items-center 320:p-5 1024:p-0 1024:px-40 1440:px-36 2560:px-96 gap-4 1024:gap-0 1024:my-6">
                    <div className="flex-grow border-t border-[#8F9191]" />
                    <div
                        onClick={() => handleTabClick("books")}
                        className={`text-[#5D6162] flex 320:text-lg 1024:text-[10px] 2560:text-[20px] 2560:py-2 font-roboto px-4 cursor-pointer py-2 1024:py-0 1024:px- ${activeTab === "books" ? "text-[#B79248] border-b border-[#B79248]" : ""
                            }`}
                    >
                        <p className="font-fairplay mr-1 text-lg 1024:text-[9px] 2560:text-[20px]">4</p> Books
                    </div>
                    <div
                        onClick={() => handleTabClick("authors")}
                        className={`text-[#5D6162] 320:text-lg 1024:text-[10px] 2560:text-[20px] 2560:py-2 font-roboto 2560:px-4 cursor-pointer py-2 1024:py-0 flex ${activeTab === "authors" ? "text-[#B79248] border-b border-[#B79248]" : ""
                            }`}
                    >
                        <p className="font-fairplay mr-1 text-xl 1024:text-[9px] 2560:text-[20px]">10</p> Authors
                    </div>
                    <div className="flex-grow border-t border-[#8F9191]" />
                </div>
                {activeTab === "books" ? renderBooksContent() : null}
                {activeTab === "authors" ? renderAuthorsContent() : null}
            </div>
            <Footer />
        </>
    );
};

export default SearchResults;
