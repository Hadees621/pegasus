import React from 'react';

const MenuItem = ({ text, selectedHeading, onClick }) => {
  return (
    <h1
      className={`text-center 1024:text-start text-[24px] 1024:text-[9px] 1440:text-[13px] 2000:text-[20px] ${
        selectedHeading === text ? 'text-[#B79248]' : 'text-[#99A1A4]'
      } font-fairplay cursor-pointer`}
      onClick={() => onClick(text)}
    >
      {text}
    </h1>
  );
};

export default MenuItem;
