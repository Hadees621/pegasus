import React from "react";

const Banner = ({ title, subtitle, para }) => {
    const hasPara = para !== undefined && para !== null && para !== "";
    return (
        <>
            <div className={`bg-[#F1F1F3] justify-center 320:m-5 1440:flex-row 1024:mx-40 xl:mx-52 1535:mx-[350px] border border-[#F1F1F3] ${hasPara ? "py-4" : "pb-20"}`}>
                <p className="320:text-[12px] 320:m-5 2000:text-sm font-roboto m-10 2000:m-10 1024:text-[8px] 1024:m-4 1440:text-[9px] 1440:m-5">
                    {subtitle}
                </p>
                <div className="flex w-full justify-center">
                    <p className="320:text-4xl 768:text-5xl 1024:text-[25px] 1440:text-[45px] 2000:text-[70px] flex justify-center font-fairplay my-24 border-b-2 border-black shadow-sm w-max 320:mt-16 320:mb-6 1024:mt-12 1024:mb-0 1440:mb-1 2000:mb-3 pb-3">
                        {title}
                    </p>
                </div>
                {para && <div className="flex w-full justify-center items-center 1024:px-32 1440:px-52 1535:px-[100px] 2000:px-[430px]">
                    <p className="320:text-[12px] 768:text-[14px] 1024:text-[6.5px] 1024:leading-4 1440:text-[10.5px] 1440:leading-6 2000:text-[16px] 2000:leading-10 320:p-5 w-full 320:items-center flex justify-center text-center py-2">
                        {para}
                    </p>
                </div>}
            </div>
        </>
    );
};

export default Banner;
