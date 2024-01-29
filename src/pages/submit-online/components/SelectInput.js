import React from "react";
import Select from "react-select";

const SelectInput = ({ label, id, options, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-[13px] font-roboto text-[#5D6162] mb-2" htmlFor={id}>
        {label}
      </label>
      <Select options={options} isSearchable={true} className={'text-[#5D6162]'} placeholder={null} {...props} />
    </div>
  );
};

export default SelectInput;
