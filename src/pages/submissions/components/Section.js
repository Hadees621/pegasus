import React from "react";
import TextSection from "./TextSection";
import FaqDemo from "./FaqDemo"
import Process from "./Process"
import Banner from "../../../components/Banner";
import SubmitBanner from "../../../components/SubmitBanner";

const Section = () => {
    return (
        <>
            <Banner subtitle="Home — Submissions" title="Submissions" />

            <TextSection />

            <FaqDemo />

            <Process />

            <div className="1024:px-40 xl:px-52 2560:px-96 pb-20">
                <SubmitBanner
                    title="Submit online"
                    subtitle="Your subtitle here"
                    description="Lorem ipsum dolor sit amet, consectetuer adipscing elit."
                    buttonText="Submit online"
                    imageUrl="assests/section/section6.png"
                />
            </div>

        </>
    );
};

export default Section;
