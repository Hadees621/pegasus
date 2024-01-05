import React from 'react';
import TitleLi from './TitleLi';
import SimpleLi from './SimpleLi';
import LastLi from './LastLi';

const MegaMenu = ({ isMegaMenuOpen }) => {
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
        <div id="mega-menu-full-image-dropdown" className={`py-4 ${isMegaMenuOpen ? 'block' : 'hidden'}`}>
            <div className="grid px-5 md:px-10 xl:px-36 2xl:pr-[650px] 2xl:pl-[365px] py-5 text-sm text-black 768:grid-cols-2 lg:grid-cols-4">
                {categories.map((category, index) => (
                    <ul key={index} className="mb-4 space-y-4 md:mb-0">
                        <TitleLi text={category.title} />
                        {category.items.map((item, itemIndex) => (
                            <SimpleLi key={itemIndex} text={item} />
                        ))}
                        {category.viewAllText && <LastLi text={category.viewAllText} />}
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default MegaMenu;
