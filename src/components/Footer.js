import React from "react";
import { FoooterSocialMediaLinks, belowFooter, browsers, imprints, usefulLinks } from "./Utils";
const Footer = () => {

    const renderList = (title, items) => (
        <div>
            {title && (
                <h2 className="mb-6 text-sm font-semibold text-[#B6B4B9] w-full flex flex-col items-center">
                    {title}
                </h2>
            )}
            <ul className="text-[#F7FFFF] font-medium w-full flex flex-col items-center">
                {items.map((item, index) => (
                    <li key={index} className="mb-4">
                        <a href="#" className="">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );


    return (
        <footer className="bg-[#0F1824]">
            <div className="mx-auto w-full max-w-screen-2xl 320:py-10 py-32">
                <div className="md:flex md:justify-between md:items-start">

                    <div className="grid grid-cols-1 320:gap-12 320:justify-items-center">
                        {renderList("Useful Links", usefulLinks)}
                        {renderList("Browsers", browsers)}
                        {renderList("Imprints", imprints)}
                    </div>
                    
                    <div className="flex flex-col justify-center 320:items-center 320:mt-8">
                        <p className="text-[#B6B4B9] mb-4 mx-1 text-[20px]">Follow us </p>
                        <div class="flex mt-4 sm:justify-center sm:mt-0 gap-10">
                            {FoooterSocialMediaLinks.map((link, index) => (
                                <a href={link.href} className="text-white" key={index}>
                                    <svg className={`320:w-[28px] 425:w-[40px] ${link.class}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={link.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="md:flex md:justify-between md:items-start mt-10">
                    <div className="flex flex-col">
                        <p className="text-[#B6B4B9] mb-4 ml-1 text-lg">Sheraton House, Castle Park, Cambridge, CB3 0AX, United Kingdom
                        </p>
                        <p className="text-[#B6B4B9] mb-4 ml-1 text-lg">T: 01223 370012 | F: 01223 370040 | E: editors@pegasuspublishers.com
                        </p>
                    </div>
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <div className="flex mt-4 sm:justify-center sm:mt-0 gap-7">
                            <img src="assests\footer\logo.jpg" alt="First Logo" className="w-20 h-20" />
                            <img src="assests\footer\logo.jpg" alt="Second Logo" className="w-20 h-20" />
                        </div>
                    </div>
                </div>


                {/* line */}
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-sm text-[#B6B4B9] sm:text-center ml-2">
                        ©  1999 - 2020 Pegasus Elliot Mackenzie Publishers Ltd
                    </div>
                    <div className="flex">
                        {belowFooter.map((item, index) => (
                            <li key={index} className="mb-4">
                                <a href="#" className="text-white text-lg">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
