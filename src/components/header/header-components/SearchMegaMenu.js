import React, { useState } from "react";
import BooksTab from "./BooksTab";
import AuthorsTab from "./AuthorsTab";

const SearchMegaMenu = ({ isSearchMegaMenuOpen }) => {
    const [activeTab, setActiveTab] = useState("books");
    if (!isSearchMegaMenuOpen) {

        return null;
    }

    return (
        <>
            <div className="search-mega-menu flex flex-col items-center 2560:py-8 1024:py-2">

                <div className="flex tabs 1024:w-[30%] 2560:w-[35%]">
                    <BooksTab
                        isActive={activeTab === "books"}
                        onClick={(tab) => setActiveTab(tab)}
                    />
                    <AuthorsTab
                        isActive={activeTab === "authors"}
                        onClick={(tab) => setActiveTab(tab)}
                    />
                </div>

                {activeTab === "books" && (
                    <>
                        <div className="pt-4 pb-10 2560:gap-8 grid 1024:w-[30%] 1024:gap-2 1024:text 2560:w-[35%]">
                            <ul className="grid">
                                <li>
                                    <div className="hover:bg-[#EDEFF1] 2560:py-4 px-2 1024:py-1">
                                        <span className="font-fairplay text-gray-800 2560:text-xl 1024:text-[12px]">Book title Lorem ipsum</span>{" "}
                                        — <span className="font-roboto text-[#B79248] 2560:text-lg 1024:text-[12px]">Author name</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] 2560:py-4 px-2 1024:py-1">
                                        <span className="font-fairplay text-gray-800 2560:text-xl 1024:text-[12px]">Book title Lorem ipsum</span>{" "}
                                        — <span className="font-roboto text-[#B79248] 2560:text-lg 1024:text-[12px]">Author name</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] 2560:py-4 px-2 1024:py-1">
                                        <span className="font-fairplay text-gray-800 2560:text-xl 1024:text-[12px]">Book title Lorem ipsum</span>{" "}
                                        — <span className="font-roboto text-[#B79248] 2560:text-lg 1024:text-[12px]">Author name</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] 2560:py-4 px-2 1024:py-1">
                                        <span className="font-fairplay text-gray-800 2560:text-xl 1024:text-[12px]">Book title Lorem ipsum</span>{" "}
                                        — <span className="font-roboto text-[#B79248] 2560:text-lg 1024:text-[12px]">Author name</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] 2560:py-4 px-2 1024:py-1">
                                        <span className="font-fairplay text-gray-800 2560:text-xl 1024:text-[12px]">Book title Lorem ipsum</span>{" "}
                                        — <span className="font-roboto text-[#B79248] 2560:text-lg 1024:text-[12px]">Author name</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] 2560:py-4 px-2 1024:py-1">
                                        <span className="font-fairplay text-gray-800 2560:text-xl 1024:text-[12px]">Book title Lorem ipsum</span>{" "}
                                        — <span className="font-roboto text-[#B79248] 2560:text-lg 1024:text-[12px]">Author name</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="flex items-center">
                                <a
                                    href="#"
                                    className="text-black 2560:text-lg 1024:text-[12px] 1024:m-2 font-fairplay border-b border-black 2560:m-5 mr-1"
                                >
                                    See Results
                                </a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20"><path fill="black" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z" /></svg>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === "authors" && (
                    <>
                        <div className="pt-4 pb-10 gap-8 grid 1024:w-[30%] 1024:gap-2  2560:w-[35%]">
                            <ul>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] 2560:py-4 px-2 1024:py-1 marker:none">
                                        <p className="font-roboto text-[#B79248] 2560:text-lg 1024:text-[12px]">Author name</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] 2560:py-4 px-2 1024:py-1 marker:none">
                                        <p className="font-roboto text-[#B79248] 2560:text-lg 1024:text-[12px]">Author name</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] 2560:py-4 px-2 1024:py-1 marker:none">
                                        <p className="font-roboto text-[#B79248] 2560:text-lg 1024:text-[12px]">Author name</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] 2560:py-4 px-2 1024:py-1 marker:none">
                                        <p className="font-roboto text-[#B79248] 2560:text-lg 1024:text-[12px]">Author name</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="hover:bg-[#EDEFF1] 2560:py-4 px-2 1024:py-1 marker:none">
                                        <p className="font-roboto text-[#B79248] 2560:text-lg 1024:text-[12px]">Author name</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] 2560:py-4 px-2 1024:py-1 marker:none">
                                        <p className="font-roboto text-[#B79248] 2560:text-lg 1024:text-[12px]">Author name</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="flex items-center">
                                <a
                                    href="#"
                                    className="text-black 2560:text-lg 1024:text-[12px] 1024:m-2 font-fairplay border-b border-black 2560:m-5 mr-1"
                                >
                                    See Results
                                </a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20"><path fill="black" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z" /></svg>
                            </div>
                        </div>
                    </>
                )}
            </div >
        </>
    );
};

export default SearchMegaMenu;
