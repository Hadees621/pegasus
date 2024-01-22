import React, { useState } from "react";
import Terms from "./Terms"
import PoliciesContent from "./PoliciesContent";
import ShippingContent from "./ShippingContent";
import RightsContent from "./RightsContent";

const Section = () => {
    const [selectedHeading, setSelectedHeading] = useState("Terms & Conditions");
    const [activeMenuItem, setActiveMenuItem] = useState("Terms & Conditions");

    const handleHeadingClick = (heading) => {
        setSelectedHeading(heading);
        setActiveMenuItem(heading);
    };

    const renderContentComponent = () => {
        switch (selectedHeading) {
            case "Terms & Conditions":
                return <Terms />;
            case "Policies & Cookies":
                return <PoliciesContent />;
            case "Shipping & Returns":
                return <ShippingContent />;
            case "Rights & Permissions":
                return <RightsContent />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="w-full justify-center items-center 320:px-3 425:px-4 768:px-10 1024:px-[240px] 1440:px-[400px] 1535:px-[430px] 2000:px-[500px] 2560:px-[700px] py-28 1024:py-10 1440:py-24">
                <div className="flex flex-col 1024:flex-row">
                    <div className="w-full 1024:w-[27%] space-y-6 1024:space-y-3 2000:space-y-7 1024:pr-10">
                        <h1
                            className={`text-center 1024:text-start text-[24px] 1024:text-[14px] 1440:text-[16px] 2000:text-[20px] ${activeMenuItem ? "text-[#B79248]" : "text-black"} font-fairplay cursor-pointer`}
                            onClick={() => handleHeadingClick("Terms & Conditions")}
                        >
                            Terms & Conditions
                        </h1>
                        <h1
                            className={`text-center 1024:text-start text-[24px] 1024:text-[14px] 1440:text-[16px] 2000:text-[20px] ${activeMenuItem ? "text-[#B79248]" : "text-black"} font-fairplay cursor-pointer`}
                            onClick={() => handleHeadingClick("Policies & Cookies")}
                        >
                            Policies & Cookies
                        </h1>
                        <h1
                            className={`text-center 1024:text-start text-[24px] 1024:text-[14px] 1440:text-[16px] 2000:text-[20px] ${activeMenuItem ? "text-[#B79248]" : "text-black"} font-fairplay cursor-pointer`}
                            onClick={() => handleHeadingClick("Shipping & Returns")}
                        >
                            Shipping & Returns
                        </h1>
                        <h1
                            className={`text-center 1024:text-start text-[24px] 1024:text-[14px] 1440:text-[16px] 2000:text-[20px] text-black ${activeMenuItem && "text-[#B79248]"} font-fairplay cursor-pointer`}
                            onClick={() => handleHeadingClick("Rights & Permissions")}
                        >
                            Rights & Permissions
                        </h1>
                    </div>

                    <div className="w-full 1024:w-[73%]">
                        <h1 className="text-center 1024:text-start text-[24px] 1024:text-[14px] 1440:text-[16px] 2000:text-[28px] font-fairplay text-[#B79248]">
                            {selectedHeading}
                        </h1>
                        {renderContentComponent()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section;
