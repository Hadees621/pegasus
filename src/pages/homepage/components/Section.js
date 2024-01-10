import React from 'react'
import { aboutAuthorData, articleData, audioBooksData, bookData, fantasyReadData, imprintData, provkingNovelData } from './../utils/utils'

const ImprintSection = ({ title, content, imageSrc }) => (
    <div className="1024:m-0 1024:py-4 1024:px-2 1440:px-4 1440:m-0 2560:px-6 m-4 p-10 320:p-6 768:p-8 text-center group bg-white transition-colors duration-300 ease-in-out hover:bg-[#EDEFF1] 2560:h-[380px] 1024:h-[205px] 1440:h-[235px]">
        <div className="w-full">
            <img className="2560:h-[100px] 1024:h-[40px] 2560:p-2" src={imageSrc} alt="Section Image" />
        </div>
        <div className="w-full text-start">
            <h3 className="1440:text-xl 2560:text-3xl 1024:text-[12px] font-bold font-fairplay my-3 1024:pt-0 pl-0">{title}</h3>
            <p className="1440:text-[9px] 2560:text-base 1024:text-[7px] text-[#2A2E30] font-roboto  py-6 1024:py-0 tracking-normal 2560:leading-8 leading-4">{content}</p>
        </div>
    </div>
);

const Section = ({ isMegaMenuOpen, applyBlur }) => {
    const styles = {
        filterBlur: {
            filter: 'blur(5px)'
        },
    };

    return (
        <>
            <div style={isMegaMenuOpen || applyBlur ? styles.filterBlur : {}}
            >
                <div className='h-[400px] bg-[#FEDFB9] 1440:mx-16 rounded-sm mb-10 1024:mb-3'> </div>
                <div className='w-full justify-center 1024:px-40 320:p-5 xl:px-52 2xl:px-96 border'>

                    {/* Established section */}
                    <div className='flex 320:flex-col lg:flex-row gap-12 1024:gap-3'>
                        <div className="w-full bg-white flex flex-col p-5 1024:p-0 justify-center 1024:items-start 1024:w-[50%] 1440:w-[60%]">
                            <h2 className="2560:text-3xl 1440:text-[20px] font-bold font-fairplay 1024:text-[11px]">Established since 1999</h2>
                            <p className='font-roboto 2560:text-[18px] 1440:text-[10px] 1440:my-4 1024:text-[6px] mb-4 mr-5 text-black'>Pegasus Elliot MacKenzie Publishers have been publishing high quality books from exciting
                                authors for more than 20 years..
                            </p>
                            <button className="bg-[#031428] text-lg text-white rounded-3xl w-[150px] h-12 font-fairplay 1024:w-[60px] 1024:h-[18px] 1440:w-[80px] 1440:h-[24px] 1440:text-[10px] 2560:w-[130px] 2560:h-[45px] 2560:text-[15px] 1024:text-[8px] items-center flex justify-center font-extralight">Explore</button>
                        </div>

                        <div className="flex items-center border-black 1024:w-[90%] 1440:w-[95%]">
                            <img className="320:h-[150px] 320:w-full object-cover 1024:h-[130px] 1440:h-[190px] 2560:h-[300px]" src="assests\section\section1.png" alt="Image 1" />
                        </div>

                        <div className="w-full flex items-center 1024:w-[67%] 1440:w-[75%]">
                            <img className="320:h-[280px] 320:w-full object-cover 1024:h-[130px] 1440:h-[190px] 2560:h-[300px]" src="assests\section\section2.png" alt="Image 2" />
                        </div>
                    </div>

                    {/* new releases */}
                    <div className="flex items-center mt-10">
                        <div className="flex-grow border-t border-[#8F9191]"></div>
                        <div className="text-[#5D6162] 320:text-lg 1024:text-[11px] 1440:text-[15px] 2560:text-[28px] font-fairplay px-2">Take a look at our new releases</div>
                        <div className="flex-grow border-t border-[#8F9191]"></div>
                    </div>

                    <div className="grid 768:grid-cols-3 1024:grid-cols-6 justify-center 2560:mt-6">
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

                    <p className="text-center">
                        <a href="#" className="text-[#5D6162] 1024:text-[6px] 1440:text-[11px] 2560:text-[21px] 2560:mt-6 font-fairplay tracking-wide inline-block pb-[2px] border-b border-[#5D6162]">Browse more</a>
                    </p>

                    {/* latest features */}
                    <div className="flex items-center mt-6 2560:mt-10">
                        <div className="flex-grow border-t border-[#8F9191]"></div>
                        <div className="text-[#5D6162] 320:text-lg 1024:text-[11px] 1440:text-[15px] 2560:text-[28px] font-fairplay px-2">The latest features</div>
                        <div className="flex-grow border-t border-[#8F9191]"></div>
                    </div>

                    <div class="bg-[#EDEFF1] p-4 320:p-0 1440:mt-7 2560:mt-12">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-[70%] py-4 pl-4">
                                <img class="w-full h-auto" src="assests\section\flowerss.png" alt="Image" />
                            </div>

                            <div class="md:w-[45%] px-4 2560:px-10 flex flex-col 1024:justify-center">
                                <p className='text-sm pb-6 1024:text-[6px] 1440:text-[9px] 2560:text-base 2560:pb-14'>Blog category — 00 Month, 2022</p>
                                <h2 class="text-2xl 320:text-xl font-semibold 1024:text-[22px] 1440:text-[30px] 2560:text-4xl font-fairplay">Article Title</h2>
                                <p class="text-sm 320:text-xs 1024:text-[6px] 1024:leading-[12px] 1440:text-[9.5px] 1440:leading-[17px] font-medium 1440:text-base 2560:text-[17px] 2560:leading-[32px] text-gray-700 mb-8 mt-2 font-roboto pr-3 2560:mt-8">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                    veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                    commodo consequat</p>
                                <button className="bg-[#031428] text-base text-white px-4 rounded-3xl w-[130px] h-8 font-fairplay 1024:w-[61px] 1024:h-[20px] 1024:text-[6.5px] 1440:w-[81px] 1440:h-[26px] 1440:text-[9px] 2560:w-[150px] 2560:h-[46px] 2560:text-[15px] flex justify-center items-center 2560:mt-10">Read more</button>
                            </div>
                        </div>
                    </div>

                    {/* blog category */}
                    <div className='grid grid-cols-3 320:grid-cols-1 1024:grid-cols-3 1024:gap-6 mt-3 1440:mt-6 2560:mt-10'>
                        {articleData.map((article, index) => (
                            <div key={index} className="m-3 text-center 1024:m-2">
                                <div className='flex justify-between'>
                                    <h3 className="2560:text-lg 1024:text-[6px] 1440:text-[8px]  font-fairplay">{article.category}</h3>
                                    <h3 className="2560:text-lg 1024:text-[6px] 1440:text-[8px] font-fairplay">{article.date}</h3>
                                </div>
                                <div className='w-full'>
                                    <img className="w-full object-cover" src={article.imageSrc} alt={`Section ${index + 1} Image`} />
                                </div>
                                <div className='w-full text-start items-end justify-end'>
                                    <h3 className="2560:text-3xl 2560:mt-4 font-bold font-fairplay 1024:text-[11px] 1440:text-[18px] 1440:mt-2">{article.title}</h3>
                                    <p className="2560:text-[17.5px] 2560:mt-6 2560:leading-[30px] text-[#0E172B] font-roboto 1024:text-[6px] 1440:text-[9px] 1440:mt-2 1440:leading-[17px] leading-[14px]">{article.content}</p>
                                    <a href="#" className="text-[#0E172B] 2560:text-lg 1024:text-[6px] 1440:text-[10px] font-roboto tracking-wide underline border-[#5D6162] items-start inline-block 1440:mt-6 2560:mt-9">Read more</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Audio books */}
                    <div className="flex items-center mt-6 2560:mt-10">
                        <div className="flex-grow border-t border-[#8F9191]"></div>
                        <div className="text-[#5D6162] 320:text-lg 1024:text-[11px] 1440:text-[15px] 2560:text-[28px] font-fairplay px-2">Have a listen to our audio books</div>
                        <div className="flex-grow border-t border-[#8F9191]"></div>
                    </div>

                    <div className="grid 768:grid-cols-3 1024:grid-cols-6 justify-center 1440:mt-3 2560:mt-6">
                        {audioBooksData.map((book, index) => (
                            <div key={index} className="m-4 p-4 text-center 768:m-0 1440:m-1">
                                <img className="320:h-[420px] 1024:h-[110px] 1024:w-[200px]  1440:h-[150px] 2560:h-[240px]" src={book.imageSrc} alt={`Book Image ${index + 1}`} />
                                <div className='w-full text-start mt-2'>
                                    <h3 className="1024:text-[8px] 1440:text-[11px] 2560:text-[19px] font-medium font-fairplay">{book.title}</h3>
                                    <p className="1024:text-[6px] 1440:text-[9px] 2560:text-[17px] text-[#B79248] font-roboto">{book.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center">
                        <a href="#" className="text-[#5D6162] 1024:text-[6px] 1440:text-[11px] 2560:text-[21px] 2560:mt-6 font-fairplay tracking-wide inline-block pb-[2px] border-b border-[#5D6162]">Browse more</a>
                    </p>

                    {/* imprints */}
                    <div className='grid grid-cols-3 320:grid-cols-1 1024:grid-cols-4 mt-8 gap-1 1440:gap-2'>
                        <div className="1024:m-0 1024:py-4 1024:px-2 1440:px-4 1440:m-0 text-center group bg-white transition-colors duration-300 ease-in-out hover:bg-[#EDEFF1] 2560:h-[380px] 1024:h-[205px] 1440:h-[235px]">
                            <div className='w-full text-start 2560:mt-10 1024:mt-4'>
                                <h3 className="2560:text-3xl text-[#5D6162] font-fairplay 2560:pt-8 1024:pt-3 1024:text-[12px] 1440:pt-5 1440:text-[18px]">Our imprints</h3>
                                <p className="2560:text-sm text-[#5D6162] font-roboto py-6 pr-4 text-start 1024:text-[6px] 1024:leading-3 1440:text-[8px] 1440:leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button className="2560:mt-6 1024:mt-0 bg-[#031428] 2560:text-lg text-white 2560:px-4 2560:py-2 rounded-3xl 2560:w-[150px] 2560:h-12 1024:w-[70px] 1024:h-[20px] 1024:text-[7px] 1440:w-[80px] 1440:h-[25px] 1440:text-[10px] flex justify-center items-center font-fairplay">Explore</button>
                            </div>
                        </div>

                        {imprintData.map((imprint, index) => (
                            <ImprintSection key={index} {...imprint} />
                        ))}
                    </div>

                    {/* Thoughts provoking  */}
                    <div className="flex items-center mt-10">
                        <div className="flex-grow border-t border-[#8F9191]"></div>
                        <div className="text-[#5D6162] 320:text-lg 1024:text-[11px] 1440:text-[15px] 2560:text-[28px] font-fairplay px-2">Thought provoking novels</div>
                        <div className="flex-grow border-t border-[#8F9191]"></div>
                    </div>

                    <div className="grid 768:grid-cols-3 1024:grid-cols-6 justify-center 2560:mt-6">
                        {provkingNovelData.map((book, index) => (
                            <div key={index} className="m-4 p-3 text-center 768:m-0 1440:m-1">
                                <img className="320:h-[420px] 1024:h-[140px] 1024:w-[160px] 1440:h-[210px] 2560:w-[240px] 2560:h-[380px]" src={book.imageSrc} alt={`Book Image ${index + 1}`} />
                                <div className='w-full text-start my-2'>
                                    <h3 className="1024:text-[8px] 1440:text-[11px] 2560:text-[19px] font-medium font-fairplay">{book.title}</h3>
                                    <p className="1024:text-[6px] 1440:text-[9px] 2560:text-[17px] text-[#B79248] font-roboto">{book.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center">
                        <a href="#" className="text-[#5D6162] 1024:text-[6px] 1440:text-[11px] 2560:text-[21px] 2560:mt-6 font-fairplay tracking-wide inline-block pb-[2px] border-b border-[#5D6162]">Browse more</a>
                    </p>

                    {/* <div className="flex items-center py-8 mt-6">
                        <div className="flex-grow border-t border-[#8F9191]"></div>
                        <div className="text-[#5D6162] 320:text-lg 1024:text-2xl font-fairplay px-4">Author interviews
                        </div>
                        <div className="flex-grow border-t border-[#8F9191]"></div>
                    </div>

                    <div className='flex bg-[#0F1824] h-[730px] justify-center items-center px-10'>

                        <div className='w-1/3 h-[640px]'>
                            <div className='w-full text-start mt-10 py-8 pr-4'>
                                <h3 className="text-3xl font-fairplay pt-4 text-[#B79248]">Francis James | Author Interview for
                                    The Mad Hatter's Tea Party
                                </h3>
                                <p className="text-lg text-white font-roboto py-4 pr-10 text-start">This is a novel about relationships, fears and feelings as it
                                    traverses the sometimes long road to good mental health. A
                                    must read for everyone interested in mental illness - that is, all
                                    of us!</p>
                                <button className="mt-6 bg-white text-lg text-black px-4 py-2 rounded-3xl w-[150px] h-12 font-fairplay mb-4">View more</button>
                                <div className='flex gap-8 m-8'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path fill="none" stroke="white" stroke-width="2" d="m7 2l10 10L7 22" /></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-width="2" d="m7 2l10 10L7 22" /></svg>
                                    <p className='text-white'>
                                        01 / 03

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/3 h-[640px]'>
                            <img className="object-cover" src="assests/section/youtube.png" alt={`Book Image`} />
                        </div>
                    </div> */}

                    {/* about author */}
                    <div className='grid grid-cols-3 320:grid-cols-1 1024:grid-cols-3 mt-8 px-20 320:px-0 gap-4 768:p-10 1024:p-0 1024:px-0 1024:gap-0'>
                        {aboutAuthorData.map((author, index) => (
                            <div
                                key={index}
                                className="m-4 320:m-0 320:p-3 768:p-10 1024:p-1 1440:p-3 text-center group bg-white transition-colors duration-300 ease-in-out hover:bg-[#EDEFF1] h-[450px] 1024:h-[210px] 1440:h-[270px] 2560:h-[450px]"
                            >
                                <div className="w-full text-start 2560:p-10 320:p-0 1024:p-3">
                                    <h3 className="2560:text-2xl font-normal font-fairplay text-[#B79248] 1024:text-[10px] 1440:text-[18px] underline">{author.name}</h3>
                                    <h3 className="2560:text-2xl font-normal font-fairplay 1440:p-1 2560:pt-1 text-[#B79248] underline 1024:text-[10px] 1440:text-[18px] 1024:pt-0">{author.title}</h3>
                                    <p className="2560:text-base text-[#2A2E30] font-fairplay 1440:py-4 2560:py-6 1024:py- tracking-normal 1024:text-[6px] 1440:text-[12px] 1024:py-3">{author.message}</p>
                                    <p className="2560:text-base text-[#2A2E30] font-fairplay 1440:py-2 2560:py-4 1024:py-2 tracking-normal 1024:text-[7px] 1440:text-[10px] 1024:leading-3">{author.paragraph}</p>
                                    {author.button && (
                                        <button className="2560:mt-6 bg-[#031428] 2560:text-lg text-white px-4 py-2 rounded-3xl 2560:w-[150px] 2560:h-12 font-fairplay 1024:w-[63px] 1024:h-[20px] 1024:text-[7px] 1440:w-[73px] 1440:h-[25px] 1440:text-[9px] 1440:my-6 flex justify-center items-center">
                                            Read more
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center">
                        <a href="#" className="text-[#5D6162] text-[9px] font-fairplay tracking-wide inline-block pb-[2px] border-b border-[#5D6162]">Explore</a>
                    </p>


                    {/* fantasy reads */}
                    <div className="flex items-center mt-10">
                        <div className="flex-grow border-t border-[#8F9191]"></div>
                        <div className="text-[#5D6162] 320:text-lg 1024:text-[11px] 1440:text-[15px] 2560:text-[28px] font-fairplay px-2">Fantastic fantasy reads</div>
                        <div className="flex-grow border-t border-[#8F9191]"></div>
                    </div>

                    <div className="grid 768:grid-cols-3 1024:grid-cols-6 justify-center 2560:mt-6">
                        {fantasyReadData.map((book, index) => (
                            <div key={index} className="m-4 p-3 text-center 768:m-0 1440:m-1">
                                <img className="320:h-[420px] 1024:h-[140px] 1024:w-[160px] 1440:h-[210px] 2560:w-[240px] 2560:h-[380px]" src={book.imageSrc} alt={`Book Image ${index + 1}`} />
                                <div className='w-full text-start my-2'>
                                    <h3 className="1024:text-[8px] 1440:text-[11px] 2560:text-[19px] font-medium font-fairplay">{book.title}</h3>
                                    <p className="1024:text-[6px] 1440:text-[9px] 2560:text-[17px] text-[#B79248] font-roboto">{book.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center">
                        <a href="#" className="text-[#5D6162] 1024:text-[6px] 1440:text-[11px] 2560:text-[21px] 2560:mt-6 font-fairplay tracking-wide inline-block pb-[2px] border-b border-[#5D6162]">Browse more</a>
                    </p>

                    {/* Submit online */}
                    <div class="relative m-4 p-4 bg-cover bg-center 2560:h-[580px] 1024:h-[180px] 1440:h-[330px] mt-10" style={{ backgroundImage: `url('assests/section/section6.png')` }}>
                        <div class="absolute bottom-8 left-8 p-4 text-white 1024:p-1 1024:bottom-2 1024:left-4 gap-0">
                            <h3 class="text-[48px] font-fairplay text-white 1024:text-black 1024:text-[18px] 1440:text-[24px] -mb-2">Submit online
                            </h3>
                            <p class="text-base text-white 1024:text-black 1024:text-[8px] 1440:text-[12px]">Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                                .</p>
                            <button className="bg-[#031428] text-lg text-white rounded-3xl 1440:w-[100px] 1440:h-6 2560:w-[150px] 2560:h-12 font-fairplay 1024:w-[60px] 1024:h-[18px] 1024:text-[8px] items-center flex justify-center font-extralight mt-2">Explore</button>
                        </div>
                    </div>

                    {/* Upcoming events */}

                    <div className="flex items-center mt-10">
                        <div className="flex-grow border-t border-[#8F9191]"></div>
                        <div className="text-[#5D6162] 320:text-lg 1024:text-[11px] font-fairplay px-2">Upcoming Events
                        </div>
                        <div className="flex-grow border-t border-[#8F9191]"></div>
                    </div>

                    <div className='grid grid-cols-3 320:grid-cols-1 1024:grid-cols-3 mb-52 320:mb-16 gap-5'>
                        {Array.from({ length: 3 }, (_, index) => (
                            <div key={index} className={`relative pl-5 mt-4 ${index !== 0 ? '1024:border-[#8F9191] 1024:border-l-[2px] 1024:pl-5' : ''}`}>
                                <div className={`1440:m-4 p-4 320:p-0 320:m-0 text-center 1440:px-2`}>
                                    <div className='w-full'>
                                        <img className="w-full object-cover" src="assests/section/events.png" alt={`Section Image`} />
                                    </div>
                                    <div className='w-full text-start flex mt-8 1024:mt-5'>
                                        <div className='w-[30%] px-8 320:pl-0 1024:pr-5'>
                                            <h3 className="1024:text-[12px] 1440:text-3xl font-medium font-fairplay pt-4 text-[#B79248] 320:text-xl 1024:pt-0 1024:-mb-4">Mar </h3>
                                            <p className="1024:text-[20px] 1440:text-[50px] text-black font-fairplay py-2 font-medium 320:text-4xl 1024:py-0 ">20</p>
                                        </div>
                                        <div className=''>
                                            <h3 className="1024:text-[12px] 1440:text-3xl font-medium font-fairplay pt-4 text-[#B79248] 320:text-xl 1024:pt-0 1024:-mb-1">Event title- Lorem
                                            </h3>
                                            <p className="1024:text-[6px] text-black font-roboto py-4 320:text-sm 1024:py-0 1024:leading-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>

                                            <p className="text-black font-roboto py-6 320:text-sm 1024:text-[6px] 1024:py-0">Location — 00:00 pm</p>

                                            <a href="#" className="text-black font-roboto tracking-wide 320:text-sm 1024:text-[6px] 1024:py-0 inline-block pb-1 border-b border-[#5D6162] mt-3">Learn more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div >
        </>
    )
}

export default Section
