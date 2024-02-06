import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header/Header";

const Error = () => {

    return (
        <>
            <Header />

            <div className="flex flex-col justify-center items-center mb-24 mt-8">

                <h1 className="text-[80px] 2000:text-[150px] font-fairplay text-[#B79248] py-5"> 404 </h1>
                <p className="text-[9px] 2000:text-[15px]">Sorry, the page you are looking for was not found.</p>
                <p className="text-[9px] 2000:text-[15px] py-2 2000:py-4">You can go back to our <a className="border-b border-black" href="/">Homepage</a></p>

                <div class="flex items-center justify-center w-full mt-8 mb-6 2000:mt-28 2000:mb-36">
                    <div class="relative text-black w-full 768:w-[50%] 1024:w-[43%] 2000:w-[33%] bg-[#F3F4F3] h-8 1024:h-6 1440:h-8 2000:h-12 rounded-3xl flex items-center mx-3 1024:mx-0">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-3 h-3 2000:w-6 2000:h-6 ml-2 2000:ml-4">
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </span>
                        <input type="search" name="q" class="2000:py-2 text-[10px] 2000:text-lg text-white pl-10 2000:pl-16 focus:outline-none bg-[#F3F4F3] rounded-[200px]" placeholder="Search" autocomplete="off" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Error;
