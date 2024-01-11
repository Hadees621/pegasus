import React from "react";
import { FoooterSocialMediaLinks, belowFooter, browsers, imprints, usefulLinks } from "./Utils";
const Footer = () => {

    const renderList = (title, items) => (
        <div>
            {title && (
                <h2 className="mb-6 text-sm font-normal font-roboto text-[#B6B4B9] w-full flex flex-col items-center 1024:items-start 1024:text-[9px] 1440:text-[11px] 1024:mb-3 1440:mb-2 2560:text-[18px]">
                    {title}
                </h2>
            )}
            <ul className="text-[#F7FFFF] font-medium w-full flex flex-col items-center 1024:items-start 1024:text-[7px] 1440:text-[11px] 2560:text-[18px] font-fairplay">
                {items.map((item, index) => (
                    <li key={index} className="mb-4 1024:mb-2 1440:mb-2">
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
            <div className="mx-auto w-full 1024:px-40 320:p-5 xl:px-52 2xl:px-96 320:py-10 1024:py-10 1440:py-20 2560:py-44 1024:text-center justify-center items-center flex flex-col">

                <div className="1024:grid 1024:grid-cols-2 1024:w-full">

                    <div className="grid grid-cols-1 768:grid-cols-3 320:gap-12 320:justify-items-center 1024:items-start 1440:gap-24 2560:gap-36 1024:w-max 1024:gap-10 font-fairplay">
                        {renderList("Useful Links", usefulLinks)}
                        {renderList("Browsers", browsers)}
                        {renderList("Imprints", imprints)}
                    </div>

                    <div className="flex flex-col 320:items-center 320:mt-8 1024:mt-0 1024:items-end">

                        <div className="text-start 1024:mr-4">
                            <p className="text-[#B6B4B9] mb-4 mx-1 text-[20px] 1024:text-[7px] 1440:text-[12px] 2560:text-[20px] 1440:mb-2">Follow us </p>
                            <div class="flex mt-4 sm:justify-center sm:mt-0 gap-10 1024:gap-4 1440:gap-6 2560:gap-10 items-center justify-center">
                                {FoooterSocialMediaLinks.map((link, index) => (
                                    <a href={link.href} className="text-white" key={index}>
                                        <svg className={`320:w-[28px] 425:w-[40px] 1024:w-[20px] 1440:w-[24px] 2560:w-[38px] ${link.class}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d={link.path} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-10 px-2 1024:flex items-center 1024:w-full 1024:flex-1 1024:mt-0 2560:mb-6 2560:mt-7">
                    <div className="w-full flex flex-col gap-5 320:text-center 1024:items-start 1024:pt-2 2560:gap-4 1024:gap-0 2560:my-5">
                        <p className="text-[#B6B4B9] text-lg font-roboto 1024:text-[6px] 1024:leading-3 1024:tracking-widest 1440:text-[8px] 2560:text-[15px] 1440:leading-3 1440:tracking-widest">Sheraton House, Castle Park, Cambridge, CB3 0AX, United Kingdom
                        </p>
                        <p className="text-[#B6B4B9] text-lg font-roboto 1024:text-[6px] 1440:text-[8px] 2560:text-[15px] 1024:tracking-widest">T: 01223 370012  | F: 01223 370040 | E: editors@pegasuspublishers.com
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 py-5 320:items-center 768:flex-row 768:justify-center 1024:items-end 1024:mr-10">
                        <img src="assests\footer\f1.png" alt="First Logo" className="w-40 h-24 1024:w-24 1024:h-14 1440:w-28 1440:h-16 2560:w-40 2560:h-24" />
                        <img src="assests\footer\f2.png" alt="Second Logo" className="w-40 h-24 1024:w-24 1024:h-14 1440:w-28 1440:h-16 2560:w-40 2560:h-24" />
                    </div>
                </div>

                {/* line */}
                <hr className="my-9 border-[#FFFFFF] lg:my-2 border w-full 2560:mb-7" />

                <div className="flex flex-col gap-10 1024:flex-row justify-between w-full 1024:flex- 1024:px-3 items-center">
                    <div className="text-[15px] text-[#B6B4B9] text-center 1024:text-start 1024:w-max 1024:text-[6px] 1440:text-[9px] 2560:text-[15px] 1024:leading-3 1024:tracking-widest">
                        © 1999 - 2020 Pegasus Elliot Mackenzie Publishers Ltd
                    </div>
                    <div className="flex 320:flex-col 1024:flex-row gap-5 text-center items-center">
                        {belowFooter.map((item, index) => (
                            <li key={index} className="mb-4 list-none 1024:mb-0">
                                <a href="#" className="text-white text-lg 1024:text-[6px] 1440:text-[9px] 2560:text-[15px] 1024:leading-3">
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
