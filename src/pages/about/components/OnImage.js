import React, { useState } from 'react';

const OnImage = () => {
    return (
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center text-[#F8F4EB] w-full">
            <p className="text-[30px] 1024:text-[14px] 1440:text-[20px] font-fairplay mb-7 1024:mb-3">Author experience</p>
            <p className="font-roboto my-2 text-[15px] 1024:text-[8px] 1440:text-[11px] ">Our authors continue to inspire us.</p>
            <p className="font-roboto my-2 text-[15px] 1024:text-[8px] 1440:text-[11px]">Read what our ever-expanding family of successful authors have to say.</p>
            <p className="text-center 320:mt-6 1024:mt-0">
                <a href="#" className="text-[#ECEAE7] 1024:text-[8px] 1440:text-[11px] 2000:text-[18px] 2000:mt-6 font-fairplay tracking-wide inline-block pb-[2px] border-b border-[#ECEAE7]">Explore</a>
            </p>
        </div>
    );
};

export default OnImage;
