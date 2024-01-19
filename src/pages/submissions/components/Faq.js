import React, { useEffect, useRef, useState } from "react";

const FaqItem = ({ faq, defaultAllExpanded, index }) => {
    const [isItemOpen, setIsItemOpen] = useState(faq.expanded ?? defaultAllExpanded ?? false);
    const ansRef = useRef();
    const [height, setHeight] = useState("auto");
    console.log("index", index)
    const handleClick = () => {
        setIsItemOpen(!isItemOpen);
    };

    useEffect(() => {
        if (ansRef.current) {
            const newHeight = ansRef.current.offsetHeight;

            if (window.innerWidth >= 768) {
                // setHeight(newHeight * 0.8);
            } else {
                setHeight(newHeight);
            }
        }
    }, []);

    const { q, a } = faq;

    return (
        <div className="">
            <div
                className={`flex justify-between px-2 1024:px-0 items-center cursor-pointer select-none ${index == 0 ? "border-t border-[#F8F5EF]" : "border-t border-[#999B9A]"}  ${!isItemOpen && "border-b border-[#999B9A]"}`}
                onClick={handleClick}
                title={!isItemOpen ? "Show" : "Hide"}
            >
                {/* sawaal */}
                <div className={`${!isItemOpen ? `text-black py-6 1024:py-4` : `text-[#B79248] pt-3 1024:pt-4 2560:pt-6`} flex items-center justify-center font-fairplay text-[15px] 375:text-[17px] 768:text-[20px] 1024:text-[10px] 1440:text-[13px] 2000:text-[18px] 2560:text-[24px] `}>{q}</div>
                <button
                    className={`flex justify-center rounded-full w-14 h-7 425:h-8 768:w-10 768:h-9 768:text-[25px] 1024:items-center 1024:w-3 1024:h-3 1024:text-[12px] 1024:mt-4 1440:w-5 1440:text-[15px] 1440:h-5 text-lg 2560:w-10 2560:h-10 2560:text-3xl transition bg-[#DDC7A2] m-2 ${isItemOpen && "mt-3"}`}
                    title={!isItemOpen ? 'Show' : 'Hide'}
                >
                    {isItemOpen ? '-' : '+'}
                </button>

            </div>

            {/* jawab */}
            <div
                className={`text-black overflow-hidden border-b border-[#999B9A] ${index !== 0 && `border-b border-[#F8F5EF]`}`}
                style={{ height: isItemOpen ? height : 0 }}
            >
                <div ref={ansRef} className={`text-[9px] 1024:pr-8 1440:pr-10 py-5 375:text-[12px] 768:text-[14px] 1024:text-[7px] 1440:text-[9px] 2000:text-[12px] 2560:text-[15px] 1024:py-3 2560:py-[44px] `}>
                    {a}
                </div>
            </div>
        </div >
    );
};

const Faq = ({ faqs = [], defaultAllExpanded = false }) => {
    return (
        <div className="w-full space-y-6 1024:space-y-3 1440:space-y-4 2000:space-y-5 2560:space-y-8">
            {faqs.map((faq, idx) => (
                <FaqItem key={idx} index={idx} faq={faq} defaultAllExpanded={defaultAllExpanded} />
            ))}
        </div>
    );
};

export default Faq;