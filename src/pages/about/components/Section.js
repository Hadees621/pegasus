import React from "react";

const Section = () => {
    return (
        <>
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

            {/* padded section 1 */}
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

                {/* line section */}
                <div className="flex mb-10 flex-col 1024:flex-row 320:gap-4 1024:gap-0">
                    <div className="flex-1">
                        <h1 className="text-[#77797B] font-fairplay text-[24px] leading-7 tracking-tight text-center 1024:text-start 320:text-[28px] 768:text-[32px] 1024:text-[23px] 1440:text-[32px] 1440:leading-9 2560:text-[55px] 2560:leading-[60px]">
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

            {/* imprints */}
            <div className="w-full bg-[#EDEFF1] py-32">
                <div className="320:mx-6 768:mx-12 1024:mx-52 1440:mx-[290px] 2xl:mx-[550px] ">
                    <h1 className="flex justify-center text-black font-fairplay text-[24px] leading-7 tracking-tight 1024:text-start 320:text-[28px] 1024:text-[23px] 1440:text-[32px] 1440:leading-9 2560:text-[55px] 2560:leading-[60px]">
                        Discover our imprints
                    </h1>
                    <p className="320:text-[12px] 768:text-[14px] 1024:text-[6.5px] 1024:leading-4 1440:text-[10.5px] 1440:leading-6 2xl:text-[16px] 2xl:leading-10 320:p-5 2560:py-2 w-full 320:items-center flex justify-center text-center">
                        Under our imprints, we are able to deliver a wide variety of genres including: fiction, non-fiction, children’s, educational, and poetry.
                    </p>

                    <div className="flex flex-col mt-8 gap-8">

                        <div className="flex flex-col items-center px-5 py-8 2560:p-14 w-full hover:bg-[#E6E9EC]">

                            <img src="assests/section/flag.png" alt="Imprint 1" className="w-20 h-20 object-cover rounded-full mb-4" />
                            <h2 className="text-[#9CA0A2] text-[20px] 768:text-[22px] 2560:text-[23px] mb-2 tracking-wider">Vanguard Press</h2>

                            <p className="text-black text-center mt-5 text-[12px] 768:text-[14px]">Vanguard is our flagship imprint. Here we want to
                                bring new, exciting authors and their work to
                                readers everywhere. We include most genres, the
                                most important thing is that the work should either
                                entertain or educate
                            </p>
                            <p className="text-gray-700 text-center mt-8 text-[12px] 768:text-[14px]">
                                Our enthusiastic and knowledgeable staff are here
                                to guide new authors through the, sometimes
                                perplexing, publishing process.
                            </p>

                            <button className="mt-8 flex justify-center items-center font-fairplay bg-[#031428] text-white rounded-3xl w-28 h-10">
                                Explore
                            </button>

                        </div>

                        {/* Second Div */}
                        <div className="flex flex-col items-center px-5 py-8 2560:p-14 w-full hover:bg-[#E6E9EC]">
                            <img src="assests/about/night.png" alt="Imprint 1" className="w-20 h-20 object-cover rounded-full mb-4" />
                            <h2 className="text-[#25B0AF] text-[20px] 768:text-[22px] 2560:text-[23px] mb-2 font-fairplay">Nightingale Books</h2>

                            <p className="text-gray-700 text-center mt-5 text-[12px] 768:text-[14px]">With our Nightingale imprint, we aim to give a child
                                the love of books that will last a lifetime. From our
                                beautifully illustrated books for the youngest of
                                book lovers to young adult fantasy and much in
                                between, including educational, our books delight
                                both children and adults alike.
                            </p>
                            <p className="text-gray-700 text-center mt-8 text-[12px] 768:text-[14px]">
                                If you think you can inspire a child, please read our
                                submissions guidelines.
                            </p>
                        </div>

                        {/* Third Div */}
                        <div className="flex flex-col items-center px-5 py-8 2560:p-14 w-full hover:bg-[#E6E9EC]">
                            <img src="assests/about/chimera.png" alt="Imprint 1" className="w-20 h-10 object-cover rounded-full mb-8" />
                            <h2 className="text-black text-[20px] 768:text-[22px] 2560:text-[23px] mb-2 font-fairplay">CHIMERA</h2>

                            <p className="text-gray-700 text-center mt-5 text-[12px] 768:text-[14px]">Our Chimera imprint is strictly for adults only. No
                                submissions will be accepted from anyone under
                                the age of eighteen. If you have a story to arouse
                                our interest, titillate our adult readers or fascinate
                                a fetishist – fiction or non-fiction – then this is the
                                imprint for you.
                            </p>

                            <p className="text-gray-700 text-center mt-8 text-[12px] 768:text-[14px]">
                                All content, however explicit, should be written
                                within the law
                            </p>
                        </div>
                    </div>

                </div>
            </div >

        </>
    );
};

export default Section;
