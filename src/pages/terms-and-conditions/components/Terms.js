import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { termsData } from "../utils";

const Terms = () => {
    return (
        <>
            <div className="w-full justify-center items-center 320:px-3 425:px-4 768:px-0">
                <br />
                {termsData.map((section, index) => (
                    <div key={index}>
                        {section.heading && <Heading text={section.heading} />}
                        {section.paragraphs.map((paragraph, pIndex) => (
                            <Paragraph key={pIndex} text={paragraph} />
                        ))}
                        <br />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Terms;
