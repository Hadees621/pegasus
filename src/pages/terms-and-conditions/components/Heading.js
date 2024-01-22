import React from 'react';

const Heading = ({ text }) => {
    return (
        <h3 className={`font-semibold text-start text-[14px] 12:text-[12px] 1024:text-[7px] 1024:leading-4 1440:text-[9px] 1440:leading-6 2000:text-[15px] 2000:leading-8 leading-6 font-roboto`}>
            {text}
        </h3>
    );
};

export default Heading;
