import React from 'react';
import { susComponentData } from "../utils"

const Middle = ({ }) => {

    return susComponentData.map((item, index) => (
        <div key={index} className={`flex flex-col items-center 1024:flex-row md:px-10 1024:px-40 xl:px-52 2560:px-96 1024:py-6 2000:py-12 ${index % 2 === 0 ? '1024:flex-row-reverse' : ''}`}>

            <div className={`w-full 1024:w-1/2 bg-[#F9FAFA] 1024:block flex items-center justify-center ${item.imageClass}`}>
                <img
                    src={item.imageSrc}
                    className="max-w-full h-[200px] 1024:h-[110px] 1440:h-[140px] 2000:h-[200px]"
                />
            </div>

            <div className={`w-full 1024:w-1/2 flex flex-col justify-center p-8 1024:p-3 ${index % 2 === 0 ? '1024:pl-24 2000:pl-72 2000:pr-8' : '1024:pr-24 2000:pr-72 2000:pl-8'} space-y-4 1024:space-y-2 2000:space-y-7`}>
                <div>
                    <h1 className="font-fairplay text-[20px] 1024:text-[12px] 1440:text-[14px] 2000:text-[30px] text-[#90949D]">{item.title}</h1>
                </div>
                {item.para1 && (
                    <div>
                        <p className="text-[14px] leading-7 1024:text-[8px] 1024:leading-4 1440:text-[10px] 1440:leading-5 2000:text-[14px] 2000:leading-9">{item.para1}</p>
                    </div>
                )}
                {item.para2 && (
                    <div>
                        <p className="text-[14px] leading-7 1024:text-[8px] 1024:leading-4 1440:text-[10px] 1440:leading-5 2000:text-[14px] 2000:leading-9">{item.para2}</p>
                    </div>
                )}
                {item.para3 && (
                    <div>
                        <p className="text-[14px] leading-7 1024:text-[8px] 1024:leading-4 1440:text-[10px] 1440:leading-5 2000:text-[14px] 2000:leading-9">{item.para3}</p>
                    </div>
                )}
            </div>

        </div>
    ))
    // ));
};

export default Middle;
