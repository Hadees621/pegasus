import React from 'react';

const LastLi = ({ text }) => {
    return (
        <li className="flex items-center">
            <a
                href="#"
                className="hover:underline text-[#B79248] text-base font-roboto font-normal underline m-5 mr-1 1024:text-[8px] 1440:text-[11px] 2560:text-[17px] 1024:m-1"
            >
                {text}
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 20 20"><path fill="#B79248" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z" /></svg>
        </li>
    )
};

export default LastLi;
