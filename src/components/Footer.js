import React from "react";
import { FoooterSocialMediaLinks, belowFooter, browsers, imprints, usefulLinks } from "./Utils";
const Footer = () => {

    const renderList = (title, items) => (
        <div>
            {title && (
                <h2 className="mb-6 text-sm font-normal font-roboto text-[#B6B4B9] w-full flex flex-col items-center 1024:items-start 1024:text-[9px] 1024:mb-3">
                    {title}
                </h2>
            )}
            <ul className="text-[#F7FFFF] font-medium w-full flex flex-col items-center 1024:items-start 1024:text-[7px] font-fairplay">
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
            {/* 1024:max-w-screen-768 */}
            <div className="mx-auto w-full 1024:px-40 320:p-5 1440:px-36 2560:px-96 320:py-10 1024:py-10 1024:text-center justify-center items-center flex flex-col">

                <div className="1024:grid 1024:grid-cols-2 1024:w-full">

                    <div className="grid grid-cols-1 768:grid-cols-3 320:gap-12 320:justify-items-center 1024:items-start 2560:gap-32 1024:w-max 1024:gap- font-fairplay">
                        {renderList("Useful Links", usefulLinks)}
                        {renderList("Browsers", browsers)}
                        {renderList("Imprints", imprints)}
                    </div>

                    <div className="flex flex-col 320:items-center 320:mt-8 1024:mt-0 1024:items-end">

                        <div className="text-start 1024:mr-4">
                            <p className="text-[#B6B4B9] mb-4 mx-1 text-[20px] 1024:text-[7px]">Follow us </p>
                            <div class="flex mt-4 sm:justify-center sm:mt-0 gap-10 1024:gap-4 items-center justify-center">
                                {FoooterSocialMediaLinks.map((link, index) => (
                                    <a href={link.href} className="text-white" key={index}>
                                        <svg className={`320:w-[28px] 425:w-[40px] 1024:w-[20px] ${link.class}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d={link.path} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-10 px-2 1024:flex items-center 1024:w-full 1024:flex-1 1024:mt-0">
                    <div className="w-full flex flex-col gap-5 320:text-center 1024:items-start 1024:pt-2 1024:gap-0">
                        <p className="text-[#B6B4B9] text-lg font-roboto 1024:text-[6px] 1024:leading-3 1024:tracking-widest">Sheraton House, Castle Park, Cambridge, CB3 0AX, United Kingdom
                        </p>
                        <p className="text-[#B6B4B9] text-lg font-roboto 1024:text-[6px] 1024:tracking-widest">T: 01223 370012  | F: 01223 370040 | E: editors@pegasuspublishers.com
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 py-5 320:items-center 768:flex-row 768:justify-center 1024:items-end 1024:mr-10">
                        <img src="assests\footer\f1.png" alt="First Logo" className="w-40 h-24 1024:w-24 1024:h-14" />
                        <img src="assests\footer\f2.png" alt="Second Logo" className="w-40 h-24 1024:w-24 1024:h-14" />
                    </div>
                </div>

                {/* line */}
                <hr className="my-9 border-[#FFFFFF] lg:my-2 border w-full" />

                <div className="flex flex-col gap-10 1024:flex-row justify-between w-full 1024:flex- 1024:px-3">
                    <div className="text-[15px] text-[#B6B4B9] text-center 1024:text-start 1024:w-max 1024:text-[6px] 1024:leading-3 1024:tracking-widest">
                        © 1999 - 2020 Pegasus Elliot Mackenzie Publishers Ltd
                    </div>
                    <div className="flex 320:flex-col 1024:flex-row gap-5 text-center ">
                        {belowFooter.map((item, index) => (
                            <li key={index} className="mb-4 list-none 1024:mb-0">
                                <a href="#" className="text-white text-lg 1024:text-[6px] 1024:leading-3">
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
