import React from 'react'
import Footer from '../../components/Footer'
import { articleData, audioBooksData, bookData, fantasyReadData, imprintData, provkingNovelData } from './utils/utils'
import Header from '../../components/Header';

const ImprintSection = ({ title, content, imageSrc }) => (
    <div className="m-4 p-10 text-center group bg-white transition-colors duration-300 ease-in-out hover:bg-[#EDEFF1] h-[400px]">
        <div className="w-full">
            <img className="h-[100px]" src={imageSrc} alt="Section Image" />
        </div>
        <div className="w-full text-start">
            <h3 className="text-3xl font-bold font-fairplay pt-4 pl-0">{title}</h3>
            <p className="text-base text-[#2A2E30] font-roboto py-6 tracking-normal leading-6">{content}</p>
        </div>
    </div>
);

const Home = () => {
    return (
        <>
            <Header />
            <div className='w-full justify-center 1024:px-10 320:p-5 1440:px-36 2560:px-96'>
                <div className='grid 1024:grid-cols-3 320:grid-cols-1 gap-12 1024:gap-4'>

                    <div className="w-full bg-white flex flex-col items-center p-5 1024:p-10  justify-center 1024:items-start">
                        <h2 className="text-2xl 1440:text-3xl font-bold mb-4 font-fairplay">Established since 1999</h2>
                        <p className='font-roboto 1440:text-xl'>Pegasus Elliot MacKenzie Publishers have been publishing high quality books from exciting
                            authors for more than 20 years..
                        </p>
                        <button className="mt-6 bg-[#031428] text-lg text-white px-4 py-2 rounded-3xl w-[150px] h-12 font-fairplay">Explore</button>
                    </div>

                    <div className="flex items-center border-black w-full">
                        <img className="320:h-[280px] 320:w-full object-cover" src="assests\section\section1.png" alt="Image 1" />
                    </div>

                    <div className="w-full flex items-center">
                        <img className="320:h-[280px] 320:w-full object-cover" src="assests\section\section2.png" alt="Image 2" />
                    </div>

                </div>

                <div className="flex items-center py-8 mt-6">
                    <div className="flex-grow border-t border-[#8F9191]"></div>
                    <div className="text-[#5D6162] 320:text-lg 1024:text-2xl font-fairplay px-4">Take a look at our new releases</div>
                    <div className="flex-grow border-t border-[#8F9191]"></div>
                </div>

                <div className="grid 768:grid-cols-3 1024:grid-cols-6 justify-center">
                    {bookData.map((book, index) => (
                        <div key={index} className="m-4 p-4 text-center 768:m-0 1440:m-1">
                            <img className="320:h-[420px] w-full 1024:h-[300px] 2560:h-[440px]" src={book.imageSrc} alt={`Book Image ${index + 1}`} />
                            <div className='w-full text-start'>
                                <h3 className="text-lg font-bold font-fairplay">{book.title}</h3>
                                <p className="text-sm text-[#B79248] font-roboto">{book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-8">
                    <a href="#" className="text-[#5D6162] text-xl font-roboto tracking-wide inline-block pb-1 border-b border-[#5D6162]">Browse more</a>
                </p>

                <div className="flex items-center py-8 mt-6">
                    <div className="flex-grow border-t border-[#8F9191]"></div>
                    <div className="text-[#5D6162] 320:text-lg 1024:text-2xl font-fairplay px-4">The latest features
                    </div>
                    <div className="flex-grow border-t border-[#8F9191]"></div>
                </div>

                <div class="bg-[#EDEFF1] p-8 320:p-0">
                    <div class="flex flex-col md:flex-row">
                        <div class="md:w-1/2 p-4">
                            <img class="w-full h-auto" src="assests\section\flowerss.png" alt="Image" />
                        </div>

                        <div class="md:w-1/2 p-4 flex flex-col 1024:justify-center">
                            <p className='text-sm mb-8 2560:text-lg'>Blog category — 00 Month, 2022</p>
                            <h2 class="text-2xl 320:text-xl font-bold mb-2 2560:text-3xl font-fairplay">Article Title</h2>
                            <p class="text-sm 320:text-xs 1440:text-base 2560:text-xl text-gray-700 mb-4 font-roboto pr-3 2560:mt-8">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                commodo consequat</p>
                            <button className="bg-[#031428] text-base text-white px-4 rounded-3xl w-[130px] h-8 font-fairplay 2560:mt-10">Read more</button>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-3 320:grid-cols-1 1024:grid-cols-3 mt-8'>
                    {articleData.map((article, index) => (
                        <div key={index} className="m-4 p-4 text-center">
                            <div className='flex justify-between py-4'>
                                <h3 className="text-lg font-fairplay">{article.category}</h3>
                                <h3 className="text-lg font-fairplay">{article.date}</h3>
                            </div>
                            <div className='w-full'>
                                <img className="w-full object-cover" src={article.imageSrc} alt={`Section ${index + 1} Image`} />
                            </div>
                            <div className='w-full text-start'>
                                <h3 className="text-3xl font-bold font-fairplay pt-4">{article.title}</h3>
                                <p className="text-sm text-[#5D6162] font-roboto py-4">{article.content}</p>
                                <a href="#" className="text-[#5D6162] text-lg font-roboto tracking-wide inline-block pb-1 border-b border-[#5D6162] mt-3">Read more</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center py-8 mt-6">
                    <div className="flex-grow border-t border-[#8F9191]"></div>
                    <div className="text-[#5D6162] 320:text-lg 1024:text-2xl font-fairplay px-4">Have a listen to our audio books</div>
                    <div className="flex-grow border-t border-[#8F9191]"></div>
                </div>

                <div className="grid 768:grid-cols-3 1024:grid-cols-6 justify-center">
                    {audioBooksData.map((book, index) => (
                        <div key={index} className="m-4 p-4 text-center 768:m-0 1440:m-1">
                            <img className="320:h-[300px] w-full 1024:h-[200px] 2560:h-[320px]" src={book.imageSrc} alt={`Book Image ${index + 1}`} />
                            <div className='w-full text-start'>
                                <h3 className="text-lg font-bold font-fairplay mt-8">{book.title}</h3>
                                <p className="text-sm text-[#B79248] font-roboto">{book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-8">
                    <a href="#" className="text-[#5D6162] text-xl font-roboto tracking-wide inline-block pb-1 border-b border-[#5D6162]">Browse more</a>
                </p>

                <div className='grid grid-cols-3 320:grid-cols-1 1024:grid-cols-4 mt-8'>
                    <div className="m-4 p-4 text-center group bg-white transition-colors duration-300 ease-in-out hover:bg-[#EDEFF1] h-[400px]">
                        <div className='w-full text-start mt-10'>
                            <h3 className="text-3xl font-fairplay pt-4">Our imprints</h3>
                            <p className="text-sm text-[#5D6162] font-roboto py-4 pr-4 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="mt-6 bg-[#031428] text-lg text-white px-4 py-2 rounded-3xl w-[150px] h-12 font-fairplay">Explore</button>
                        </div>
                    </div>

                    {imprintData.map((imprint, index) => (
                        <ImprintSection key={index} {...imprint} />
                    ))}
                </div>

                <div className="flex items-center py-8 mt-6">
                    <div className="flex-grow border-t border-[#8F9191]"></div>
                    <div className="text-[#5D6162] 320:text-lg 1024:text-2xl font-fairplay px-4">Thought provoking novels
                    </div>
                    <div className="flex-grow border-t border-[#8F9191]"></div>
                </div>

                <div className="grid 768:grid-cols-3 1024:grid-cols-6 justify-center">
                    {provkingNovelData.map((book, index) => (
                        <div key={index} className="m-4 p-4 text-center 768:m-0 1440:m-1">
                            <img className="320:h-[420px] w-full 1024:h-[300px] 2560:h-[440px]" src={book.imageSrc} alt={`Book Image ${index + 1}`} />
                            <div className='w-full text-start'>
                                <h3 className="text-lg font-bold font-fairplay">{book.title}</h3>
                                <p className="text-sm text-[#B79248] font-roboto">{book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-8">
                    <a href="#" className="text-[#5D6162] text-xl font-roboto tracking-wide inline-block pb-1 border-b border-[#5D6162]">Browse more</a>
                </p>

                {/* <div className="flex items-center py-8 mt-6">
                    <div className="flex-grow border-t border-[#8F9191]"></div>
                    <div className="text-[#5D6162] 320:text-lg 1024:text-2xl font-fairplay px-4">Author interviews
                    </div>
                    <div className="flex-grow border-t border-[#8F9191]"></div>
                </div> */}

                {/* <div className='flex bg-[#0F1824] h-[730px] justify-center items-center px-10'>

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


                <div className="flex items-center py-8 mt-6">
                    <div className="flex-grow border-t border-[#8F9191]"></div>
                    <div className="text-[#5D6162] 320:text-lg 1024:text-2xl font-fairplay px-4">Fantastic fantasy reads
                    </div>
                    <div className="flex-grow border-t border-[#8F9191]"></div>
                </div>

                <div className="grid 768:grid-cols-3 1024:grid-cols-6 justify-center">
                    {fantasyReadData.map((book, index) => (
                        <div key={index} className="m-4 p-4 text-center 768:m-0 1440:m-1">
                            <img className="320:h-[420px] w-full 1024:h-[300px] 2560:h-[440px]" src={book.imageSrc} alt={`Book Image ${index + 1}`} />
                            <div className='w-full text-start'>
                                <h3 className="text-lg font-bold font-fairplay">{book.title}</h3>
                                <p className="text-sm text-[#B79248] font-roboto">{book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-8">
                    <a href="#" className="text-[#5D6162] text-xl font-roboto tracking-wide inline-block pb-1 border-b border-[#5D6162]">Browse more</a>
                </p>

                <div class="relative m-4 p-4 bg-cover bg-center h-[580px] mt-20" style={{ backgroundImage: `url('assests/section/section6.png')` }}>
                    <div class="absolute bottom-8 left-8 p-4 text-white">
                        <h3 class="text-[48px] font-fairplay text-black">Submit online
                        </h3>
                        <p class="text-base text-black">Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                            .</p>
                        <button className="mt-6 bg-[#031428] text-lg text-white px-4 py-2 rounded-3xl w-[150px] h-12 font-fairplay">Explore</button>

                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default Home
