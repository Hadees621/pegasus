import React from "react";
import Banner from "../../../components/Banner"
import Middle from "./Middle";
import { componentsData } from "../utils";

const Section = () => {
    return (
        <>
            <Banner title="Publishing Process" subtitle="Home - Publishing process" />

            <Middle data={componentsData} />
            {/* <div className="md:px-10 1024:px-40 xl:px-52 2560:px-96 py-32">
                <div className="flex flex-col 1024:flex-row">
                    <div className="w-full h-full 1024:w-1/2 pl-60 py-24 pr-28 bg-[#F9FAFA]">
                        <img
                            src="assests/publishing/Asset1.png"
                            alt="Imprint 1"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-full 1024:w-1/2 flex flex-col justify-center pr-80 pl-8 space-y-7" >

                        <div>
                            <h1 className="font-fairplay text-[30px] text-[#90949D]">1 — Completing your manuscript</h1>
                            <p className="leading-9">
                                You’ve done the hard part... You’ve written a book. Your book.
                                We understand that a manuscript represents much more than just a collection
                                of words and tales. What is laying on your desk is the product of hundreds of
                                head scratches and endless cups of coffee (or tea) and those noble grins when
                                you write those lines you’re so proud of.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold font-fairplay leading-loose">Top Tip</h3>
                            <p className="leading-9">
                                Get your friends and family to review your work once you have finished writing
                                and improve it as necessary before sending your work to us.
                            </p>
                        </div>

                    </div>


                </div>
            </div> */}

        </>
    );
};

export default Section;
