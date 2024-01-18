import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "./components/SideBar";
import { articleData } from "./utils";

const Features = () => {
    const chunkedArticles = Array.from(
        { length: Math.ceil(articleData.length / 3) },
        (_, index) => articleData.slice(index * 3, (index + 1) * 3)
    );
    return (
        <>
            <Header />
            <>
                {/* banner */}
                <div className="bg-[#F1F1F3] justify-center 320:m-5 1024:h-52 1440:h-72 2000:h-[420px] 1440:flex-row 1024:mx-40 xl:mx-52 2560:mx-96 border border-[#F1F1F3]">
                    <p className="2000:text-sm font-roboto m-10 2000:m-10 1024:text-[8px] 1024:m-4 1440:text-[9px] 1440:m-5">Home — Features</p>
                    <div className="flex w-full justify-center">
                        <p className=" 320:text-4xl 768:text-5xl 1024:text-[30px] 1440:text-[45px] 2000:text-7xl flex justify-center font-fairplay my-24 1024:my-10 border-b-2 border-black shadow-sm w-max">Features</p>
                    </div>
                </div>

                {/* article */}
                <div className="flex 320:flex-col 320:items-center 320:gap-10 1024:flex-row 1440:flex-row 320:mx-5 1024:mt-0 1024:gap-2 1440:mt-0 my-16 1024:mx-40 xl:mx-52 2560:mx-96">

                    <div class="bg-[#EDEFF1] 320:mt-5 320:p-0 1440:mt-7 2000:mt-12">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-[70%] 2000:my-10 1024:pl-10 p-2 768:p-5 1440:py-6 1440:pl-6 2000:pl-12">
                                <img class="w-full 2000:h-[600px]" src="assests/features/article.png" alt="Image" />
                            </div>

                            <div class="md:w-[45%] 2000:px-10 flex flex-col 1024:justify-center 320:gap-3 320:p-3">
                                <p className='text-sm 768:mt-6 1024:text-[6px] 1440:text-[10px] 2000:text-base 2000:pb-14'>Blog category — 00 Month, 2022</p>
                                <h2 class="text-2xl 320:text-xl font-semibold 1024:text-[22px] 1440:text-[30px] 2000:text-[45px] font-fairplay">Article Title</h2>
                                <p class="320:text-sm 768:text-[11px] 1024:text-[8px] 1024:leading-[12px] 1440:text-[10px] 1440:leading-[20px] 1440:pr-6 font-medium 2000:text-[17px] 2000:leading-[32px] text-gray-700 768:mb-4 mb-8 mt-2 font-fairplay pr-3 2000:mt-6 768:mt-1">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                    veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                    commodo consequat.
                                </p>
                                <button className="bg-[#031428] text-base text-white px-4 rounded-3xl w-[130px] h-8 font-fairplay 1024:w-[61px] 1024:h-[20px] 1024:text-[6.5px] 1440:w-[81px] 1440:h-[26px] 1440:text-[9px] 2000:w-[150px] 2000:h-[46px] 2000:text-[16px] flex justify-center items-center 2000:mt-8 768:mb-3">Read more</button>
                            </div>
                        </div>
                    </div>

                </div>

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
                        <Sidebar />
                    </div>
                    <div className="w-full 320:w-full border-black 1024:w-[90%] 1440:w-[90%] 2000:w-[95%]">
                        <div className="grid justify-center">

                            {/* blog category */}
                            {chunkedArticles.map((chunk, chunkIndex) => (
                                <React.Fragment key={chunkIndex}>
                                    <div className="w-[85%] 320:w-full border-black">
                                        <div className="grid justify-center">
                                            {/* blog category */}
                                            <div className="w-[85%] 320:w-full border-black">
                                                <div className="grid justify-center">
                                                    {/* blog category */}
                                                    <div className='grid grid-cols-3 320:grid-cols-1 1024:grid-cols-3 320:gap-4 1024:gap-6 mt-8 1024:mt-0 1440:mt-4 2000:mt-10'>
                                                        {chunk.map((article, index) => (
                                                            <div key={index} className="m-3 text-center 1024:m-2 320:space-y-5 1024:space-y-2 2000:space-y-7">
                                                                <div className='flex justify-between'>
                                                                    <h3 className="2000:text-lg 1024:text-[6px] 1440:text-[8px] font-fairplay text-[#45484A]">{article.category}</h3>
                                                                    <h3 className="2000:text-lg 1024:text-[6px] 1440:text-[8px] font-fairplay text-[#45484A]">{article.date}</h3>
                                                                </div>
                                                                <div className='w-full'>
                                                                    <img className="w-full object-cover" src="assests/features/art.png" alt={`Section ${index + 1} Image`} />
                                                                </div>
                                                                <div className='w-full text-start items-end justify-end 320:space-y-8 1024:space-y-1 2000:space-y-3'>
                                                                    <h3 className="768:text-[20px] 2000:text-3xl 2000:mt-4 font-bold font-fairplay 1024:text-[11px] 1440:text-[18px] 1440:mt-2 text-[#0F1824]">{article.title}</h3>
                                                                    <p className="768:text-[17px] 768:leading-[20px] 1024:leading-[12px] 2000:text-[16px] 2000:mt-6 2000:leading-[30px] text-[#0F1824] font-roboto 320:text-[12px] 1024:text-[6px] 1440:text-[9px] 1440:mt-2 1440:leading-[17px] leading-[14px] 2000:mr-4">{article.content}</p>

                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {(chunkIndex + 1 < chunkedArticles.length) && <hr className="border-1 border-[#9FA2A3] mt-14 mb-10" />}
                                </React.Fragment>
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

export default Features;
