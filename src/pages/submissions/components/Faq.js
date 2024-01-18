import React, { useEffect, useRef, useState } from "react";

const FaqItem = ({ faq, defaultAllExpanded }) => {
    const [isItemOpen, setIsItemOpen] = useState(faq.expanded ?? defaultAllExpanded ?? false);
    const ansRef = useRef();
    const [height, setHeight] = useState("auto");

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
                className={`flex justify-between items-center cursor-pointer select-none border-t border-[#999B9A] ${!isItemOpen && "border-b border-[#999B9A]"}`}
                onClick={handleClick}
                title={!isItemOpen ? "Show" : "Hide"}
            >
                {/* sawaal */}
                <div className={`${!isItemOpen ? `text-black py-6` : `text-[#B79248] pt-6`} font-fairplay text-[22px]`}>{q}</div>
                <button
                    className={`rounded-full w-10 h-10 flex justify-center text-3xl transition bg-[#DDC7A2] m-2`}
                    title={!isItemOpen ? 'Show' : 'Hide'}
                >
                    {isItemOpen ? '-' : '+'}
                </button>

            </div>

            {/* jawab */}
            <div
                className={`text-black overflow-hidden transition-[height] border-b border-[#999B9A] ${!isItemOpen ? `border-none` : `pb-10`}`}
                style={{ height: isItemOpen ? height : 0 }}
            >
                <div ref={ansRef} className={`py-[44px]`}>
                    {a}
                </div>
            </div>
        </div >
    );
};

const Faq = ({ faqs = [], defaultAllExpanded = false }) => {
    return (
        <div className="w-full space-y-10">
            {faqs.map((faq, idx) => (
                <FaqItem key={idx} faq={faq} defaultAllExpanded={defaultAllExpanded} />
            ))}
        </div>
    );
};

export default Faq;