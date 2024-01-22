import React from "react";
import Heading from './Heading';
import Paragraph from './Paragraph';
import { policiesData } from "../utils";

const PoliciesContent = () => {
    return (
        <>
            <div className="w-full justify-center items-center 320:px-3 425:px-4 768:px-0 1024:space-y-3 1440:space-y-4 2000:space-y-5">
                {policiesData.map((section, index) => (
                    <div className="mt-3" key={index}>
                        {section.heading && <Heading text={section.heading} />}
                        {section.paragraphs.map((paragraph, idx) => (
                            <Paragraph key={idx} text={paragraph} />
                        ))}
                    </div>
                ))}
                <div>
                    <p className="text-start text-[14px] 12:text-[12px] 1024:text-[6px] 1024:leading-[14px] 1440:text-[9px] 1440:leading-6 2000:text-[15px] 2000:leading-8 leading-6 font-roboto">
                        <b>By email:</b> editors@pegasuspublishers.com
                    </p>
                    <p className="text-start text-[14px] 12:text-[12px] 1024:text-[6px] 1024:leading-[14px] 1440:text-[9px] 1440:leading-6 2000:text-[15px] 2000:leading-8 leading-6 font-roboto">
                        <b>By Telephone:</b> 01223 370 012
                    </p>
                    <p className="text-start text-[14px] 12:text-[12px] 1024:text-[6px] 1024:leading-[14px] 1440:text-[9px] 1440:leading-6 2000:text-[15px] 2000:leading-8 leading-6 font-roboto">
                        <b>By post:</b> Sheraton House, Castle Park, Cambridge, CB3 0AX, UK
                    </p>
                </div>
            </div>
        </>
    );
};

export default PoliciesContent;

