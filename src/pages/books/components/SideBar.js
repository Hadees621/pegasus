import { useMediaQuery } from '@react-hook/media-query';
import React, { useEffect, useState } from 'react';

const Sidebar = ({ showPrice }) => {
    const [categoriesOpen, setCategoriesOpen] = useState(true);
    const [imprintsOpen, setImprintsOpen] = useState(true);
    const [formatsOpen, setFormatsOpen] = useState(true);
    const [priceOpen, setPriceOpen] = useState(true);
    const isMediumScreen = useMediaQuery('(max-width: 768px)');

    const toggleCategories = () => {
        setCategoriesOpen(!categoriesOpen);
    };

    const toggleImprints = () => {
        setImprintsOpen(!imprintsOpen);
    };

    const toggleFormats = () => {
        setFormatsOpen(!formatsOpen);
    };

    const togglePrice = () => {
        setPriceOpen(!priceOpen);
    };

    const priceData = {
        label: 'Price',
        inputId: 'price-range-input',
        min: 0,
        max: 1000,
        startText: '£ 0.00',
        endText: '£ 0.00',
    };

    const categoriesData = [
        {
            mainTitle: 'Categories',
            subTitle: 'Subcategories',
            items: [
                {
                    title: 'Fiction',
                    items: [
                        'Action & adventure (0)',
                        'Classics (0)',
                        'Crime (0)',
                        'Thrillers & mysteries (0)',
                        'General fiction (0)',
                        'Romance & Erotica (0)',
                        'Poetry (0)',
                        'Horror (0)',
                        'Short stories (0)',
                        'Fantasy & Science fiction (0)',
                        'Historical fiction (0)'
                    ],
                },
                {
                    title: 'Non-fiction',
                    items: [
                        'Art (0)',
                        'Biographies (0)',
                        'Food & drink (0)',
                        'Health & lifestyle (0)',
                        'History (0)',
                        'Politics & philosophy (0)',
                        'Science & nature (0)',
                        'Sports (0)',
                        'Religion & spirituality (0)',
                        'Self help (0)'
                    ],
                },
                {
                    title: "Children's",
                    items: [
                        'Young children (0)',
                        'Young Adult fiction (0)',
                        'General fiction (0)',
                        'Non-fiction (0)'
                    ],
                },
            ],
        },
        {
            mainTitle: 'Imprints',
            items: [
                'Vanguard Press (0)',
                'Nightingale Books (0)',
                'Chimera (0)',
            ],
            viewAllText: 'View all Fiction (0)'
        },
        {
            mainTitle: 'Formats',
            items: [
                'Paperback (0)',
                'Hardback (0)',
                'eBook (0)',
                'Audiobooks (0)'
            ],
        },
    ];

    useEffect(() => {
        setCategoriesOpen(!isMediumScreen);
        setImprintsOpen(!isMediumScreen);
        setFormatsOpen(!isMediumScreen);
        setPriceOpen(!isMediumScreen)
    }, [isMediumScreen]);

    return (
        <>
            <div className='mb-6 1024:mb-2 px-2 1024:px-1'>
                <div className='mt-'>
                    {/* Categories */}
                    <div className={`flex my-1 items-center justify-between cursor-pointer`} onClick={toggleCategories}>
                        <p className="text-[21px] font-fairplay text-black 1024:text-[12px] 1440:text-[15px] 2560:text-[21px]">{categoriesData[0].mainTitle}</p>
                        <div className='flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='1024:w-4 1440:w-6 2560:w-8'>
                                <g transform="rotate(180 12 12)">
                                    <path fill="Black" d="m16.854 13.647l-4.5-4.5a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 .707.707L12 10.207l4.146 4.147a.498.498 0 0 0 .707 0a.5.5 0 0 0 0-.707" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className={`block ${categoriesOpen ? '' : 'hidden'}`}>
                        {categoriesData[0].items.map((category, index) => (
                            <div key={index}>
                                <p className='mb-3 mt-5 text-black font-medium 1024:text-[9px] 1440:text-[12px] 2560:text-[19px] 1024:mt-3 2560:mt-5'>{category.title}</p>
                                <ul className="space-y-3">
                                    <li>
                                        <ul className="space-y-3">
                                            {category.items.map((item, i) => (
                                                <li key={i} className='text-[#75797B] 1024:text-[9px] 1440:text-[12px] 2560:text-[19px]'>{item}</li>
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="border-1 border-[#EDEEEE] mt-8" />

                <div className='mt-10 1024:mt-4 2560:mt-8'>
                    {/* Imprints */}
                    <div className='flex my-3 1024:my-0 items-center justify-between cursor-pointer' onClick={toggleImprints}>
                        <p className="text-[21px] font-fairplay text-black 1024:text-[12px] 1440:text-[15px] 2560:text-[21px]">{categoriesData[1].mainTitle}</p>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='1024:w-4 1440:w-6 2560:w-8'>
                                <g transform="rotate(180 12 12)">
                                    <path fill="Black" d="m16.854 13.647l-4.5-4.5a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 .707.707L12 10.207l4.146 4.147a.498.498 0 0 0 .707 0a.5.5 0 0 0 0-.707" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className={`block ${imprintsOpen ? '' : 'hidden'}`}>
                        {/* Imprints Content */}
                        <ul className="space-y-3">
                            <li>
                                <ul className="space-y-3">
                                    {categoriesData[1].items.map((item, i) => (
                                        <li key={i} className='text-[#75797B] 1024:text-[9px] 1440:text-[12px] 2560:text-[19px]'>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-1 border-[#EDEEEE] mt-8" />

                {/* price */}
                {showPrice &&
                    (<div className={`mt-10 1024:mt-4 2560:mt-8`}>
                        <div className='flex my-3 1024:my-0 items-center justify-between cursor-pointer' onClick={togglePrice}>
                            <p className="text-[21px] font-fairplay text-black 1024:text-[12px] 1440:text-[15px] 2560:text-[21px]">{priceData.label}</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='1024:w-4 1440:w-6 2560:w-8'>
                                    <g transform="rotate(180 12 12)">
                                        <path fill="Black" d="m16.854 13.647l-4.5-4.5a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 .707.707L12 10.207l4.146 4.147a.498.498 0 0 0 .707 0a.5.5 0 0 0 0-.707" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className={`block ${priceOpen ? '' : 'hidden'}`}>
                            <div className="relative my-8">
                                <label htmlFor={priceData.inputId} className="sr-only">Labels range</label>
                                <input
                                    id={priceData.inputId}
                                    type="range"
                                    value="1000"
                                    min={priceData.min}
                                    max={priceData.max}
                                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                    style={{
                                        WebkitAppearance: 'none',
                                    }}
                                />
                                <span className="text-sm text-gray-500 absolute start-0 -bottom-6">{priceData.startText}</span>
                                <span className="text-sm text-gray-500 absolute end-0 -bottom-6">{priceData.endText}</span>
                                <style jsx>{`
        input::-webkit-slider-thumb {
            appearance: none;
            width: 15px;
            height: 15px;
            background-color: transparent;
            border: 2px solid black;
            border-radius: 50%;
            cursor: pointer;
        }

        input::-moz-range-thumb {
            width: 15px;
            height: 15px;
            background-color: black;
            border: 2px solid #ddd;
            border-radius: 50%;
            cursor: pointer;
        }
    `}</style>
                            </div>


                        </div>
                    </div>
                    )}

                <hr className="border-1 border-[#EDEEEE] mt-8" />

                <div className='mt-10 1024:mt-4 2560:mt-8'>
                    {/* Formats */}
                    <div className='flex my-3 1024:my-0 items-center justify-between cursor-pointer' onClick={toggleFormats}>
                        <p className="text-[21px] font-fairplay text-black 1024:text-[12px] 1440:text-[15px] 2560:text-[21px]">{categoriesData[2].mainTitle}</p>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='1024:w-4 1440:w-6  2560:w-8'>
                                <g transform="rotate(180 12 12)">
                                    <path fill="Black" d="m16.854 13.647l-4.5-4.5a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 .707.707L12 10.207l4.146 4.147a.498.498 0 0 0 .707 0a.5.5 0 0 0 0-.707" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className={`block ${formatsOpen ? '' : 'hidden'}`}>
                        {/* Formats Content */}
                        <ul className="space-y-3">
                            <li>
                                <ul className="space-y-3">
                                    {categoriesData[2].items.map((item, i) => (
                                        <li key={i} className='text-[#75797B] 1024:text-[9px] 1440:text-[12px] 2560:text-[19px]'>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
