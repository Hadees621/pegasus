import React from "react";
import Banner from "../../../components/Banner"
import Middle from "./Middle";
import { componentsData } from "../utils";

const Section = () => {
    return (
        <>
            <Banner title="Publishing Process" subtitle="Home - Publishing process" />

            <Middle data={componentsData} />


            {/* Submit online */}
            <div className="md:px-10 1024:px-40 xl:px-52 2560:px-96 py-10 2000:py-20">
                <div class="relative m-4 p-4 bg-cover bg-center 320:h-[380px] 2000:h-[480px] 1024:h-[180px] 1440:h-[330px] mt-10" style={{ backgroundImage: `url('assests/section/section6.png')` }}>
                    <div class="absolute 320:bottom-1 320:left-1 bottom-8 left-8 p-4 text-white 1024:p-1 1024:bottom-2 1024:left-4 1440:p-5 1440:bottom-2 2560:p-9 gap-0">
                        <h3 class="320:text-[32px] text-[48px] font-fairplay text-white 1024:text-black 1024:text-[18px] 1440:text-[28px] 2000:text-[60px] -mb-2">Submit online
                        </h3>
                        <p class="320:text-[13px] text-base text-white 1024:text-black 1024:text-[8px] 1440:text-[10px] 2560:text-[16px]">Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                            .</p>
                        <button className="bg-[#031428] text-lg text-white rounded-3xl 1440:w-[100px] 1440:h-7 1440:text-[11px] 2560:text-[15px] 2560:w-[150px] 2560:h-11 font-fairplay 1024:w-[60px] 1024:h-[18px] 1024:text-[8px] items-center flex justify-center font-extralight mt-2 1440:mt-3 2560:mt-7 320:w-[100px] 320:text-[13px]">Explore</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section;
