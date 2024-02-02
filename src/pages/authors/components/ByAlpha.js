import React, { useState } from "react";

const ByAlpha = ({ alpha }) => {
    const [currentLetter, setCurrentLetter] = useState(alpha);

    const getPreviousLetter = (letter) => {
        return letter && letter.length === 1
            ? letter === 'A'
                ? 'Z'
                : String.fromCharCode(letter.charCodeAt(0) - 1)
            : null;
    };

    const getNextLetter = (letter) => {
        return letter && letter.length === 1
            ? letter === 'Z'
                ? 'A'
                : String.fromCharCode(letter.charCodeAt(0) + 1)
            : null;
    };

    const previousLetter = getPreviousLetter(currentLetter);
    const nextLetter = getNextLetter(currentLetter);

    const handlePreviousClick = () => {
        setCurrentLetter(previousLetter);
    };

    const handleNextClick = () => {
        setCurrentLetter(nextLetter);
    };

    return (
        <>
            <div className="1024:px-52 1440:px-72 2560:px-[550px] 2000:py-40">
                <h1 className="text-[50px] 768:text-[80px] 2000:text-[100px] text-[#B79248] font-fairplay px-5 text-start">{currentLetter}</h1>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 1024:gap-x-2 1024:gap-y-2.5 2560:gap-y-6 2560:gap-x-6 1440:gap-x-5 gap-y-7 320:p-5 1024:py-0  768:gap-x-4 2000:mb-44">
                    {[...Array(30)].map((_, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center h-16 1024:h-[27px] 1440:h-[35px] 2560:h-[65px]  1024:text-[12px] border rounded-sm border-black text-[#8F9191] text-lg transition duration-300 ease-in-out hover:bg-[#EEF1F2] hover:font-extrabold hover:shadow-lg hover:text-black hover:border-none"
                        >
                            <p className="font-normal font-roboto 1024:text-[8px] 1440:text-[11px] 2560:text-[20px]">Author Name</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-4 768:gap-8 justify-center items-center h-20 my-10 lg:flex-row lg:justify-between p-5">
                    <nav className="lg:mx-auto">
                        <ul className="flex items-center h-8 text-sm space-x-4 1024:text-[9px] 1440:text-[12px] 2000:text-[20px]">
                            <li>
                                <button className="flex items-center justify-center h-8 ms-0 leading-tight text-gray-500 bg-white focus:outline-none">
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-2.5 h-2.5 2000:w-4 2000:h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center h-8 leading-tight ">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center h-8 leading-tight ">2</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center h-8 leading-tight ">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center h-8 leading-tight ">4</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center h-8 leading-tight ">5</a>
                            </li>
                            <li>
                                <button className="flex items-center justify-center h-8 leading-tight text-gray-500 focus:outline-none">
                                    <span className="sr-only">Next</span>
                                    <svg className="w-2.5 h-2.5 2000:w-4 2000:h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <p className="flex lg:justify-end">
                        <a href="#" className="text-[20px] 1024:text-[9px] 1440:text-[12px] 2000:text-[20px] text-[#5D6162] font-fairplay tracking-wide inline-block pb-[2px] border-b border-[#5D6162]">Next</a>
                    </p>
                </div>
            </div>


            <div className="flex h-[550px] 1024:h-[250px] 2000:h-[550px]">
                <div className="w-1/2 bg-[#EAEBEE]">
                    <div className="flex flex-col p-10 768:pt-10 768:pr-48 1024:pt-5 1024:pr-20 2000:pt-10 2000:pr-48 justify-end items-end w-full cursor-pointer" onClick={handlePreviousClick}>
                        <h1 className="text-[50px] 1024:text-[45px] 2000:text-[100px] font-fairplay text-[#8D8F8F]">{getPreviousLetter(currentLetter)}</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="1024:w-12 2000:w-20 2000:h-12 flex items-center justify-center">
                            <path fill="none" stroke="#8D8F8F" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 8l-4 4m0 0l4 4m-4-4h20" />
                        </svg>
                    </div>
                </div>
                <div className="w-1/2 bg-[#DBDCE2]">
                    <div className="flex flex-col p-10 768:pt-10 768:pl-48 1024:pt-5 1024:pl-20 2000:pt-10 2000:pr-48 justify-end items-start w-full cursor-pointer" onClick={handleNextClick}>
                        <h1 className="text-[50px] 1024:text-[45px] 2000:text-[100px] font-fairplay" >{getNextLetter(currentLetter)}</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="1024:w-10 2000:w-20 2000:h-12">
                            <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 8l4 4m0 0l-4 4m4-4H2" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ByAlpha;
