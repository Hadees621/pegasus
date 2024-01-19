import React from "react";
import TextSection from "./TextSection";
import FaqDemo from "./FaqDemo"
import Process from "./Process"

const Section = () => {
    return (
        <>
            <div className="bg-[#F1F1F3] justify-center 320:m-5 1024:h-48 1440:h-60 1535:h-[270px] 2000:h-[370px] 1440:flex-row 1024:mx-40 xl:mx-52 1535:mx-[350px] border border-[#F1F1F3]">
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

            <FaqDemo />

            <Process />

            {/* Submit online */}
            <div className="1024:px-40 xl:px-52 2560:px-96 pb-20">
                <div class="relative m-4 p-4 bg-cover bg-center 320:h-[380px] 2560:h-[580px] 1024:h-[180px] 1440:h-[330px] mt-10" style={{ backgroundImage: `url('assests/section/section6.png')` }}>
                    <div class="absolute 320:bottom-1 320:left-1 bottom-8 left-8 p-4 text-white 1024:p-1 1024:bottom-2 1024:left-4 1440:p-5 1440:bottom-2 2560:p-9 gap-0">
                        <h3 class="320:text-[32px] text-[48px] font-fairplay text-white 1024:text-black 1024:text-[18px] 1440:text-[28px] 2560:text-[60px] -mb-2">Submit online
                        </h3>
                        <p class="320:text-[13px] text-base text-white 1024:text-black 1024:text-[8px] 1440:text-[10px] 2560:text-[16px]">Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                            .</p>
                        <button className="bg-[#031428] text-lg text-white rounded-3xl 1440:w-[100px] 1440:h-7 1440:text-[11px] 2560:text-[15px] 2560:w-[150px] 2560:h-11 font-fairplay 1024:w-[60px] 1024:h-[18px] 1024:text-[8px] items-center flex justify-center font-extralight mt-2 1440:mt-3 2560:mt-7 320:w-[100px] 320:text-[13px]">
                            Submit online
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Section;
