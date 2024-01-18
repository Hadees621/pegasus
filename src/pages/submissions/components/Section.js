import React from "react";
import { audioBooksData } from "../../homepage/utils/utils";

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

            {/* padded section 1 */}
            <div className="w-full justify-center 320:px-6 768:px-12 1024:px-52 1440:px-[290px] 1535:px-[360px] 2000:px-[360px] ">

                {/* goals */}
                <div className="flex 320:flex-col 320:gap-9 1024:gap-0 1024:flex-row 2000:space-x-10 2000:my-10">
                    <div className="px-1 320:space-y-3 1024:space-y-1 1024:px-2 2000:space-y-3">
                        <h1 className="font-bold text-[#77797B] font-fairplay 320:text-[20px] 768:text-[22px] 1024:text-[10px] 1440:text-[16px] 2000:text-[28px] text-center 1024:text-start 1024:my-1.5 1440:my-2.5 2000:my-5">
                            The Leading Independant Trade Publishers
                        </h1>
                        <p className="flex leading-8 font-roboto 320:text-[13px] 320:leading-5 768:text-[16px] 768:leading-6 1024:text-[6px] 1024:leading-[13px] 1440:text-[9.5px] 1440:leading-[19px] 2000:text-[16px] 2000:leading-8 text-center 1024:text-start">
                            Pegasus Elliot Mackenzie has been one of the UK’s foremost
                            independent publishing groups collectively publishing for almost
                            twenty years. We are determined advocates for authors and aspiring
                            writers, we strive to create excellence and most importantly we
                            have made it our mission to create a global platform for our
                            published authors. We have published over 2,000 titles and sold
                            our books in 33 countries around the world. We also regularly work
                            with charities and support causes which are close to our authors
                            and us.
                        </p>
                    </div>
                    <div className="px-1 320:space-y-3 1024:space-y-1 1024:px-4 2000:space-y-3">
                        <h1 className="font-bold text-[#77797B] font-fairplay 320:text-[20px] 768:text-[22px] 1024:text-[10px] 1440:text-[16px] 2000:text-[28px] text-center 1024:text-start 1024:my-1.5 1440:my-2.5 2000:my-5">
                            We strive for excellence
                        </h1>
                        <p className="flex leading-8 font-roboto 320:text-[13px] 320:leading-5 768:text-[16px] 768:leading-6 1024:text-[6px] 1024:leading-[13px] 1440:text-[9.5px] 1440:leading-[19px] 2000:text-[16px] 2000:leading-8 text-center 1024:text-start">
                            Making sure to incorporate new innovative ideas, expand our use of
                            technology and explore every available avenue. We are with our
                            authors every step of the way, from being accepted by our
                            editorial team to creating their stand-out cover…right the way
                            into distribution and publicity! In 25 years we have grown from
                            one publishing house releasing a few wonderful books a year, to
                            two fully developed and thriving publishing houses, with over 700
                            titles in marketing, Pegasus is considered one of the fastest
                            growing independent publishing houses in the UK.
                        </p>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Section;
