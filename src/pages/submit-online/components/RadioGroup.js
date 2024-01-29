import React from "react";

const RadioGroup = ({ label, options, onChange, selectedOption }) => {
    return (
        <div className="mb-8">
            <label className="block text-[13px] font-roboto text-[#5D6162] mb-4">
                {label}
            </label>
            <div className="flex gap-4">
                {options.map((option) => (
                    <div key={option.value} className="form-check gap-4 flex">
                        <input
                            type="radio"
                            className="form-check-input"
                            id={`radio${option.value}`}
                            name="radioOptions"
                            onChange={() => onChange(option)}
                            checked={selectedOption === option}
                        />
                        <label className="form-check-label" htmlFor={`radio${option.value}`}>
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RadioGroup;
