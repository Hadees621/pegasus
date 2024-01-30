import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

const Submitted = () => {

    return (
        <>
            <Header />
            <div className="320:p-5 1024:px-40 xl:px-52 2560:px-96 bg-[#F0F1F3]">
                <div className="flex flex-col gap-10 1024:flex-row bg-[#F0F1F3] py-10 1024:gap-8 2000:py-40">

                    <div className="w-full 1024:w-[60%] bg-[#F0F1F3] m-auto space-y-12 1024:space-y-4 1440:space-y-7">

                        <h1 className="text-[#A18758] font-fairplay text-[40px] leading-[45px] 1024:text-[40px] 1024:leading-[35px] 1440:text-[57px] 1440:leading-[57px] 2000:text-[95px] 2000:leading-[100px] 2000:tracking-[3px] items-center flex">
                            Thank you for submitting online with us.
                        </h1>

                        <div className="my-10 space-y-3 1024:text-[8px] 1440:text-[10px] 2000:text-[16px] 1024:space-y-1">
                            <p className="text-[#010004]">Your record has been created under the following details:</p>
                            <p className="text-[#7E7D7C]">Name Surname</p>
                            <p className="text-[#7E7D7C]">emailadddrees@outlook.co.uk</p>

                        </div>

                        <p className="text-[#010004] leading-8 2000:pr-32 tracking-wide 1024:text-[8px] 1024:leading-4 1440:text-[10px] 1440:leading-6 1440:pr-10 2000:text-[16px] 2000:leading-7">
                            You have submitted your manuscript to us. This will be reviewed by our submissions editor
                            at our London office. You will hear back from them with their feedback. If successfull, you
                            will be offered a contract to publish with us.
                        </p>

                        <div>
                            <Link to="/" className="text-[#90949D] font-fairplay text-[20px] border-b border-black w-max 1024:text-[10px] 1440:text-[11px] 2000:text-[20px] 2000:leading-7 pb-1 2000:pb-2">
                                Return to homepage
                            </Link>
                        </div>

                    </div>

                    <div className="w-full 1024:w-[65%]">
                        <img
                            src="assests/submitted/thankyou.jpg"
                            alt="Imprint 1"
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Submitted;
