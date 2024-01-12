import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "./components/SideBar";
import { bookData } from "./utils";

const Fiction = () => {
    const categories = [
        {
            mainTitle: 'Categories',
            subTitle: 'Subcategories',
            items: [
                {
                    title: 'Fiction',
                    items: [
                        'Action & adventure',
                        'Classics',
                        'Crime',
                        'Thrillers & mysteries',
                        'General fiction',
                        'Romance & Erotica',
                        'Poetry',
                        'Horror',
                        'Short stories',
                        'Fantasy & Science fiction',
                        'Historical fiction'
                    ],
                },
                {
                    title: 'Non-fiction',
                    items: [
                        'Art',
                        'Biographies',
                        'Food & drink',
                        'Health & lifestyle',
                        'History',
                        'Politics & philosophy',
                        'Science & nature',
                        'Sports',
                        'Religion & spirituality',
                        'Self help'
                    ],
                },
                {
                    title: "Children's",
                    items: [
                        'Young children (0)',
                        'Young Adult fiction (0)',
                        'General fiction (0)',
                        'Non-fiction (0)'
                    ],
                },
            ],
        },
        {
            mainTitle: 'Imprints',
            items: [
                'Vanguard Press',
                'Nightingale Books',
                'Chimera',
            ],
            viewAllText: 'View all Fiction'
        },
        {
            mainTitle: 'Format',
            items: [
                'Paperback',
                'Hardback',
                'eBook',
                'Audiobooks'
            ],
        },
    ];

    return (
        <>
            <Header />
            <>
                <div className="bg-[#F1F1F3] justify-center 320:m-5 1024:h-52 1440:h-72 2560:h-[420px] 1440:flex-row 1024:mx-40 xl:mx-52 2xl:mx-96 border border-[#F1F1F3]">
                    <p className="2560:text-sm font-roboto m-10 2560:m-10 1024:text-[8px] 1024:m-4 1440:text-[9px] 1440:m-5">Books — Fiction</p>
                    <div className="flex w-full justify-center">
                        <p className=" 320:text-4xl 768:text-5xl 1024:text-[30px] 1440:text-[45px] 2560:text-7xl flex justify-center font-fairplay my-24 1024:my-10 border-b-2 border-black shadow-sm w-max">Fiction</p>
                    </div>
                </div>

                <div className="flex 320:flex-col 320:items-center 320:gap-10 1024:flex-row 1440:flex-row 320:mx-5 1024:mt-0 1024:gap-2 1440:mt-0 mt-12 1024:mx-40 xl:mx-52 2xl:mx-96 ">

                    <div className="2560:h-16 2560:w-[15%] 320:w-full 320:justify-center 1024:w-[25%] 1440:w-[30%] border-black flex items-center 1024:justify-start gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="1024:w-4">
                            <path fill="currentColor" d="M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2z" />
                        </svg>
                        <p className="text-xl 1024:text-xs 1440:text-[15px] 2560:text-xl font-fairplay">Filter by</p>
                    </div>

                    {/* rounds */}
                    <div className="flex 320:flex-col 320:gap-6 1024:flex-row 1024:gap-1 1024:w-[75%] 1440:w-[70%] items-center justify-start 2560:h-16 2560:w-[85%] border-black 2560:gap-4 2560:px-8 1440:gap-1 1024:px-4 ">
                        <button className="flex items-center justify-center gap-2 border w-max px-8 py-2.5 1024:px-2 1024:py-0.5 1440:px-4 1440:py-1.5  2560:px-8 2560:py-2.5 rounded-full border-[#D4D4D8]">
                            <p className="text-[17px] 1024:text-[10px] 1440:text-[14px] 2560:text-[20px] font-fairplay">Explore</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="flex items-center justify-center gap-2 w-6 h-6 1024:w-3 1440:w-4 2560:w-6 text-gray-500 hover:text-gray-700 "
                            >
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <button className="flex items-center justify-center gap-2 border w-max px-8 py-2.5 1024:px-2 1024:py-0.5 1440:px-4 1440:py-1.5 2560:px-8 2560:py-2.5 rounded-full border-[#D4D4D8]">
                            <p className="text-[17px] 1024:text-[10px] 1440:text-[14px]  2560:text-[20px] font-fairplay">Vanguard press</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="flex items-center justify-center gap-2 w-6 h-6 1024:w-3 1440:w-4 2560:w-6 text-gray-500 hover:text-gray-700 "
                            >
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <button className="flex items-center justify-center gap-2 border w-max px-8 py-2.5 1024:px-2 1024:py-0.5 1440:px-4 1440:py-1.5 2560:px-8 2560:py-2.5 rounded-full border-[#D4D4D8]">
                            <p className="text-[17px] 1024:text-[10px] 1440:text-[14px] 2560:text-[20px] font-fairplay">Under £15</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="flex items-center justify-center gap-2 w-6 h-6 1024:w-3 1440:w-4 2560:w-6 text-gray-500 hover:text-gray-700 "
                            >
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div class="flex relative group 320:mt-14 320:mb-5 1024:mt-0 1024:mb-0 ">
                        <div className="">
                            <button className="flex items-center justify-center gap-2 w-max 1024:px-2 1024:py-1 px-5 py-3 rounded-full border-[#D4D4D8]">
                                <p className="text-[20px] 1024:text-[13px] 1440:text-[15px] 2560:text-[22px] font-fairplay">Sort by</p>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="1024:w-5 1440:w-6 2560:w-8">
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

                <hr className="border-1 border-[#EDEEEE] mb-2 mt-10" />

                <div className="flex 320:flex-col 320:items-center 320:mx-5 gap-4 1024:flex-row 1024:items-start 1024:mx-40 1024:gap-2 xl:mx-52 2xl:mx-96">
                    <div className="w-[15%] 320:w-full 320:my-6 border-black 320:px-6  1024:px-0 1024:my-0 1024:w-[25%] 1440:w-[30%] 2560:w-[15%] ">
                        <Sidebar categories={categories} />
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

                {/* <div className="flex items-end justify-end w-full border" >

                    <div className="flex justify-between items-center h-12 border my-10 w-[60%]">
                        <nav aria-label="Page navigation example">
                            <ul class="flex items-center -space-x-px h-8 text-sm">
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white ">
                                        <span class="sr-only">Previous</span>
                                        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight ">1</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight ">2</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight ">3</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight ">4</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight ">5</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500">
                                        <span class="sr-only">Next</span>
                                        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <p className="border flex justify-end mt-2 mr-[520px]">
                            <a href="#" className="text-[20px] text-[#5D6162] font-fairplay tracking-wide inline-block pb-[2px] border-b border-[#5D6162]">Next</a>
                        </p>
                    </div>
                </div> */}
            </>
            <Footer />
        </>
    );
};

export default Fiction;
