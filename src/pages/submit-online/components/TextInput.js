import React from "react";

const TextInput = ({ label, id, name, ...props }) => {
    return (
        <div className="mb-8 1024:mb-3 2000:mb-8">
            <label className="block text-[#5D6162] text-[13px] 1024:text-[9px] mb-2 2000:text-[16px]" htmlFor={id}>
                {label}
            </label>
            <input
                type="text"
                id={id}
                name={name}
                className="w-full px-3 py-2 border border-[#676B6C] rounded-[4px] h-[40px] 1024:h-[28px] 2000:h-[40px]"
                {...props}
            />
        </div>
    );
};

export default TextInput;
