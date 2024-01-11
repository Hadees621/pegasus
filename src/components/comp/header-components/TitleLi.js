import React from 'react';

const TitleLi = ({ text }) => {
    return (
        <li>
            <a href="#" className="hover:underline text-black text-base font-roboto m-4 1024:text-[8px] 1440:text-[11px] 2560:text-[17px] 1024:m-1">
                {text}
            </a>
        </li>
    );
};

export default TitleLi;
