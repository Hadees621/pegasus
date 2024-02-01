import React from 'react';

const Middle = ({ data }) => {
    return data.map((item, index) => (
        <div key={index} className={`md:px-10 1024:px-40 xl:px-52 2560:px-96 py-32 flex ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
            <div className={`w-full 1024:w-1/2 bg-[#F9FAFA] ${item.imageClass}`}>
                <img
                    src={item.imageSrc}
                    alt={item.altText}
                    className="w-full h-full"
                />
            </div>
            <div className={`w-full 1024:w-1/2 flex flex-col justify-center ${index % 2 === 0 ? 'pr-72 pl-8' : 'pl-72 pr-8'} space-y-7`}>
                <div>
                    <h1 className="font-fairplay text-[30px] text-[#90949D]">{item.title}</h1>
                    <p className="leading-9">{item.description}</p>
                </div>
                {item.optionalParagraph && (
                    <div>
                        <p className="leading-9">{item.optionalParagraph}</p>
                    </div>
                )}
                <div>
                    <h3 className="font-bold font-fairplay leading-loose">Tip tip</h3>
                    <p className="leading-9">{item.tipDescription}</p>
                </div>
            </div>
        </div>
    ));
};

export default Middle;
