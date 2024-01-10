import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Fiction = () => {
    return (
        <>
            <Header />
            <div className="bg-[#F1F1F3] justify-center 1024:mx-10 320:m-5 1440:mx-36 2560:mx-96 h-96 border">
                <p className="text-sm font-roboto m-8">Books — Fiction</p>
                <p className="text-7xl flex justify-center font-fairplay my-24">Fiction</p>

            </div>
            <div className="flex 1024:mx-10 320:mx-5 1440:mx-36 2560:mx-96">
                <div className="h-16 w-[15%] border-black border">

                </div>
                <div className="h-16 w-[85%] border-black border">

                </div>
                
            </div>
            <div className="flex 1024:mx-10 320:mx-5 1440:mx-36 2560:mx-96 h-96">
                <div className="h-96 w-[15%] border-black border">

                </div>
                <div className="h-96 w-[85%] border-black border">
                zubair Sahb, i am sure youre very busy, i just needed to ask some questions, let me mention them here so you can either text me or call me on your schedule, 1- I am using reactjs + tailwind implement the frontend, I believe i will need the data to be populate the frontend react app, are there rest apis available for this? if not would the backend developer be able to give me the data in the apis? Koi issue tou nai hoga in future connecting the backend and frontend. maine discuss kia tha Yasir sahb say tou he advised me to get the clarity from you to avoid compatibility issues. 2- maine 4 to 5 pdfs implement krdeye hain, or vercel app update hoarhe hai sath sath o [ -1300px- conatainer ki width]
                </div>
                
            </div>
            <Footer />
        </>
    );
};

export default Fiction;
