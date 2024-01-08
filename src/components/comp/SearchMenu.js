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
            <div className="search-mega-menu flex flex-col items-center py-8">

                <div className="flex tabs 1024:w-[50%] 2560:w-[35%]">
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
                        <div className="pt-4 pb-10 gap-8 grid 1024:w-[50%] 2560:w-[35%]">
                            <ul className="grid">
                                <li>
                                    <div className="hover:bg-[#EDEFF1] py-4 px-2">
                                        <span className="font-fairplay text-gray-800 text-xl">Book title Lorem ipsum</span>{" "}
                                        — <span className="font-roboto text-[#B79248] text-lg">Author name</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] py-4 px-2">
                                        <span className="font-fairplay text-gray-800 text-xl">Book title Lorem ipsum</span>{" "}
                                        — <span className="font-roboto text-[#B79248] text-lg">Author name</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] py-4 px-2">
                                        <span className="font-fairplay text-gray-800 text-xl">Book title Lorem ipsum</span>{" "}
                                        — <span className="font-roboto text-[#B79248] text-lg">Author name</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] py-4 px-2">
                                        <span className="font-fairplay text-gray-800 text-xl">Book title Lorem ipsum</span>{" "}
                                        — <span className="font-roboto text-[#B79248] text-lg">Author name</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] py-4 px-2">
                                        <span className="font-fairplay text-gray-800 text-xl">Book title Lorem ipsum</span>{" "}
                                        — <span className="font-roboto text-[#B79248] text-lg">Author name</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="flex items-center">
                                <a
                                    href="#"
                                    className="text-black text-lg font-fairplay border-b border-black m-5 mr-1"
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
                        <div className="pt-4 pb-10 gap-8 grid 1024:w-[50%] 2560:w-[35%]">
                            <ul>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] py-4 px-2 marker:none">
                                        <p className="font-roboto text-[#B79248] text-lg">Author name</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] py-4 px-2 marker:none">
                                        <p className="font-roboto text-[#B79248] text-lg">Author name</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] py-4 px-2 marker:none">
                                        <p className="font-roboto text-[#B79248] text-lg">Author name</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] py-4 px-2 marker:none">
                                        <p className="font-roboto text-[#B79248] text-lg">Author name</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:bg-[#EDEFF1] py-4 px-2 marker:none">
                                        <p className="font-roboto text-[#B79248] text-lg">Author name</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="flex items-center">
                                <a
                                    href="#"
                                    className="text-black text-lg font-fairplay border-b border-black m-5 mr-1"
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
