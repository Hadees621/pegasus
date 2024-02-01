import React, { useState, useEffect, useRef } from "react";
import NavIcons from "./header-components/NavIcons";
import MobileMenu from "./header-components/MobileMenu";
import MegaMenuBooks from "./header-components/MegaMenuBooks";
import SearchMegaMenu from "./header-components/SearchMegaMenu";
import { Link } from "react-router-dom";
import AuthStrip from "../AuthStrip";

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
        { label: "Authors", to: "/authors" },
        { label: "About us", to: "/about" },
        { label: "Features", to: "/features" },
        { label: "Submissions", to: "/submissions" },
    ];

    return (
        <>

            <AuthStrip />

            <nav className="bg-white border-gray-200">
                <div className="flex flex-wrap justify-between items-center px-5 md:px-10 1024:px-40 xl:px-52 2560:px-96 py-[3px]">
                    {isSearchMegaMenuOpen ? (
                        <div className="bg-[#F3F4F3] 320:h-[40px] 2560:h-[50px] p-4 flex items-center w-full 1024:h-[20px] 1024:my-2 1024:mx-[210px] 2560:mx-[440px] 2560:my-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="2560:w-6 h-6 mr-2 text-gray-500 1024:w-4"
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
                                    className="2560:w-6 h-6 text-gray-500 hover:text-gray-700 1024:w-4"
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
                                    <ul className="flex 1440:space-x-6 2560:space-x-9 1024:space-x-6 font-fairplay 2560:text-[23px] 1440:text-[12px] 1024:text-[8px] font-normal 320:hidden lg:flex">
                                        {navigationLinks.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    to={link.to}
                                                    className={`text-black ${link.className} ${isBookActive ? "text-[#B79248]" : ""} hover:text-[#B79248]`}
                                                    onClick={link.onClick}
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                                <Link to="/" className="logo-link">
                                    <img
                                        className="lg:hidden h-[65px] w-[130px] my-2"
                                        src="assests/nav/navlogo.png"
                                        alt="Logo"
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link to="/" className="logo-link">
                                    <img
                                        className="hidden 1024:flex 1024:h-[40px] 1024:w-[70px] 1440:h-[60px] 1440:w-[110px] 2560:h-[110px] 2560:w-[190px] my-2"
                                        src="assests/nav/navlogo.png"
                                        alt="Logo"
                                    />
                                </Link>
                            </div>
                            <div className="hidden 1024:flex items-center 1440:gap-10 2560:gap-16 1024:gap-6">
                                <NavIcons handleSearchClick={handleSearchClick} />

                                <Link to="/submit-online" className="logo-link">
                                    <button className="mt-6 lg:mt-0 2560:h-12 2560:w-48 2560:text-[20px] border border-[#B79248] rounded-full transition duration-300 ease-in-out bg-transparent hover:bg-[#B79248] text-[#B79248] hover:text-white focus:outline-none 1024:h-[23px] 1024:w-[90px] 1024:text-[8.5px] 1440:h-[30px] 1440:w-[110px] 1440:text-[10.5px] font-fairplay">
                                        Submit Online
                                    </button>
                                </Link>

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
