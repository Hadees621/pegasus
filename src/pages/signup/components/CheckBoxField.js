import React from "react";

const CheckboxField = ({ label, id }) => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center h-5">
                <input id={id} type="checkbox" className="w-3 h-3 2000:w-6 2000:h-6 appearance-none border border-[#5D6162] rounded-full checked:bg-black checked:border-transparent focus:outline-none focus:ring-2 focus:to-black" required />
            </div>
            <div className="ml-2 2000:ml-5 flex items-center">
                <label htmlFor={id} className="text-[11px] 1024:text-[9px] 1440:text-[12px] 2000:text-[17px] font-roboto">
                    {label}
                </label>
            </div>
        </div>
    );
};

export default CheckboxField;
