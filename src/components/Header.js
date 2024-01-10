import React, { useState, useEffect, useRef } from "react";
import NavIcons from "./comp/header-components/NavIcons";
import MobileMenu from "./comp/header-components/MobileMenu";
import MegaMenuBooks from "./comp/header-components/MegaMenuBooks";
import SearchMegaMenu from "./comp/header-components/SearchMegaMenu";

const Header = ({ setIsMegaMenuOpen, isMegaMenuOpen, setApplyBlur }) => {
    const [isSearchMegaMenuOpen, setIsSearchMegaMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [OpenMobileMenu, setOpenMobileMenu] = useState(false);
    const [isBookActive, setIsBookActive] = useState(false);
    const megaMenuRef = useRef(null);

    const handleCrossClick = () => {
        setIsSearchMegaMenuOpen(false);
        setApplyBlur(false)

    };

    const handleSearchClick = () => {
        setIsSearchMegaMenuOpen(!isSearchMegaMenuOpen);
        setIsMegaMenuOpen(false);
        setIsBookActive(false);
        setIsMobileMenuOpen(false);
        setApplyBlur(!false)
    };

    const handleMobileMenuToggle = () => {
        setOpenMobileMenu(!OpenMobileMenu);
        setIsMegaMenuOpen(false);
    };

    const handleBooksClick = () => {
        setIsBookActive(!isBookActive);
        setIsMegaMenuOpen(!isMegaMenuOpen);
        setIsMobileMenuOpen(true);
        setIsSearchMegaMenuOpen(false);
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
    ];

    return (
        <>
            <div className="1024:h-[28px] 1440:h-[50px] 2560:h-[80px] bg-[#EAEBEE] flex items-center justify-end">
                <p className="text-xl 1024:text-[8px] 1440:text-[12px] 2560:text-[21px] font-fairplay pr-5 md:pr-16 1024:pr-40 1440:pr-52 2560:pr-96">
                    Sign up | Log in
                </p>
            </div>

            <nav className="bg-white border-gray-200">
                <div className="flex flex-wrap justify-between items-center px-5 md:px-10 1024:px-40 xl:px-52 2xl:px-96 py-[3px]">
                    {isSearchMegaMenuOpen ? (
                        <div className="bg-[#F3F4F3] h-[50px] p-4 flex items-center w-full 1024:mx-[210px] 2560:mx-[440px] my-6">
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
                                    <ul className="flex 1440:space-x-6 2560:space-x-8 1024:space-x-6 font-fairplay 2560:text-[23px] 1440:text-[12px] 1024:text-[8px] font-normal 320:hidden lg:flex">
                                        <li>
                                            <a
                                                href="#"
                                                className={`text-black books-link ${isBookActive ? "text-[#B79248]" : ""
                                                    } hover:text-[#B79248]`}
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
                                <img
                                    className="lg:hidden h-[65px] w-[130px]"
                                    src="assests/nav/navlogo.png"
                                    alt="Logo"
                                />
                            </div>
                            <div>
                                <img
                                    className="hidden 1024:flex 1024:h-[40px] 1024:w-[70px] 1440:h-[60px] 1440:w-[110px] 2560:h-[110px] 2560:w-[190px]"
                                    src="assests/nav/navlogo.png"
                                    alt="Logo"
                                />
                            </div>
                            <div className="hidden 1024:flex items-center 1440:gap-10 2560:gap-16 1024:gap-6">
                                <NavIcons handleSearchClick={handleSearchClick} />

                                <button className="mt-6 lg:mt-0 2560:h-12 2560:w-48 2560:text-[20px] border border-[#B79248] rounded-full transition duration-300 ease-in-out bg-transparent hover:bg-[#B79248] text-[#B79248] hover:text-white focus:outline-none 1024:h-[23px] 1024:w-[90px] 1024:text-[8.5px] 1440:h-[30px] 1440:w-[110px] 1440:text-[10.5px] font-fairplay">
                                    Submit Online
                                </button>
                            </div>
                        </>
                    )}
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
                    handleMobileMenuToggle={handleMobileMenuToggle}
                    isSearchMegaMenuOpen={isSearchMegaMenuOpen}
                    setIsSearchMegaMenuOpen={setIsSearchMegaMenuOpen}
                />
                <MegaMenuBooks
                    isMegaMenuOpen={isMegaMenuOpen}
                    megaMenuRef={megaMenuRef}
                />
                <SearchMegaMenu
                    isSearchMegaMenuOpen={isSearchMegaMenuOpen}
                    setIsMegaMenuOpen={setIsMegaMenuOpen}
                    setIsBookActive={setIsBookActive}
                    handleSearchClick={handleSearchClick}
                />
            </nav>
        </>
    );
};

export default Header;
