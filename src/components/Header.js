import React, { useState, useEffect, useRef } from "react";
import MegaMenuBooks from "./comp/MegaMenuBooks";
import NavIcons from "./comp/NavIcons";
import MobileMenu from "./comp/MobileMenu";
import SearchMegaMenu from "./comp/SearchMenu";

const Header = ({ setIsMegaMenuOpen, isMegaMenuOpen }) => {
    const [isSearchMegaMenuOpen, setIsSearchMegaMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [OpenMobileMenu, setOpenMobileMenu] = useState(false);
    const [isBookActive, setIsBookActive] = useState(false);
    const megaMenuRef = useRef(null);



    const handleCrossClick = () => {
        setIsSearchMegaMenuOpen(false)
    };

    const handleSearchClick = () => {
        setIsSearchMegaMenuOpen(!isSearchMegaMenuOpen);
        setIsMegaMenuOpen(false);
        setIsBookActive(false);
        setIsMobileMenuOpen(false);
    };

    const handleMobileMenuToggle = () => {
        setOpenMobileMenu(!OpenMobileMenu)
        setIsMegaMenuOpen(false);
    };

    const handleBooksClick = () => {
        setIsBookActive(!isBookActive);
        setIsMegaMenuOpen(!isMegaMenuOpen);
        setIsMobileMenuOpen(true);
        setIsSearchMegaMenuOpen(false)
    };

    const handleClickOutside = (event) => {
        if (
            megaMenuRef.current &&
            !megaMenuRef.current.contains(event.target) &&
            !event.target.classList.contains("books-link")
        ) {
            setIsMegaMenuOpen(false);
            setIsBookActive(false);
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isBookActive, isMegaMenuOpen, isMobileMenuOpen]);

    const navigationLinks = [
        { label: "Books", className: "books-link", onClick: handleBooksClick },
        { label: "Authors", className: "" },
        { label: "About us", className: "" },
        { label: "Features", className: "" },
        { label: "Submissions", className: "" },
        { label: "Search", className: "search-link", onClick: handleSearchClick },
    ];

    return (
        <>
            <div className="h-[80px] bg-[#EAEBEE] flex items-center justify-end">
                <p className="text-xl 1024:text-lg font-fairplay pr-5 md:pr-16 1024:pr-16 1440:pr-36 2560:pr-96">
                    Sign up | Log in
                </p>
            </div>


            <nav className="bg-white border-gray-200">
                <div className="flex flex-wrap justify-between items-center px-5 md:px-10 xl:px-36 2xl:px-96 p-4">

                    {(isSearchMegaMenuOpen) ?
                        (
                            <div className="bg-[#F3F4F3] h-[50px] p-4 flex items-center w-full mx-[440px] my-6">
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
                                <button onClick={handleCrossClick} className="ml-2 borrer">
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
                        ) : (
                            <>
                                <div className="">
                                    <div
                                        id="mega-menu-full-image"
                                        className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1`}
                                    >
                                        <ul className="flex 1440:space-x-4 2560:space-x-8 1024:space-x-4 font-fairplay 1440:text-xl 1024:text-base font-normal 320:hidden lg:flex">
                                            <li>
                                                <a
                                                    href="#"
                                                    className={`text-black books-link ${isBookActive ? "text-[#B79248]" : ""} hover:text-[#B79248]`}
                                                    onClick={handleBooksClick}
                                                >
                                                    Books
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#" className="text-black hover:text-[#B79248]">
                                                    Authors
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-black hover:text-[#B79248]">
                                                    About us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-black hover:text-[#B79248]">
                                                    Features
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-black hover:text-[#B79248]">
                                                    Submissions
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <img className="lg:hidden h-[65px] w-[130px]" src="assests/nav/navlogo.png" alt="Logo" />
                                </div>
                                <div>
                                    <img
                                        className="hidden 1024:flex 1024:h-[70px] 1024:w-[120px] 1440:h-[90px] 1440:w-[160px] 2560:h-[100px] 2560:w-[180px]"
                                        src="assests/nav/navlogo.png"
                                        alt="Logo"
                                    />
                                </div>
                                <div className="hidden 1024:flex items-center 1440:gap-8 2560:gap-12 1024:gap-8">
                                    <NavIcons handleSearchClick={handleSearchClick} isSearchMegaMenuOpen={isSearchMegaMenuOpen} setIsSearchMegaMenuOpen={setIsSearchMegaMenuOpen} setIsMegaMenuOpen={setIsMegaMenuOpen} setIsBookActive={setIsBookActive} setIsMobileMenuOpen={setIsMobileMenuOpen} />
                                    <button className="mt-6 lg:mt-0 h-12 w-44 border border-[#B79248] rounded-full transition duration-300 ease-in-out bg-transparent hover:bg-[#B79248] text-[#B79248] hover:text-white focus:outline-none">
                                        Submit Online
                                    </button>
                                </div>
                            </>
                        )
                    }
                    <div className="lg:hidden 425:ml-48 768:ml-[30px] block">
                        <button onClick={handleMobileMenuToggle}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="w-8 h-8"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>

                </div>

                <MobileMenu
                    links={navigationLinks}
                    isBookActive={isBookActive}
                    handleBooksClick={handleBooksClick}
                    isOpen={OpenMobileMenu}
                    onClose={() => setIsMobileMenuOpen(false)}
                />
                <MegaMenuBooks isMegaMenuOpen={isMegaMenuOpen} megaMenuRef={megaMenuRef} />
                <SearchMegaMenu isSearchMegaMenuOpen={isSearchMegaMenuOpen} setIsMegaMenuOpen={setIsMegaMenuOpen} setIsBookActive={setIsBookActive} setIsMobileMenuOpen={setIsMobileMenuOpen} />

            </nav >


        </>
    );
};

export default Header;
