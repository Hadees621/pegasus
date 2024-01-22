import React from "react";
import Heading from './Heading';
import Paragraph from './Paragraph';
import { policiesData } from "../utils";

const PoliciesContent = () => {
    return (
        <>
            <div className="w-full justify-center items-center 320:px-3 425:px-4 768:px-0">
                <br />
                <Paragraph text="Our website uses cookies. We will ask you to consent to our use of cookies in accordance with the terms of this policy when you first visit our website. By using our website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy" />
                <br />

                {policiesData.map((section, index) => (
                    <div key={index}>
                        <Heading text={section.heading} isBold />
                        {section.paragraphs.map((paragraph, idx) => (
                            <Paragraph key={idx} text={paragraph} />
                        ))}
                        <br />
                    </div>
                ))}

                <p className="text-start text-[14px] 12:text-[12px] 1024:text-[7px] 1024:leading-4 1440:text-[9px] 1440:leading-6 2000:text-[15px] 2000:leading-8 leading-6 font-roboto">
                    <b>By email:</b> editors@pegasuspublishers.com
                </p>
                <p className="text-start text-[14px] 12:text-[12px] 1024:text-[7px] 1024:leading-4 1440:text-[9px] 1440:leading-6 2000:text-[15px] 2000:leading-8 leading-6 font-roboto">
                    <b>By Telephone:</b> 01223 370 012
                </p>
                <p className="text-start text-[14px] 12:text-[12px] 1024:text-[7px] 1024:leading-4 1440:text-[9px] 1440:leading-6 2000:text-[15px] 2000:leading-8 leading-6 font-roboto">
                    <b>By post:</b> Sheraton House, Castle Park, Cambridge, CB3 0AX, UK
                </p>
            </div>
        </>
    );
};

export default PoliciesContent;

