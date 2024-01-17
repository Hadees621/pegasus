import React from 'react';

const Sidebar = () => {
    return (
        <>
            <div className='mt-8 1024:mt-0 2000:mt-6'>
                <div className={`flex flex-col my-1 items-start cursor-pointer gap-8 1024:-space-y-11 1440:gap-12 2560:gap-20`}>
                    <p className="text-[21px] font-roboto text-[#75797B] 1024:text-[7px] 1440:text-[10px] 2560:text-[16px] flex items-center justify-center">
                        <span className="inline-block mr-5 1024:mr-4 2000:mr-6 text-3xl 1024:text-[13px] 1440:text-[18px] 2560:text-3xl text-[#7EB057]">•</span> Author life (10)
                    </p>
                    <p className="text-[21px] font-roboto text-[#75797B] 1024:text-[7px] 1440:text-[10px] 2560:text-[16px] flex items-center justify-center">
                        <span className="inline-block mr-5 1024:mr-4 2000:mr-6 text-3xl 1024:text-[13px] 1440:text-[18px] 2560:text-3xl text-[#907539]">•</span> Features (9)
                    </p>
                    <p className="text-[21px] font-roboto text-[#75797B] 1024:text-[7px] 1440:text-[10px] 2560:text-[16px] flex items-center justify-center">
                        <span className="inline-block mr-5 1024:mr-4 2000:mr-6 text-3xl 1024:text-[13px] 1440:text-[18px] 2560:text-3xl text-[#AF85A6]">•</span> Fun and games (5)
                    </p>
                    <p className="text-[21px] font-roboto text-[#75797B] 1024:text-[7px] 1440:text-[10px] 2560:text-[16px] flex items-center justify-center">
                        <span className="inline-block mr-5 1024:mr-4 2000:mr-6 text-3xl 1024:text-[13px] 1440:text-[18px] 2560:text-3xl text-[#D07E71]">•</span> Fun and games (5)
                    </p>
                    <p className="text-[21px] font-roboto text-[#75797B] 1024:text-[7px] 1440:text-[10px] 2560:text-[16px] flex items-center justify-center">
                        <span className="inline-block mr-5 1024:mr-4 2000:mr-6 text-3xl 1024:text-[13px] 1440:text-[18px] 2560:text-3xl text-[#D3B16A]">•</span> Author interviews (15)
                    </p>
                    <p className="text-[21px] font-roboto text-[#75797B] 1024:text-[7px] 1440:text-[10px] 2560:text-[16px] flex items-center justify-center">
                        <span className="inline-block mr-5 1024:mr-4 2000:mr-6 text-3xl 1024:text-[13px] 1440:text-[18px] 2560:text-3xl text-[#797295]">•</span>Author academy (0)
                    </p>
                    <p className="text-[21px] font-roboto text-[#75797B] 1024:text-[7px] 1440:text-[10px] 2560:text-[16px] flex items-center justify-center">
                        <span className="inline-block mr-5 1024:mr-4 2000:mr-6 text-3xl 1024:text-[13px] 1440:text-[18px] 2560:text-3xl text-[#A38387]">•</span>  News (3)
                    </p>
                </div>
            </div>

        </>
    );
};

export default Sidebar;
