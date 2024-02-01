import React from "react";
import { Link } from "react-router-dom";

const SubmitBanner = ({ title, subtitle, description, buttonText, imageUrl }) => {
    return (
        <div className="relative m-4 p-4 bg-cover bg-center 320:h-[380px] 2560:h-[580px] 1024:h-[180px] 1440:h-[330px] mt-10" style={{ backgroundImage: `url('${imageUrl}')` }}>
            <div className="absolute 320:bottom-1 320:left-1 bottom-8 left-8 p-4 text-white 1024:p-1 1024:bottom-2 1024:left-4 1440:p-5 1440:bottom-2 2560:p-9 gap-0">
                <h3 className="320:text-[32px] text-[48px] font-fairplay text-white 1024:text-black 1024:text-[18px] 1440:text-[28px] 2560:text-[60px] -mb-2">
                    {title}
                </h3>
                <p className="320:text-[13px] text-base text-white 1024:text-black 1024:text-[8px] 1440:text-[10px] 2560:text-[16px]">
                    {description}
                </p>
                <Link to="/submit-online" className="bg-[#031428] text-lg text-white rounded-3xl 1440:w-[100px] 1440:h-7 1440:text-[11px] 2560:text-[15px] 2560:w-[150px] 2560:h-11 font-fairplay 1024:w-[60px] 1024:h-[18px] 1024:text-[8px] items-center flex justify-center font-extralight mt-2 1440:mt-3 2560:mt-7 320:w-[100px] 320:text-[13px]">
                    {buttonText}
                </Link>
            </div>
        </div>
    );
};

export default SubmitBanner;
