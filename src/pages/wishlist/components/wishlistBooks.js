import { fantasyReadData } from '../../homepage/utils/utils';
import DropdownMenu from './DropdownMenu';

function WishlistBooks() {
    return (
        <div className="grid 768:grid-cols-3 1024:grid-cols-6 justify-center 2560:mt-6">
            {fantasyReadData.map((book, index) => (
                <div key={index} className="relative m-4 p-3 text-center 768:m-0 1440:m-1">
                    <div className="relative bg-cover bg-center rounded-md overflow-hidden" style={{ backgroundImage: `url(${book.imageSrc})`, width: '240px', height: '380px' }}>
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
                    <div className='py-10'>
                        <DropdownMenu />
                        <button className='w-full border border-[#CCCED1] h-[54px] rounded-3xl my-10 flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256" className='transform flip-horizontal'>
                                <path fill="#8D8F8F" d="M94 216a14 14 0 1 1-14-14a14 14 0 0 1 14 14m90-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14m45.73-128.24l-28.52 92.71a21.89 21.89 0 0 1-21 15.53H84.07a22.1 22.1 0 0 1-21.16-16L26.75 39.45A2 2 0 0 0 24.82 38H8a6 6 0 0 1 0-12h16.82a14.05 14.05 0 0 1 13.46 10.15L46.81 66H224a6 6 0 0 1 5.73 7.76M215.88 78H50.24l24.21 84.75a10 10 0 0 0 9.62 7.25h96.11a10 10 0 0 0 9.56-7.06Z" />
                            </svg>
                            <span className="ml-3 text-[18px] font-fairplay items-center">Add to cart</span>
                        </button>
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default WishlistBooks;
