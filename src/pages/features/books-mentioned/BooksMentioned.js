import React from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer";
import Banner from "../../../components/Banner";
import Sidebar from "../../books/components/SideBar";
import { bookData } from "../../books/utils";

const BooksMentioned = () => {

    return (
        <>
            <Header />
            <>
                <Banner title="Books mentioned" subtitle="Home — Books mentioned" />

                {/* filter  */}
                <div className="flex 320:flex-col 320:items-center 320:gap- 1024:flex-row 1440:flex-row 320:mx-5 1024:mt-0 1024:gap-2 1440:mt-0 mt-12 1024:mx-40 xl:mx-52 2560:mx-96 justify-between 2000:py-1">

                    <div className="2000:h-16 2000:w-[15%] 320:w-full 320:justify-center 1024:w-[25%] 1440:w-[30%] border-black flex items-center 1024:justify-start gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="1024:w-2 2000:w-6">
                            <path fill="currentColor" d="M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2z" />
                        </svg>
                        <p className="text-xl 1024:text-[8px] 1440:text-[15px] 2000:text-[21px] font-fairplay">Filter by</p>
                    </div>

                    <div class="flex relative group 320:mt-14 320:mb-5 1024:mt-0 1024:mb-0 ">
                        <div className="">
                            <button className="flex items-center justify-center gap-1 w-max 1024:px-0 1024:py-1 px-5 py-3 rounded-full border-[#D4D4D8]">
                                <p className="text-[20px] 1024:text-[8px] 1440:text-[15px] 2000:text-[21px] font-fairplay">Sort by</p>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="1024:w-3 1440:w-6 2000:w-8">
                                        <g transform="rotate(180 12 12)">
                                            <path fill="currentColor" d="m16.854 13.647l-4.5-4.5a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 .707.707L12 10.207l4.146 4.147a.498.498 0 0 0 .707 0a.5.5 0 0 0 0-.707" />
                                        </g>
                                    </svg>
                                    <div />
                                </div>
                            </button>
                            <div class="hidden absolute w-max p-4 group-hover:block">
                                <p>1223</p>
                                <p>1223</p>
                                <p>1223</p>
                                <p>1223</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* blogs */}
                <div className="flex 320:flex-col 320:items-center 320:mx-5 gap-4 1024:flex-row 1024:items-start 1024:mx-40 1024:gap-2 xl:mx-52 2560:mx-96">
                    <div className="w-[15%] 320:w-full 320:my-6 border-black 320:px-6 1024:px-0 1024:my-0 1024:w-[17%] 1440:w-[17%] 2000:w-[18%] 1440:mt-4 2000:mt-6">
                        <Sidebar showPrice={true} />
                    </div>

                    <div className="w-[85%] 320:w-full border-black 1024:w-[75%] 1440:w-[70%] 2560:w-[85%] ">
                        <div className="grid 768:grid-cols-3 1024:grid-cols-5 justify-center">
                            {bookData.map((book, index) => (
                                <div key={index} className="m-4 p-3 text-center 768:m-0 1440:m-1">
                                    <img className="320:h-[420px] 1024:h-[140px] 1024:w-[160px] 1440:h-[210px] 2560:w-[240px] 2560:h-[380px]" src={book.imageSrc} alt={`Book Image ${index + 1}`} />
                                    <div className='w-full text-start my-3'>
                                        <h3 className="1024:text-[6px] 1440:text-[11px] 2560:text-[19px] font-medium font-fairplay">{book.title}</h3>
                                        <p className="1024:text-[6px] 1440:text-[9px] 2560:text-[17px] text-[#B79248] font-roboto">{book.author}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* pagination */}
                <div className="flex flex-col gap-4 768:gap-8 justify-center items-center h-20 my-10 2000:my-28 lg:flex-row lg:justify-between 1024:mx-44 xl:mx-52 2560:mx-96">
                    <nav className="lg:mx-auto">
                        <ul class="flex items-center h-8 space-x-4 1024:text-[8px] 2000:text-[22px] 1024:space-x-1.5 1440:text-[10px] 1440:space-x-2 2000:space-x-4">
                            <li>
                                <a href="#" class="flex items-center justify-center h-8 ms-0 leading-tight text-gray-500 bg-white ">
                                    <span class="sr-only">Previous</span>
                                    <svg class="w-2.5 h-2.5 1024:w-1 1440:w-[4px] 2000:w-[20px] 2000:h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center h-8 leading-tight ">1</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center h-8 leading-tight ">2</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center h-8 leading-tight ">3</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center h-8 leading-tight ">4</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center h-8 leading-tight ">5</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center h-8 leading-tight text-gray-500">
                                    <span class="sr-only">Next</span>
                                    <svg class="w-2.5 h-2.5 1024:w-1 1440:w-[4px] 2000:w-[20px] 2000:h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <p className="flex lg:justify-end">
                        <a href="#" className="text-[20px] 1024:text-[7px] 1440:text-[10px] 2000:text-[22px] text-[#5D6162] font-fairplay tracking-wide inline-block pb-[2px] border-b border-[#5D6162]">Next</a>
                    </p>
                </div>
            </>
            <Footer />
        </>
    );
};

export default BooksMentioned;
