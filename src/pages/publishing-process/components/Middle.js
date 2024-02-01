import React from 'react';

const Middle = ({ data }) => {
    return data.map((item, index) => (
        <div key={index} className={`flex flex-col items-center 1024:flex-row md:px-10 1024:px-40 xl:px-52 2560:px-96 1024:py-6 2000:py-32 ${index % 2 === 1 ? '1024:flex-row-reverse' : ''}`}>

            <div className={`w-full 1024:w-1/2 bg-[#F9FAFA] hidden 1024:block ${item.imageClass} flex items-center justify-center`}>
                <img
                    src={item.imageSrc}
                    alt={item.altText}
                    className="max-w-full h-auto"
                />
            </div>

            <div className={`w-full 1024:w-1/2 flex flex-col justify-center p-8 1024:p-3 ${index % 2 === 0 ? '1024:pr-24 2000:pr-72 2000:pl-8' : '1024:pl-24 2000:pl-72 2000:pr-8'} space-y-4 1024:space-y-2 2000:space-y-7`}>
                <div>
                    <h1 className="font-fairplay text-[20px] 1024:text-[12px] 2000:text-[30px] text-[#90949D]">{item.title}</h1>
                    <p className="text-[14px] leading-7 1024:text-[8px] 1024:leading-4 2000:text-[30px] 2000:leading-9">{item.description}</p>
                </div>
                {item.optionalParagraph && (
                    <div>
                        <p className="text-[14px] leading-7 1024:text-[8px] 1024:leading-4 2000:leading-9">{item.optionalParagraph}</p>
                    </div>
                )}
                {item.optionalParagraph2 && (
                    <div>
                        <p className="text-[14px] leading-7 1024:text-[8px] 1024:leading-4 2000:leading-9">{item.optionalParagraph2}</p>
                    </div>
                )}
                <div>
                    <h3 className="font-bold font-fairplay leading-loose 1024:text-[9px]">Tip tip</h3>
                    <p className="text-[14px] leading-7 1024:text-[8px] 1024:leading-4 2000:leading-9">{item.tipDescription}</p>
                </div>
            </div>

        </div>
    ));
};

export default Middle;

// import React from 'react';

// const Middle = ({ data }) => {
//     return data.map((item, index) => (
//         <div key={index} className={`flex flex-col 1024:flex-row md:px-10 1024:px-40 xl:px-52 2560:px-96 1024:py-6 2000:py-32 ${index % 2 === 1 ? '1024:flex-row-reverse' : ''}`}>

//             <div className={`w-full 1024:w-1/2 bg-[#F9FAFA] hidden 1024:block ${item.imageClass} `}>
//                 <img
//                     src={item.imageSrc}
//                     alt={item.altText}
//                     className="w-full "
//                 />
//             </div>

//             <div className={`w-full 1024:w-1/2 flex flex-col justify-center p-8 1024:p-3 ${index % 2 === 0 ? '1024:pr-24 2000:pr-72 2000:pl-8' : '1024:pl-24 2000:pl-72 2000:pr-8'} space-y-4 1024:space-y-2 2000:space-y-7`}>
//                 <div>
//                     <h1 className="font-fairplay text-[20px] 1024:text-[12px] 2000:text-[30px] text-[#90949D]">{item.title}</h1>
//                     <p className="text-[14px] leading-7 1024:text-[8px] 1024:leading-4 2000:text-[30px] 2000:leading-9">{item.description}</p>
//                 </div>
//                 {item.optionalParagraph && (
//                     <div>
//                         <p className="text-[14px] leading-7 1024:text-[8px] 1024:leading-4 2000:leading-9">{item.optionalParagraph}</p>
//                     </div>
//                 )}
//                 <div>
//                     <h3 className="font-bold font-fairplay leading-loose 1024:text-[9px]">Tip tip</h3>
//                     <p className="text-[14px] leading-7 1024:text-[8px] 1024:leading-4 2000:leading-9">{item.tipDescription}</p>
//                 </div>
//             </div>

//         </div>
//     ));
// };

// export default Middle;
