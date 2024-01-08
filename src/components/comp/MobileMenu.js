import React from "react";
import NavIcons from "./NavIcons";

const MobileMenu = ({ links, isBookActive, handleBooksClick, isOpen, onClose, handleSearchClick }) => {

    return (
        <div className={`flex flex-col items-center w-full lg:hidden my-4 gap-12 ${isOpen ? "block" : "hidden"}`}>
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
                <NavIcons handleSearchClick={handleSearchClick} />
            </div>

            <button className="mt-6 lg:mt-0 h-12 w-44 border border-[#B79248] rounded-full transition duration-300 ease-in-out bg-transparent hover:bg-[#B79248] text-[#B79248] hover:text-white focus:outline-none">
                Submit Online
            </button>
        </div>
    );
};

export default MobileMenu;
