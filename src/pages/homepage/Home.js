import React from 'react'
import Footer from '../../components/Footer'
import { bookData } from './utils/utils'


const Home = () => {
    return (
        <>
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
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default Home
