import React from "react";
import { shippingData } from "../utils";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const ShippingContent = () => {
    return (
        <div className="w-full justify-center items-center 320:px-3 425:px-4 768:px-0">
            <br />
            {shippingData.map((section, index) => (
                <div key={index}>
                    {section.heading && <Heading text={section.heading} />}
                    {section.paragraphs.map((paragraph, idx) => (
                        <Paragraph key={idx} text={paragraph} />
                    ))}
                    <br />
                </div>
            ))}
        </div>
    );
};

export default ShippingContent;
