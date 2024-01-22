import React from "react";
import Paragraph from "./Paragraph";
import { rightsData } from "../utils";

const RightsContent = () => {
    return (
        <>
            <div className="w-full justify-center items-center 320:px-3 425:px-4 768:px-0 1024:space-y-3 1440:space-y-4 2000:space-y-5">
                {rightsData.map((data, index) => (
                    <div className="mt-3">
                        <Paragraph key={index} text={data.paragraphs} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default RightsContent;
