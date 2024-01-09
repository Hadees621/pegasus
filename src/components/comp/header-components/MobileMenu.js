import React, { useState } from "react";
import NavIcons from "./NavIcons";
import BooksTab from "./BooksTab";
import AuthorsTab from "./AuthorsTab";

const MobileMenu = ({ links, isBookActive, handleBooksClick, isOpen, onClose, handleMobileMenuToggle }) => {
    const [isMobileSearchMegaMenuOpen, setIsMobileSearchMegaMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("books");

    const handleMobileSearchClick = () => {
        setIsMobileSearchMegaMenuOpen(!isMobileSearchMegaMenuOpen);
    }

    const handleCrossClick = () => {
        handleMobileMenuToggle();
        setIsMobileSearchMegaMenuOpen(false)
    };
    return (
        <div className={`flex flex-col items-center w-full lg:hidden my-4 gap-6 ${isOpen ? "block" : "hidden"}`}>
            {(isMobileSearchMegaMenuOpen) ?
                (
                    <>
                        <div className="bg-[#F3F4F3] h-[50px] p-4 flex items-center 320:w-[90%] 768:w-[60%] border">
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
                            <button onClick={handleCrossClick} className="ml-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 text-gray-500 hover:text-gray-700"
                                >
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex tabs 320:gap-0 gap-10 w-full mx-2">
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
                                <div className="pt-4 pb-4 gap-4 border w-full">
                                    <ul className="grid 375:mx-4">
                                        <li>
                                            <div className="hover:bg-[#EDEFF1] py-2 320:px-4 w-full">
                                                <span className="font-fairplay text-gray-800 text-lg">Book title Lorem ipsum </span>{" "}
                                                — <span className="font-roboto text-[#B79248] text-base">Author name</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="hover:bg-[#EDEFF1] py-2 320:px-4 w-full">
                                                <span className="font-fairplay text-gray-800 text-lg">Book title Lorem ipsum </span>{" "}
                                                — <span className="font-roboto text-[#B79248] text-base">Author name</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="hover:bg-[#EDEFF1] py-2 320:px-4 w-full">
                                                <span className="font-fairplay text-gray-800 text-lg">Book title Lorem ipsum </span>{" "}
                                                — <span className="font-roboto text-[#B79248] text-base">Author name</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="hover:bg-[#EDEFF1] py-2 320:px-4 w-full">
                                                <span className="font-fairplay text-gray-800 text-lg">Book title Lorem ipsum </span>{" "}
                                                — <span className="font-roboto text-[#B79248] text-base">Author name</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="hover:bg-[#EDEFF1] py-2 320:px-4 w-full">
                                                <span className="font-fairplay text-gray-800 text-lg">Book title Lorem ipsum </span>{" "}
                                                — <span className="font-roboto text-[#B79248] text-base">Author name</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="hover:bg-[#EDEFF1] py-2 320:px-4 w-full">
                                                <span className="font-fairplay text-gray-800 text-lg">Book title Lorem ipsum </span>{" "}
                                                — <span className="font-roboto text-[#B79248] text-base">Author name</span>
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
                                <div className="pt-4 pb-4 gap-4 grid w-full px-2">
                                    <ul className="grid 375:mx-4">
                                        <li>
                                            <div className="flex justify-start hover:bg-[#EDEFF1] p-4 pl-8 w-full marker:none">
                                                <p className="font-roboto text-[#B79248] text-base">Author name</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-start hover:bg-[#EDEFF1] p-4 pl-8 w-full marker:none">
                                                <p className="font-roboto text-[#B79248] text-base">Author name</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-start hover:bg-[#EDEFF1] p-4 pl-8 w-full marker:none">
                                                <p className="font-roboto text-[#B79248] text-base">Author name</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-start hover:bg-[#EDEFF1] p-4 pl-8 w-full marker:none">
                                                <p className="font-roboto text-[#B79248] text-base">Author name</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-start hover:bg-[#EDEFF1] p-4 pl-8 w-full marker:none">
                                                <p className="font-roboto text-[#B79248] text-base">Author name</p>
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
                    </>
                ) : (
                    <>
                        <ul className="flex flex-col space-y-4 font-fairplay text-lg 768:text-2xl font-medium mt-3 items-center justify-center w-full">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className={`text-black ${link.className} ${isBookActive ? "text-[#B79248]" : ""
                                            } hover:text-[#B79248]`}
                                        onClick={(event) => {
                                            if (link.label === "Books") {
                                                handleBooksClick();
                                                onClose();
                                            } else {
                                                link.onClick && link.onClick(event);
                                                onClose();
                                            }
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-8">
                            <NavIcons handleMobileSearchClick={handleMobileSearchClick} />
                        </div>

                        <button className="mt-6 lg:mt-0 h-12 w-44 border border-[#B79248] rounded-full transition duration-300 ease-in-out bg-transparent hover:bg-[#B79248] text-[#B79248] hover:text-white focus:outline-none">
                            Submit Online
                        </button>
                    </>
                )}

        </div>
    );
};

export default MobileMenu;
