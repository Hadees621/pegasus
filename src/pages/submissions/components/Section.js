import React from "react";
import TextSection from "./TextSection";
import FaqDemo from "./FaqDemo"


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

            {/* FAQ */}
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

            <div className="flex flex-col 1024:flex-row w-full justify-center 1024:px-40 xl:px-52 2560:px-96 py-32 gap-10 border">

                <div className="flex flex-col items justify-center text-center group bg-white w-full mr-7 px-2 py-10">
                    <p className="text-start text-[24px] 425:text-[16px] 1024:text-[14px] 1440:text-[16px] 2000:text-[28px] text-[#B79248] font-fairplay">
                        Publishing Process
                    </p>
                    <p className="text-start text-[14px] 425:text-[12px] 1024:text-[7px] 1024:leading-4 1440:text-[9px] 1440:leading-6 2000:text-[15px] 2000:leading-8 2000:my-9 leading-6 font-roboto">
                        Once your submission is received it is considered
                        for publication by an editor, who will assess
                        content, subject matter and suitability under one
                        of our imprints
                    </p>

                    <button className="bg-[#031428] text-lg text-white rounded-3xl w-[150px] h-12 font-fairplay 1024:w-[60px] 1024:h-[18px] 1440:w-[80px] 1440:h-[24px] 1440:text-[10px] 2560:w-[130px] 2560:h-[45px] 2560:text-[17px] 1024:text-[8px] items-center flex justify-center font-extralight">
                        Read more
                    </button>

                    <div className="flex gap-6 items-center py-8">
                        <a href="#" className="flex items-center justify-center h-12 w-12 rounded-full bg-white border border-black p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g transform="rotate(-90 16 16)"><path fill="currentColor" d="m16 6.594l-.72.687l-12.5 12.5l1.44 1.44L16 9.437l11.78 11.78l1.44-1.437l-12.5-12.5z" /></g></svg>
                        </a>
                        <a href="#" className="flex items-center justify-center h-12 w-12 rounded-full bg-white border border-black p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g transform="rotate(90 16 16)"><path fill="currentColor" d="m16 6.594l-.72.687l-12.5 12.5l1.44 1.44L16 9.437l11.78 11.78l1.44-1.437l-12.5-12.5z" /></g></svg>
                        </a>
                        <p> 01 / 02</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center group bg-white w-full border shadow-xl p-10">
                    <img className="flex items-center justify-center w-full" src="assests/submissions/Asset1.png" alt="Section Image" />
                    <p className="text-center mt-8 425:text-start text-[24px] 425:text-[16px] 1024:text-[14px] 1440:text-[16px] 2000:text-[28px] text-[#B79248] font-fairplay">
                        Completing your manuscript
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group bg-white w-full border shadow-xl p-10">
                    <img className="flex items-center justify-center w-full" src="assests/submissions/Asset2.png" alt="Section Image" />
                    <p className="text-center mt-8 425:text-start text-[24px] 425:text-[16px] 1024:text-[14px] 1440:text-[16px] 2000:text-[28px] text-[#B79248] font-fairplay">
                        Submission and editorial
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center group bg-white w-full border shadow-xl p-10">
                    <img className="flex items-center justify-center w-full pt-10" src="assests/submissions/Asset3.png" alt="Section Image" />
                    <p className="text-center mt-8 425:text-start text-[24px] 425:text-[16px] 1024:text-[14px] 1440:text-[16px] 2000:text-[28px] text-[#B79248] font-fairplay">
                        Offer of publication
                    </p>
                </div>

            </div>

            {/* Submit online */}
            {/* <div class="relative m-4 p-4 bg-cover bg-center 320:h-[380px] 2560:h-[580px] 1024:h-[180px] 1440:h-[330px] mt-10" style={{ backgroundImage: `url('assests/section/section6.png')` }}>
                <div class="absolute 320:bottom-1 320:left-1 bottom-8 left-8 p-4 text-white 1024:p-1 1024:bottom-2 1024:left-4 1440:p-5 1440:bottom-2 2560:p-9 gap-0">
                    <h3 class="320:text-[32px] text-[48px] font-fairplay text-white 1024:text-black 1024:text-[18px] 1440:text-[28px] 2560:text-[60px] -mb-2">Submit online
                    </h3>
                    <p class="320:text-[13px] text-base text-white 1024:text-black 1024:text-[8px] 1440:text-[10px] 2560:text-[16px]">Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                        .</p>
                    <button className="bg-[#031428] text-lg text-white rounded-3xl 1440:w-[100px] 1440:h-7 1440:text-[11px] 2560:text-[15px] 2560:w-[150px] 2560:h-11 font-fairplay 1024:w-[60px] 1024:h-[18px] 1024:text-[8px] items-center flex justify-center font-extralight mt-2 1440:mt-3 2560:mt-7 320:w-[100px] 320:text-[13px]">Explore</button>
                </div>
            </div> */}

        </>
    );
};

export default Section;
