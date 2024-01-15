import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const About = () => {
    return (
        <>
            <Header />
            <div className="bg-[#F1F1F3]  justify-center 320:m-5 1024:h-48 1440:h-60 2560:h-[370px] 1440:flex-row 1024:mx-40 xl:mx-52 2xl:mx-96 border border-[#F1F1F3]">
                <p className="320:text-[12px] 320:m-5 2560:text-sm font-roboto m-10 2560:m-10 1024:text-[8px] 1024:m-4 1440:text-[9px] 1440:m-5">Books — About us</p>
                <div className="flex w-full justify-center">
                    <p className="320:text-4xl 768:text-5xl 1024:text-[25px] 1440:text-[45px] 2560:text-[70px] flex justify-center font-fairplay my-24 border-b-2 border-black shadow-sm w-max 320:mt-16 320:mb-6 1024:mt-12 1024:mb-0 1440:mb-1 2560:mb-3 pb-3">About us</p>
                </div>
                <div className="flex w-full justify-center items-center 1024:px-32 1440:px-52 2560:px-[430px]">
                    <p className="320:text-[12px] 768:text-[14px] 1024:text-[6.5px] 1024:leading-4 1440:text-[10.5px] 1440:leading-6 2xl:text-[16px] 2xl:leading-10 320:p-5 w-full 320:items-center flex justify-center text-center py-2">
                        Pegasus Elliot MacKenzie are at the forefront of the ever-changing publishing industry. Possessing the experience and
                        integrity that a great publisher requires, we have been successfully publishing high quality books for over 20 years.
                    </p>
                </div>
            </div>

            <div className='w-full justify-center 320:px-6 768:px-12 1024:px-52 1440:px-[290px] 2xl:px-[550px]'>

                {/* goals */}
                <div className="flex 320:flex-col 320:gap-9 1024:gap-0 1024:flex-row 2xl:space-x-10 2560:my-10">

                    <div className="px-1 320:space-y-3 1024:space-y-1 1024:px-2 2xl:space-y-3">
                        <h1 className="font-bold text-[#77797B] font-fairplay 320:text-[20px] 768:text-[22px] 1024:text-[10px] 1440:text-[16px] 2xl:text-[28px] text-center 1024:text-start 1024:my-1.5 1440:my-2.5 2xl:my-5">The Leading Independant Trade Publishers</h1>
                        <p className="flex leading-8 font-roboto 320:text-[13px] 320:leading-5 768:text-[16px] 768:leading-6 1024:text-[6px] 1024:leading-[13px] 1440:text-[9.5px] 1440:leading-[19px] 2xl:text-[16px] 2xl:leading-8 text-center 1024:text-start">
                            Pegasus Elliot Mackenzie has been one of the UK’s foremost independent publishing groups
                            collectively publishing for almost twenty years. We are determined advocates for authors and
                            aspiring writers, we strive to create excellence and most importantly we have made it our mission
                            to create a global platform for our published authors. We have published over 2,000 titles and sold
                            our books in 33 countries around the world. We also regularly work with charities and support
                            causes which are close to our authors and us.
                        </p>
                    </div>
                    <div className="px-1 320:space-y-3 1024:space-y-1 1024:px-4 2xl:space-y-3">
                        <h1 className="font-bold text-[#77797B] font-fairplay 320:text-[20px] 768:text-[22px] 1024:text-[10px] 1440:text-[16px] 2xl:text-[28px] text-center 1024:text-start 1024:my-1.5 1440:my-2.5 2xl:my-5">We strive for excellence</h1>
                        <p className="flex leading-8 font-roboto 320:text-[13px] 320:leading-5 768:text-[16px] 768:leading-6 1024:text-[6px] 1024:leading-[13px] 1440:text-[9.5px] 1440:leading-[19px] 2xl:text-[16px] 2xl:leading-8 text-center 1024:text-start">
                            Making sure to incorporate new innovative ideas, expand our use of technology and explore every
                            available avenue. We are with our authors every step of the way, from being accepted by our
                            editorial team to creating their stand-out cover…right the way into distribution and publicity! In 25
                            years we have grown from one publishing house releasing a few wonderful books a year, to two
                            fully developed and thriving publishing houses, with over 700 titles in marketing, Pegasus is
                            considered one of the fastest growing independent publishing houses in the UK.
                        </p>
                    </div>

                </div>

                {/* image */}
                <div class="relative bg-cover bg-center 1024:h-[255px] 1440:h-[300px] 2560:h-[600px] my-10" style={{ backgroundImage: `url('assests/about/49.jpg')` }}></div>

                <div className="flex mb-10 flex-col 1024:flex-row 320:gap-4 1024:gap-0">
                    <div className="flex-1">
                        <h1 className="text-[#77797B] font-fairplay text-[24px] leading-7 tracking-tight text-center 1024:text-start 320:text-[28px] 1024:text-[23px] 1440:text-[32px] 1440:leading-9 2560:text-[55px] 2560:leading-[60px]">
                            Books to us, are more than just reading material
                        </h1>
                    </div>
                    <div className="flex-1 px-5">
                        <p className="flex leading-8 font-roboto tracking-tight 320:text-[13px] 320:leading-5 768:text-[16px] 768:leading-6 1024:text-[6.5px] 1024:leading-[14px] 1440:text-[9.5px] 1440:leading-[19px] 2xl:text-[16px] 2xl:leading-9 text-center 1024:text-start">
                            They are the gateway to so much. Reading one book can change a life – they can light a fire of creativity
                            and stimulate growing and grown minds. But books need to be published to be read, and that is where we step
                            in. Our aim is to keep reading and creativity alive by showcasing as much talent as we can. Our dedicated
                            team works together with authors to bring out the best in them, bring their ideas alive, and finally show it
                            off to worldwide audiences.
                        </p>
                    </div>
                </div>


            </div>


            <Footer />
        </>
    );
};

export default About;
