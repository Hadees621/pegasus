import React from "react";
import SelectInput from "./SelectInput";
import TextInputArray from "./TextInputArray";

const AboutYou = () => {
    return (
        <>
            <div className="flex flex-col w-full">
                <h1 className="text-[20px] 1024:text-[12px] text-[#B79248] font-fairplay mb-7 mt-5 1024:my-4">
                    About you
                </h1>
                <div className="w-full">
                    <form>
                        <SelectInput label="Select title" id="titleSelect" />

                        <TextInputArray count={10} />

                        <SelectInput label="Please select a country" id="countrySelect" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AboutYou;

