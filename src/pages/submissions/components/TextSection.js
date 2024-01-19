import React from "react";

const TextSection = () => {

    return (
        <>
            {/* padded section 1 */}
            <div className="w-full justify-center items-center 320:px-3 425:px-4 768:px-10 1024:px-[240px] 1440:px-[400px] 1535:px-[430px] 2000:px-[500px] 2560:px-[700px] py-28 1024:py-10 1440:py-24">

                <div className="flex flex-col 425:flex-row 425:gap-3 1024:gap-4 1440:gap-14 space-y-5 425:space-y-0">

                    <div className="w-full 425:w-[25%] 1440:w-[20%] space-y-6 425:space-y-5 1024:space-y-3 1440:space-y-4 2000:space-y-6 ">
                        <h1 className="text-center 425:text-start text-[#B79248] 425:text-[15px] 768:text-[18px] 1024:text-[10px] 1440:text-[14px] 2000:text-[20px] tracking-wide  font-fairplay">
                            Ways to submit
                        </h1>
                        <h1 className="text-center 425:text-start text-[#5D6162] 425:text-[13px] 768:text-[18px] 1024:text-[11px] 1440:text-[13px] 2000:text-[21px] font-fairplay 2000:my-8">
                            What our editors are looking for
                        </h1>
                        <h1 className="text-center 425:text-start text-[#5D6162] 425:text-[13px] 768:text-[18px] 1024:text-[11px] 1440:text-[13px] 2000:text-[21px] font-fairplay">
                            What authors can do
                        </h1>
                    </div>

                    <div className="w-full 425:w-[80%] 1440:w-[80%] space-y-6 1024:space-y-3">
                        <h1 className="text-center 425:text-start text-[24px] 425:text-[16px] 1024:text-[14px] 1440:text-[16px] 2000:text-[28px] text-[#B79248] font-fairplay">
                            Electronic submission
                        </h1>
                        <p className=" 425:text-[12px] 425:text-start text-[14px] 1024:text-[7px] 1024:leading-4 1440:text-[9px] 1440:leading-6 2000:text-[15px] 2000:leading-8 2000:my-8 leading-6 font-roboto text-black">
                            Electronic versions of your manuscript should be in one file and not separate files for each chapter or section. Use
                            Microsoft Word format and 12pt Times New Roman font.
                        </p>
                        <p className=" 425:text-start text-[14px] 425:text-[12px] 1024:text-[7px] 1024:leading-4 1440:text-[9px] 1440:leading-6 2000:text-[15px] 2000:leading-8 2000:my-9 leading-6 font-roboto">
                            Please send a synopsis and complete manuscript via email to: <b>submissions@pegasuspublishers.com</b>
                        </p>

                        <p className="425:text-start text-[14px] 425:text-[12px] 1024:text-[7px] 1024:leading-4 1440:text-[9px] 1440:leading-6 2000:text-[15px] 2000:leading-8 2000:my-8 leading-6 font-roboto">
                            Manuscript guidelines:
                            <ul className="ml-3 list-disc">
                                <li className="list-item">A synopsis and complete manuscript</li>
                                <li className="list-item">Word count (of complete manuscript)</li>
                                <li className="list-item">Genre and target audience</li>
                                <li className="list-item">Your name and contact details</li>
                                <li className="list-item">Any relevant information about the author should also be included</li>
                                <li className="list-item">Please send all material for review as a single Word document or PDF file format.</li>
                            </ul>
                        </p>

                        <p className="425:text-start text-[14px] 425:text-[12px] 1024:text-[7px] 1024:leading-4 1440:text-[9px] 1440:leading-6 2000:text-[15px] 2000:leading-8 2000:my-9 leading-6 font-roboto">
                            To send by post, printed copies should be on plain white A4 paper with a large margin all round (at least 4 cm) using
                            12pt Times New Roman font. It should be double spaced and printed on one side of the paper.
                        </p>

                        <p className="425:text-start text-[14px] 425:text-[12px] 1024:text-[7px] 1024:leading-4 1440:text-[9px] 1440:leading-6 2000:text-[15px] 2000:leading-8 2000:mt-9 leading-6 font-roboto">
                            Please send your manuscript to:
                            <p className="leading-6 font-roboto 425:text-start 1024:pr-[260px] 2000:pr-[500px] 425:text-[12px] 1024:text-[7px] 1024:leading-4 1440:text-[9px] 1440:leading-6 2000:text-[15px] 2000:leading-8">
                                Pegasus Elliot Mackenzie Publishers Ltd.
                                Sheraton House, Castle Park ,Cambridge,
                                CB3 0AX, United Kingdom
                            </p>
                        </p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default TextSection;
