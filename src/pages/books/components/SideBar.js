import { useMediaQuery } from '@react-hook/media-query';
import React, { useEffect, useState } from 'react';

const Sidebar = () => {
    const [categoriesOpen, setCategoriesOpen] = useState(true);
    const [imprintsOpen, setImprintsOpen] = useState(true);
    const [formatsOpen, setFormatsOpen] = useState(true);

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
    }, [isMediumScreen]);

    return (
        <>
            <div className='mb-6 px-2'>
                <div className='mt-'>
                    {/* Categories */}
                    <div className={`flex my-1 justify-between cursor-pointer`} onClick={toggleCategories}>
                        <p className="text-[21px] font-fairplay text-black">{categoriesData[0].mainTitle}</p>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <g transform="rotate(180 12 12)">
                                    <path fill="Black" d="m16.854 13.647l-4.5-4.5a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 .707.707L12 10.207l4.146 4.147a.498.498 0 0 0 .707 0a.5.5 0 0 0 0-.707" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className={`block ${categoriesOpen && isMediumScreen ? '' : 'hidden'}`}>
                        {categoriesData[0].items.map((category, index) => (
                            <div key={index}>
                                <p className='mb-3 mt-5 text-black font-medium'>{category.title}</p>
                                <ul className="space-y-3">
                                    <li>
                                        <ul className="space-y-3">
                                            {category.items.map((item, i) => (
                                                <li key={i} className='text-[#75797B]'>{item}</li>
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mt-10'>
                    {/* Imprints */}
                    <div className='flex my-3 justify-between cursor-pointer' onClick={toggleImprints}>
                        <p className="text-[21px] font-fairplay text-black">{categoriesData[1].mainTitle}</p>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
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
                                        <li key={i} className='text-[#75797B]'>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mt-10'>
                    {/* Formats */}
                    <div className='flex my-3 justify-between cursor-pointer' onClick={toggleFormats}>
                        <p className="text-[21px] font-fairplay text-black">{categoriesData[2].mainTitle}</p>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
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
                                        <li key={i} className='text-[#75797B]'>{item}</li>
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
