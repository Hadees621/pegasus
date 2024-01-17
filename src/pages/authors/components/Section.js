import React from "react";

const Section = () => {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return (
        <>
            <div className="bg-[#F1F1F3] justify-center 320:m-5 1024:h-52 1440:h-72 2000:h-[420px] 1440:flex-row 1024:mx-40 xl:mx-52 2xl:mx-96 border border-[#F1F1F3]">
                <p className="2000:text-sm font-roboto m-10 2000:m-10 1024:text-[8px] 1024:m-4 1440:text-[9px] 1440:m-5">Books — Authors</p>
                <div className="flex w-full justify-center">
                    <p className="320:text-4xl 768:text-5xl 1024:text-[30px] 1440:text-[45px] 2000:text-7xl flex justify-center font-fairplay my-24 1024:my-10 border-b-2 border-black shadow-sm w-max">Authors</p>
                </div>
            </div>

            <div className="w-full justify-center items-center 320:px-6 768:px-28 1024:px-[330px] 1440:px-[380px] 1535:px-[430px] 2000:px-[710px] py-28 1024:py-3 1440:py-12">

                <div className="items-center justify-center 1024:grid  1024:grid-cols-4 gap-y-6 320:flex 320:flex-wrap 320:gap-5 1024:gap-2 1440:gap-2 border 2000:gap-y-6">
                    {alphabets.split("").map((letter, index) => (
                        <div key={index} className="group flex flex-col items-center justify-center 320:h-[100px] 320:w-[100px] 1024:h-[80px] 1024:w-[80px] 1440:h-[160px] 1440:w-[160px] 2000:h-[250px] 2000:w-[250px] border-[1.5px] border-[#151516] rounded-md hover:bg-[#EEF1F2]">
                            <h1 className="320:text-[40px] 1024:text-[35px] 1440:text-[80px] 2000:text-[110px] font-fairplay text-[#CCCDCD] group-hover:text-black">{letter}</h1>
                            <svg className="hidden group-hover:block 320:w-6 320:h-3 768:w-8 768:h-4 1024:w-6 1024:h-3 1440:w-16 1440:h-6 2000:w-[36px] 2000:h-[36px]" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16"><g transform="rotate(90 8 8) translate(16 0) scale(-1 1)"><path fill="currentColor" fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" /></g></svg>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Section;
