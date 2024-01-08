import React from 'react';

const SimpleLi = ({ text }) => {
    return (
        <li>
            <a href="#" className="hover:underline text-[#75797B] text-base font-roboto font-medium m-5">
                {text}
            </a>
        </li>
    );
};

export default SimpleLi;
