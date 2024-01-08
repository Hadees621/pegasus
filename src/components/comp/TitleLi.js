import React from 'react';

const TitleLi = ({ text }) => {
    return (
        <li>
            <a href="#" className="hover:underline text-black text-base font-roboto font-bold m-4">
                {text}
            </a>
        </li>
    );
};

export default TitleLi;
