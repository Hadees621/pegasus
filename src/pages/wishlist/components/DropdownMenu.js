import React, { useState } from 'react';

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFormat, setSelectedFormat] = useState("Select Format");
    const [selectedPrice, setSelectedPrice] = useState("£0.00");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (format, price) => {
        setSelectedFormat(format);
        setSelectedPrice(price);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-between py-2 border-[#D4D4D8] focus:outline-none w-full border-y"
            >
                <div className='w-full flex justify-between'>
                    <p className={`1024:text-[6px] 1440:text-[9px] 2000:text-[18px] ${selectedFormat === "Select Format" ? 'text-[#B79248]' : 'text-black'} font-roboto`}>{selectedFormat}</p>
                    {selectedFormat !== "Select Format" && <p className="text-black">{selectedPrice}</p>}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={`w-14 h-9 transition-transform transform ${isOpen ? '' : 'rotate-180'}`}>
                    <path fill="#8D8F8F" d="m16.854 13.647l-4.5-4.5a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 .707.707L12 10.207l4.146 4.147a.498.498 0 0 0 .707 0a.5.5 0 0 0 0-.707" />
                </svg>
            </button>
            {
                isOpen && (
                    <div className="absolute mt-2 w-full bg-white">
                        <ul className="space-y-2">
                            <li onClick={() => handleItemClick("Paper back", "£0.00")} className="hover:bg-gray-100 cursor-pointer rounded text-[20px] flex justify-between px-3 py-4 font-fairplay">
                                <p className={selectedFormat === "Paper back" ? 'text-[#B79248]' : 'text-black'}>Paper back</p>
                                <p className="text-black">£0.00</p>
                            </li>
                            <li onClick={() => handleItemClick("Hard back", "£0.00")} className="hover:bg-gray-100 cursor-pointer rounded text-[20px] flex justify-between p-3 font-fairplay">
                                <p className={selectedFormat === "Hard back" ? 'text-[#B79248]' : 'text-black'}>Hard back</p>
                                <p className="text-black">£0.00</p>
                            </li>
                            <li onClick={() => handleItemClick("eBook", "£0.00")} className="hover:bg-gray-100 cursor-pointer rounded text-[20px] flex justify-between p-3 font-fairplay">
                                <p className={selectedFormat === "eBook" ? 'text-[#B79248]' : 'text-black'}>eBook</p>
                                <p className="text-black">£0.00</p>
                            </li>
                            <li onClick={() => handleItemClick("Audiobook", "£0.00")} className="hover:bg-gray-100 cursor-pointer rounded text-[20px] flex justify-between p-3 font-fairplay">
                                <p className={selectedFormat === "Audiobook" ? 'text-[#B79248]' : 'text-black'}>Audiobook</p>
                                <p className="text-black">£0.00</p>
                            </li>
                        </ul>
                    </div>
                )
            }
        </div >
    );
}

export default DropdownMenu;
