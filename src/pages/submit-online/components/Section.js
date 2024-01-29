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

            <div className="flex flex-col 1440:mx-[430px] 1440:gap-16 mx-6 mb-20 1024:flex-row 1024:gap-6 1024:mx-[230px] 1440:bg-blue-600">
                <AboutYou />
                <AboutBook />
            </div>
        </>
    );
};

export default Section;
