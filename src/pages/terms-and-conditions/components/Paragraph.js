import React from 'react';

const Paragraph = ({ text }) => {
    return (
        <p className="text-start text-[14px] 12:text-[12px] 1024:text-[6px] 1024:leading-[14px] 1440:text-[9px] 1440:leading-5 2000:text-[15px] 2000:leading-8 leading-6 font-roboto">
            {text}
        </p>
    );
};

export default Paragraph;
