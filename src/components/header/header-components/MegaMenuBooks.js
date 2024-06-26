import React from 'react';
import TitleLi from './TitleLi';
import SimpleLi from './SimpleLi';
import LastLi from './LastLi';

const MegaMenuBooks = ({ isMegaMenuOpen }) => {
    const categories = [
        {
            title: "Fiction",
            items: ["Action & adventure", "Classics", "Crime", "Thrillers & mysteries", "General fiction", "Romance & Erotica", "Poetry", "Horror", "Short stories", "Fantasy & Science fiction", "Historical fiction"],
            viewAllText: "View all Fiction"
        },
        {
            title: "Non-fiction",
            items: ["Art", "Biographies", "Food & drink", "Health & lifestyle", "History", "Politics & philosophy", "Science & nature", "Sports", "Religion & spirituality", "Self help"],
            viewAllText: "View all non-fiction"
        },
        {
            title: "Nightingale Books",
            items: ["Young children", "Young Adult fiction", "General fiction", "Non-fiction", "Romance & Erotica"],
            viewAllText: "View all Chlidren's"
        },
        {
            title: "Chimera",
            items: ["Erotica"],
            viewAllText: "View all Chimera"
        }
    ];

    return (

        <>
            <div id="mega-menu-full-image-dropdown" className={`py-s 1024:py-2 1440:py-7 2560:py-9 ${isMegaMenuOpen ? 'block' : 'hidden'}`}>
                <div className="grid px-5 1024:px-40 1024:mr-40 md:px-10 xl:px-52 xl:pr-[300px] 2560:px-96 2560:pr-[760px] 2560:pl-[385px] py-5 1024:py-0 text-sm text-black 768:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category, index) => (
                        <ul key={index} className="mb-4 space-y-4 md:mb-0 1024:-space-y-1.5 1440:space-y-1 2560:space-y-2.5">
                            <TitleLi text={category.title} />
                            {category.items.map((item, itemIndex) => (
                                <SimpleLi key={itemIndex} text={item} />
                            ))}
                            {category.viewAllText && <LastLi text={category.viewAllText} />}
                        </ul>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MegaMenuBooks;
