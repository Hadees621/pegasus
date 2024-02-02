import React from "react";

const Button = ({ type, text }) => {
    return (
        <button
            type={type}
            className="w-full text-white bg-black h-9 1024:h-7 1024:text-[9px] 1440:h-9 1440:text-[12px] 2000:text-[16px] 2000:h-14 rounded-[28px] flex justify-center items-center"
        >
            {text}
        </button>
    );
};

export default Button;
