import React, { useState } from "react";
import PoliciesContent from "./PoliciesContent";
import ShippingContent from "./ShippingContent";
import RightsContent from "./RightsContent";
import Terms from "./Terms";
import MenuItem from "./MenuItem";

const Section = () => {
    const [selectedHeading, setSelectedHeading] = useState("Terms & Conditions");

    const handleHeadingClick = (heading) => {
        setSelectedHeading(heading);
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
                <div className="flex flex-col 1024:flex-row space-y-14 1024:space-y-0 1024:-space-x-6 1440:-space-x-0 justify-center">
                    <div className="w-full 1024:w-[27%] space-y-6 1024:space-y-3 2000:space-y-7">
                        <MenuItem text="Terms & Conditions" selectedHeading={selectedHeading} onClick={handleHeadingClick} />
                        <MenuItem text="Policies & Cookies" selectedHeading={selectedHeading} onClick={handleHeadingClick} />
                        <MenuItem text="Shipping & Returns" selectedHeading={selectedHeading} onClick={handleHeadingClick} />
                        <MenuItem text="Rights & Permissions" selectedHeading={selectedHeading} onClick={handleHeadingClick} />
                    </div>
                    <div className="w-full 1024:w-[73%]">
                        <h1 className="text-center 1024:text-start text-[24px] 1024:text-[12px] 1440:text-[16px] 2000:text-[28px] font-fairplay text-[#B79248]">
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
