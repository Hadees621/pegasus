import React from "react";

const SelectInput = ({ label, id, className, ...props }) => {

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  return (
    <div className={`mb-8 1024:mb-4 2000:mb-8`}>
      <label className="block text-[13px] 1024:text-[9px] font-roboto text-[#5D6162] mb-2 2000:text-[16px]" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          className={`flex items-center pl-2 w-full border border-[#676B6C] rounded-[4px] h-[40px] text-[#5D6162] appearance-none 1024:h-[28px] 1024:text-[8px] 2000:h-[40px] 2000:text-[15px]`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className="1024:text-[8px] 2000:text-[15px]">
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="w-4 h-4 text-[#5D6162]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectInput;

