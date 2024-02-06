import React, { useState } from "react";
import Banner from "../../../components/Banner";
import EventSection from "./EventsSection";

const Section = () => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <>
            <Banner title="Events" subtitle="Home — Events" />

            <div className="mx-0 1024:flex 1024:justify-evenly 1024:mx-40 xl:mx-52 1535:mx-[350px] py-3 2000:py-10">
                <div className="grid gap-1 w-full 1024:flex" >
                    {months.map((month, index) => (
                        <div className="flex justify-center items-center" key={index}>

                            <p className="text-[14px] 2000:text-[20px] cursor-pointer ">{month}</p>
                            {index !== months.length - 1 && <p className="text-[6px] 2000:text-[20px] mx-2 hidden 1024:block">|</p>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-center 1024:flex-row 1440:flex-row 1024:mt-0 1024:gap-2 1440:mt-0 1024:mx-40 xl:mx-52 2560:mx-96 2000:py-20 py-8 mx-3 375:mx-5">

                <div className="flex items-center justify-center 2560:h-16 2560:w-[15%] 1024:w-[25%] 1440:w-[30%] border-black 1024:justify-start gap-2">
                    <p className="text-[35px] 1024:text-xs 1440:text-[15px] 2000:text-[60px] font-fairplay text-[#B79248]">February</p>
                </div>

                <div class="flex relative group">
                    <div className="border">
                        <button className="flex items-center justify-center gap-12 w-max 1024:px-2 1024:py-1 border-[#D4D4D8]">
                            <p className="text-[15px] 1024:text-[13px] 1440:text-[15px] 2560:text-[22px] font-fairplay p-2">Sort by</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="1024:w-5 1440:w-6 2560:w-8">
                                    <g transform="rotate(180 12 12)">
                                        <path fill="currentColor" d="m16.854 13.647l-4.5-4.5a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 .707.707L12 10.207l4.146 4.147a.498.498 0 0 0 .707 0a.5.5 0 0 0 0-.707" />
                                    </g>
                                </svg>
                                <div />
                            </div>
                        </button>
                        <div class="hidden absolute w-max p-4 group-hover:block gap-8 text-[12px] 2000:text-[18px] border">
                            <p>Date ascending</p>
                            <p>Date descending</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="1024:mx-36 xl:mx-48 2000:mx-80">

                <div className='grid grid-cols-3 320:grid-cols-1 1024:grid-cols-3 mb-52 320:mb-16 gap-5 mx-3'>
                    {Array.from({ length: 7 }, (_, index) => (
                        <EventSection
                            key={index}
                            imageSrc="assests/section/events.png"
                            date="20"
                            month="Mar"
                            title="Event title- Lorem"
                            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore"
                            location="Location — 00:00 pm"
                        />
                    ))}
                </div>

            </div>
        </>
    );
};

export default Section;
