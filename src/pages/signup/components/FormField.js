import React from "react";

const FormField = ({ label, type }) => {
    return (
        <div className={`2000:mb-8 1024:mb-3`}>
            <label className="block text-[#5D6162] text-[13px] 1024:text-[9px] 1440:text-[12px] mb-2 2000:text-[20px]">
                {label}
            </label>
            <input
                type={type}
                className="w-full px-3 py-2 border border-[#5D6162] rounded-[4px] h-[50px] 1024:h-[28px] 1440:h-[35px] 2000:h-[55px]"
            />
        </div>
    );
};

export default FormField;
