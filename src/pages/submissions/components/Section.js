import React from "react";
import TextSection from "./TextSection";
import FaqDemo from "./FaqDemo"


const Section = () => {
    return (
        <>
            <div className="bg-[#F1F1F3]  justify-center 320:m-5 1024:h-48 1440:h-60 1535:h-[270px] 2000:h-[370px] 1440:flex-row 1024:mx-40 xl:mx-52 1535:mx-[350px] border border-[#F1F1F3]">
                <p className="320:text-[12px] 320:m-5 2000:text-sm font-roboto m-10 2000:m-10 1024:text-[8px] 1024:m-4 1440:text-[9px] 1440:m-5">
                    Home — Submissions
                </p>
                <div className="flex w-full justify-center">
                    <p className="320:text-4xl 768:text-5xl 1024:text-[25px] 1440:text-[45px] 2000:text-[70px] flex justify-center font-fairplay my-24 border-b-2 border-black shadow-sm w-max 320:mt-16 320:mb-6 1024:mt-12 1024:mb-0 1440:mb-1 2000:mb-3 pb-3">
                        Submissions
                    </p>
                </div>
            </div>

            <TextSection />

            {/* History */}

            <div className=" bg-[#F8F5EF] py-28 1024:py-10 1440:py-12">
                <div className="flex flex-col 1024:flex-row w-full justify-center 768:px-12 1024:px-56 1440:px-[400px] 1535:px-[430px] 2000:px-[580px] 2560:px-[700px] gap-8 1024:gap-0 1440:gap-4 2000:gap-8">
                    <div className="w-full 1024:w-[20%]">
                        <p className="text-[25px] text-center 1024:text-start 1024:text-[18px] 1440:text-[24px] 2000:text-[39px] 2560:text-[50px] font-fairplay mt-3"> Frequently Asked Questions </p>
                    </div>

                    <div className="w-full 1024:w-[80%] px-2 1024:px-1">
                        <FaqDemo />
                    </div>
                </div>
            </div>



        </>
    );
};

export default Section;
