import React from "react";

const RadioGroup = ({ label, options, onChange, selectedOption }) => {
    return (
        <div className="mb-8 1024:mb-4 2000:mb-8">
            <label className="block text-[13px] 1024:text-[9px] font-roboto text-[#5D6162] mb-4 1024:mb-2 2000:text-[16px] ">
                {label}
            </label>
            <div className="flex gap-4">
                {options.map((option) => (
                    <div key={option.value} className="flex form-check gap-4 1024:gap-2 2000:gap-4">
                        <input
                            type="radio"
                            className="form-check-input"
                            id={`radio${option.value}`}
                            name="radioOptions"
                            onChange={() => onChange(option)}
                            checked={selectedOption === option}
                        />
                        <label className="form-check-label 1024:text-[9px] 2000:text-[16px]" htmlFor={`radio${option.value}`}>
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RadioGroup;
