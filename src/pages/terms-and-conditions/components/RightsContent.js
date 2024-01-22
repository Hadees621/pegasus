import React from "react";
import Paragraph from "./Paragraph";
import { rightsData } from "../utils";

const RightsContent = () => {
    return (
        <>
            <div className="w-full justify-center items-center 320:px-3 425:px-4 768:px-0">
                <br />
                {rightsData.map((data, index) => (
                    <div>
                        <Paragraph key={index} text={data.paragraphs} />
                        <br />
                    </div>
                ))}
            </div>
        </>
    );
};

export default RightsContent;
