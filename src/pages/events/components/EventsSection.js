import React, { useState } from "react";

const EventSection = ({ imageSrc, date, month, title, description, location }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative p-5 768:p-10 1024:p-5 mt-4 ${isHovered ? 'bg-[#F2F2F4]' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transition: "background-color 0.3s" }}
        >
            <div className="1440:m-4 p-4 320:p-0 320:m-0 text-center 1440:px-2">
                <div className="w-full">
                    <img className="w-full object-cover" src={imageSrc} alt={`Section Image`} />
                </div>
                <div className="w-full text-start flex mt-8 1024:mt-5">
                    <div className="w-[30%] px-8 320:pl-0 1024:pr-5 1440:pr-7">
                        <h3 className="1024:text-[12px] 1440:text-xl 2560:text-3xl font-medium font-fairplay pt-4 text-[#B79248] 320:text-xl 1024:pt-0 1024:-mb-4">{month}</h3>
                        <p className="1024:text-[20px] 1440:text-[28px] 2560:text-[40px] 2560:py-5 1440:py-2 text-black font-fairplay py-2 font-medium 320:text-4xl 1024:py-0 ">{date}</p>
                    </div>
                    <div>
                        <h3 className="1024:text-[12px] 1440:text-xl 2560:text-3xl  font-medium font-fairplay pt-4 text-[#B79248] 320:text-xl 1024:pt-0 1024:-mb-1">{title}</h3>
                        <p className="1024:text-[6px] 1440:text-[8px] 2560:text-[16px] 2560:leading-6 1440:pt-1 2560:py-3 1440:leading-4 text-black font-roboto py-4 320:text-sm 1024:py-0 1024:leading-3">{description}</p>
                        <p className="text-black font-roboto py-6 320:text-sm 1024:text-[6px] 1440:text-[8px] 2560:text-[15px] 2560:py-8 1440:py-2 1024:py-0">{location}</p>
                        <button className="text-white bg-black font-fairplay tracking-wide text-[12px] 1024:text-[6px] 1440:text-[8px] 2560:text-[17px] px-6 py-2 2000:px-8 2000:py-4 mt-3 rounded-3xl" style={{ visibility: isHovered ? 'visible' : 'hidden' }}>
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventSection;
