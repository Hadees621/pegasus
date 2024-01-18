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
        if (ansRef.current) setHeight(ansRef.current.offsetHeight);
    }, []);

    const { q, a } = faq;

    return (
        <div className="">
            <div
                className={`flex justify-between px-2 items-center cursor-pointer select-none ${index == 0 ? "border-t border-[#F8F5EF]" : "border-t border-[#999B9A]"}  ${!isItemOpen && "border-b border-[#999B9A]"}`}
                onClick={handleClick}
                title={!isItemOpen ? "Show" : "Hide"}
            >
                {/* sawaal */}
                <div className={`${!isItemOpen ? `text-black py-6 ` : `text-[#B79248] pt-3 2000:pt-6 `} font-fairplay text-[15px] 2000:text-[22px] `}>{q}</div>
                <button
                    className={`rounded-full w-14 h-7 425:h-8 text-lg 2000:w-10 2000:h-10 flex justify-center 2000:text-3xl transition bg-[#DDC7A2] m-2`}
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
                <div ref={ansRef} className={`text-[9px] px-4 py-5 2000:py-[44px] `}>
                    {a}
                </div>
            </div>
        </div >
    );
};

const Faq = ({ faqs = [], defaultAllExpanded = false }) => {
    return (
        <div className="w-full space-y-6">
            {faqs.map((faq, idx) => (
                <FaqItem key={idx} index={idx} faq={faq} defaultAllExpanded={defaultAllExpanded} />
            ))}
        </div>
    );
};

export default Faq;