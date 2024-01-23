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

            <div className="flex border 1024:gap-x-2 1024:gap-y-2.5 2560:gap-y-6 2560:gap-x-6 1440:gap-x-5 gap-y-7 320:p-5 1024:py-0 1024:mx-52 1440:mx-72 2560:mx-[550px] 768:gap-x-4 mb-44 2560:my-9">
                <AboutYou />
                <AboutBook />
            </div>
        </>
    );
};

export default Section;
