import React, { useState, useEffect, useRef } from "react";
import MegaMenuBooks from "./comp/MegaMenuBooks";

const Header = ({ setIsMegaMenuOpen, isMegaMenuOpen }) => {
    const [isBookActive, setIsBookActive] = useState(false);
    const megaMenuRef = useRef(null);

    const handleBooksClick = () => {
        setIsMegaMenuOpen(!isMegaMenuOpen);
        setIsBookActive(!isBookActive);
    };

    const handleClickOutside = (event) => {
        if (
            megaMenuRef.current &&
            !megaMenuRef.current.contains(event.target) &&
            !event.target.classList.contains("books-link")
        ) {
            setIsMegaMenuOpen(false);
            setIsBookActive(false);
        }
    };


    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isBookActive, isMegaMenuOpen]);



    return (
        <>
            <div className="h-[80px] bg-[#EAEBEE] flex items-center justify-end">
                <p className="text-xl 1024:text-lg font-fairplay pr-5 md:pr-16 1024:pr-16 1440:pr-36 2560:pr-96">
                    Sign up | Log in
                </p>
            </div>

            <nav className="bg-white border-gray-200">
                <div className="flex flex-wrap justify-between items-center px-5 md:px-10 xl:px-36 2xl:px-96 p-4">
                    <div>
                        <div
                            id="mega-menu-full-image"
                            className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "hidden" : "block"
                                }`}
                        >
                            <ul className="flex 1440:space-x-4 2560:space-x-8 1024:space-x-4 font-fairplay 1440:text-xl 1024:text-base font-normal">
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
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 21 21">
                                <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <circle cx="8.5" cy="8.5" r="5" />
                                    <path d="M17.571 17.5L12 12" />
                                </g>
                            </svg>
                        </div>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256">
                                <path fill="currentColor"
                                    d="M178 36c-21.44 0-39.92 10.19-50 27.07C117.92 46.19 99.44 36 78 36a58.07 58.07 0 0 0-58 58c0 28.59 18 58.47 53.4 88.79a333.81 333.81 0 0 0 52.7 36.73a4 4 0 0 0 3.8 0a333.81 333.81 0 0 0 52.7-36.73C218 152.47 236 122.59 236 94a58.07 58.07 0 0 0-58-58m-50 175.42C114 203.46 28 152.07 28 94a50.06 50.06 0 0 1 50-50c21.11 0 38.85 11.31 46.3 29.51a4 4 0 0 0 7.4 0C139.15 55.31 156.89 44 178 44a50.06 50.06 0 0 1 50 50c0 58-86 109.46-100 117.42" />
                            </svg>
                        </div>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
                                <g transform="translate(20 0) scale(-1 1)">
                                    <g fill="currentColor">
                                        <path
                                            d="M3.712 2.5H2.5a.5.5 0 0 1 0-1h1.603a.5.5 0 0 1 .485.379l1.897 7.6a.5.5 0 0 1-.97.242z" />
                                        <path fill-rule="evenodd"
                                            d="M15.495 7.5h-7.99c-.15 0-.3.017-.447.05A2.02 2.02 0 0 0 5.55 9.969l.783 3.461A2.008 2.008 0 0 0 8.29 15h6.422a2.01 2.01 0 0 0 1.956-1.57l.783-3.462A2.012 2.012 0 0 0 15.495 7.5M7.283 8.525a.992.992 0 0 1 .223-.025h7.989a1.013 1.013 0 0 1 .98 1.247l-.784 3.462a1.009 1.009 0 0 1-.98.791H8.29c-.468 0-.875-.328-.98-.791l-.783-3.462a1.02 1.02 0 0 1 .757-1.222"
                                            clip-rule="evenodd" />
                                        <path
                                            d="M17 16.75a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m-7 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0" />
                                    </g>
                                </g>
                            </svg>
                        </div>


                        <button className="mt-6 h-12 w-44 border border-[#B79248] rounded-full transition duration-300 ease-in-out bg-transparent hover:bg-[#B79248] text-[#B79248] hover:text-white focus:outline-none">
                            Submit Online
                        </button>
                    </div>
                    <div className="lg:hidden 320:ml-36 425:ml-48 768:ml-[530px] block">
                        <button>
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

                <MegaMenuBooks isMegaMenuOpen={isMegaMenuOpen} megaMenuRef={megaMenuRef} />

            </nav>
        </>
    );
};

export default Header;
