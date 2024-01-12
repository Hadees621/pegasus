
import React from 'react';

const Sidebar = ({ categories }) => {
    return (
        <div className="text-[#D4D4D8]">
            {categories.map(category => {
                console.log('Category:', category); // Log category information
                return (
                    <div key={category.mainTitle} className='mb-6'>
                        <div className='flex items-center justify-between mb-3'>
                            <p className="text-[21px] font-fairplay text-black">{category.mainTitle}</p>
                            {category.items && (
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                        <g transform="rotate(180 12 12)">
                                            <path fill="Black" d="m16.854 13.647l-4.5-4.5a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 .707.707L12 10.207l4.146 4.147a.498.498 0 0 0 .707 0a.5.5 0 0 0 0-.707" />
                                        </g>
                                    </svg>
                                </div>
                            )}
                        </div>
                        {category.subTitle !== undefined && category.subTitle !== null && (
                            <p className='mb-3 mt-2 text-black font-medium'>{category.subTitle}</p>

                        )}
                        <ul className="space-y-3">
                            {category.items && category.items.map(subCategory => {
                                c
                                return (
                                    <li key={subCategory.title}>
                                        <p className='mb-2 text-black font-medium'>{subCategory.title}</p>
                                        <ul className="space-y-2">
                                            {subCategory.items.map((item, itemIndex) => (
                                                <li className='text-[#75797B]' key={itemIndex}>{item}</li>
                                            ))}
                                        </ul>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default Sidebar;




// const Sidebar = ({ categories }) => {
//     return (
//         <div className="text-[#D4D4D8]">
//             <div className='flex my-3 justify-between'>
//                 <p className="text-[21px] font-fairplay text-black">Categories</p>
//                 <div>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g transform="rotate(180 12 12)"><path fill="Black" d="m16.854 13.647l-4.5-4.5a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 .707.707L12 10.207l4.146 4.147a.498.498 0 0 0 .707 0a.5.5 0 0 0 0-.707" /></g></svg>
//                     <div />
//                 </div>
//             </div>
//             <ul className=''>
//                 {categories.map(category => (
//                     <li key={category.title} className="mb-4 ">
//                         <p className='mb-3 mt-8 text-black font-medium'>{category.title}</p>
//                         <ul className="space-y-3">
//                             {category.items.map(item => (
//                                 <li className='text-[#75797B]' key={item}>{item}</li>
//                             ))}
//                         </ul>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;
