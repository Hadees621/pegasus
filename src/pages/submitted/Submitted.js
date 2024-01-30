import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";

const Submitted = () => {

    return (
        <>
            <Header />
            <div className="320:p-5 1024:px-40 xl:px-52 2560:px-96  bg-[#F0F1F3]">
                <div className="flex  bg-[#F0F1F3] py-40">

                    <div className="w-[60%] bg-[#F0F1F3] m-auto space-y-12">
                        <h1 className="text-[#A18758] font-fairplay text-[24px] leading-7 tracking-tight text-center 1024:text-start 320:text-[28px] 768:text-[32px] 1024:text-[23px] 1440:text-[32px] 1440:leading-9 2000:text-[95px] 2000:leading-[100px] 2000:tracking-[3px] items-center flex">
                            Thank you for submitting online with us.
                        </h1>

                        <div className="my-10 space-y-3">
                            <p className="text-[#010004]">Your record has been created under the following details:</p>
                            <p className="text-[#7E7D7C]">Name Surname</p>
                            <p className="text-[#7E7D7C]">emailadddrees@outlook.co.uk</p>

                        </div>

                        <p className="text-[#010004] leading-8 pr-32 tracking-wide">
                            You have submitted your manuscript to us. This will be reviewed by our submissions editor
                            at our London office. You will hear back from them with their feedback. If successfull, you
                            will be offered a contract to publish with us.
                        </p>

                        <p className="text-[#90949D] font-fairplay text-[20px] border-b border-black w-max">Return to homepage</p>
                    </div>

                    <div className=" w-[65%]">
                        <img
                            src="assests/submitted/thankyou.jpg"
                            alt="Imprint 1"
                        // className="object-cover"
                        />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Submitted;
