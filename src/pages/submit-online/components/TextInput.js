import React from "react";

const TextInput = ({ label, id, name, ...props }) => {
    return (
        <div className="mb-8">
            <label className="block text-[#5D6162] text-[13px] mb-2" htmlFor={id}>
                {label}
            </label>
            <input
                type="text"
                id={id}
                name={name}
                className="w-full px-3 py-2 border border-[#676B6C] rounded-[4px] h-[40px]"
                {...props}
            />
        </div>
    );
};

export default TextInput;
