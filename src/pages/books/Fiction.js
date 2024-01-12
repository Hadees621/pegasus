import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "./components/SideBar";
import { bookData } from "../homepage/utils/utils";

const Fiction = () => {
    return (
        <>
            <Header />
            <div className="bg-[#F1F1F3] justify-center 1024:mx-10 320:m-5 1440:mx-36 2560:mx-96 h-96 border">
                <p className="text-sm font-roboto m-8">Books — Fiction</p>
                <p className="text-7xl flex justify-center font-fairplay my-24">Fiction</p>
            </div>
            <div className="flex 1024:mx-10 320:mx-5 1440:mx-36 2560:mx-96 mt-12 ">
                <div className="h-16 w-[15%] border-black  flex items-center justify-start gap-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2z" /></svg>
                    <p className="text-xl font-fairplay">Filter by</p>
                </div>

                <div className="flex items-center justify-start h-16 w-[85%] border-black gap-4 px-8">
                    <button className="flex items-center justify-center gap-2 border w-max px-5 py-2.5 rounded-full border-[#D4D4D8]">
                        <p className="text-[17px] font-fairplay">Explore</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="flex items-center justify-center gap-2 w-6 h-6 text-gray-500 hover:text-gray-700 "
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <button className="flex items-center justify-center gap-2 border w-max px-5 py-2.5 rounded-full border-[#D4D4D8]">
                        <p className="text-[17px] font-fairplay">Vanguard press</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="flex items-center justify-center gap-2 w-6 h-6 text-gray-500 hover:text-gray-700 "
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <button className="flex items-center justify-center gap-2 border w-max px-5 py-2.5 rounded-full border-[#D4D4D8]">
                        <p className="text-[17px] font-fairplay">Under £15</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="flex items-center justify-center gap-2 w-6 h-6 text-gray-500 hover:text-gray-700 "
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex relative group">
                    <div className="">
                        <button className="flex items-center justify-center gap-2 w-max px-5 py-3 rounded-full border-[#D4D4D8]">
                            <p className="text-[20px] font-fairplay">Sort by</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g transform="rotate(180 12 12)"><path fill="currentColor" d="m16.854 13.647l-4.5-4.5a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 .707.707L12 10.207l4.146 4.147a.498.498 0 0 0 .707 0a.5.5 0 0 0 0-.707" /></g></svg>
                                <div />
                            </div>
                        </button>
                        <div class="hidden absolute w-max p-4 group-hover:block">
                            <p>Hello World!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex 1024:mx-10 320:mx-5 1440:mx-36 2560:mx-96 mt-10">
                <div className="h-96 w-[15%] border-black ">
                    {/* <Sidebar /> */}
                </div>
                <div className="w-[85%] border-black ">
                    <div className="grid 768:grid-cols-3 1024:grid-cols-5 justify-center 2560:mt-6">
                        {bookData.map((book, index) => (
                            <div key={index} className="m-4 p-3 text-center 768:m-0 1440:m-1">
                                <img className="320:h-[420px] 1024:h-[140px] 1024:w-[160px] 1440:h-[210px] 2560:w-[240px] 2560:h-[380px]" src={book.imageSrc} alt={`Book Image ${index + 1}`} />
                                <div className='w-full text-start my-2'>
                                    <h3 className="1024:text-[8px] 1440:text-[11px] 2560:text-[19px] font-medium font-fairplay">{book.title}</h3>
                                    <p className="1024:text-[6px] 1440:text-[9px] 2560:text-[17px] text-[#B79248] font-roboto">{book.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Fiction;
