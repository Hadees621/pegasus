import { fantasyReadData } from '../../homepage/utils/utils';
import DropdownMenu from './DropdownMenu';

function WishlistBooks() {
    return (
        <div className="grid 768:grid-cols-3 1024:grid-cols-6 justify-center 2560:mt-6 768:mx-2">
            {fantasyReadData.map((book, index) => (
                <div key={index} className="relative m-4 p-3 text-center 768:m-0 1440:m-1">
                    <div className="relative bg-cover bg-center rounded-md overflow-hidden h-[420px] 1024:h-[140px] 1024:w-[160px] 1440:h-[210px] 2560:w-[240px] 2560:h-[380px]" style={{ backgroundImage: `url(${book.imageSrc})`, width: '240px', height: '380px' }}>
                        <div className="absolute top-0 right-0 p-2 cursor-pointer bg-white rounded-full m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.3em" viewBox="0 0 24 24" className=''>
                                <g fill="none" stroke="#8D8F8F" stroke-width="1.5">
                                    <path stroke-linecap="round" d="M20.5 6h-17m15.333 2.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79c-.865.81-2.196.81-4.856.81h-.774c-2.66 0-3.991 0-4.856-.81c-.865-.809-.954-2.136-1.13-4.79l-.46-6.9M9.5 11l.5 5m4.5-5l-.5 5" />
                                    <path d="M6.5 6h.11a2 2 0 0 0 1.83-1.32l.034-.103l.097-.291c.083-.249.125-.373.18-.479a1.5 1.5 0 0 1 1.094-.788C9.962 3 10.093 3 10.355 3h3.29c.262 0 .393 0 .51.019a1.5 1.5 0 0 1 1.094.788c.055.106.097.23.18.479l.097.291A2 2 0 0 0 17.5 6" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className='w-full text-start my-2'>
                        <h3 className="1024:text-[8px] 1440:text-[11px] 2560:text-[19px] font-medium font-fairplay ">{book.title}</h3>
                        <p className="1024:text-[6px] 1440:text-[9px] 2560:text-[17px] text-[#B79248] font-roboto">{book.author}</p>
                        <h3 className="1024:text-[8px] 1440:text-[11px] 2560:text-[19px] font-medium font-fairplay ">£0.00</h3>
                    </div>
                    <div className='py-4 2000:py-10'>
                        <DropdownMenu />
                        <button className='w-full border border-[#CCCED1] h-[40px] my-5 2000:h-[54px] rounded-3xl 2000:my-10 flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20" className="w-6 1024:w-3 1440:w-5 2560:w-7">
                                <g transform="translate(20 0) scale(-1 1)">
                                    <g fill="currentColor">
                                        <path
                                            d="M3.712 2.5H2.5a.5.5 0 0 1 0-1h1.603a.5.5 0 0 1 .485.379l1.897 7.6a.5.5 0 0 1-.97.242z" />
                                        <path fill-rule="evenodd"
                                            d="M15.495 7.5h-7.99c-.15 0-.3.017-.447.05A2.02 2.02 0 0 0 5.55 9.969l.783 3.461A2.008 2.008 0 0 0 8.29 15h6.422a2.01 2.01 0 0 0 1.956-1.57l.783-3.462A2.012 2.012 0 0 0 15.495 7.5M7.283 8.525a.992.992 0 0 1 .223-.025h7.989a1.013 1.013 0 0 1 .98 1.247l-.784 3.462a1.009 1.009 0 0 1-.98.791H8.29c-.468 0-.875-.328-.98-.791l-.783-3.462a1.02 1.02 0 0 1 .757-1.222"
                                            clip-rule="evenodd" />
                                        <path
                                            d="M17 16.75a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m-7 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0" />
                                    </g>
                                </g>
                            </svg>
                            <span className="ml-3 text-[12px] 2000:text-[18px] font-fairplay items-center">Add to cart</span>
                        </button>
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default WishlistBooks;
