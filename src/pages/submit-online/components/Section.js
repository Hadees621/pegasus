import React from "react";
import Banner from "../../../components/Banner";
import AboutYou from "./Aboutyou";
import AboutBook from "./AboutBook";

const Section = () => {
    return (
        <>
            <Banner
                title="Submit online"
                subtitle="Home — Submit online"
                para="Please fill in the form below to submit your work to our editorial team, who will be in touch with you after reviewing your submission. The review process usually takes between 4-6 weeks. Electronic versions of your full manuscript should be in one file and not separate chapters."
            />
            {/* 1024:bg-red-600 1440:bg-blue-900 1827:bg-orange-900 */}
            <div className="flex flex-col 2000:mx-[430px] 2000:gap-16 mx-6 mb-20 1024:flex-row 1024:gap-6 1024:mx-[230px] 1440:mx-[350px]  1535:mx-[440px] 1827:mx-[500px] 2560:mx-[530px] ">
                <AboutYou />
                <AboutBook />
            </div>
        </>
    );
};

export default Section;
