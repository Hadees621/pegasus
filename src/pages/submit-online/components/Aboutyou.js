import React from "react";
import SelectInput from "./SelectInput";
import TextInputArray from "./TextInputArray";

const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
];

const AboutYou = () => {
    return (
        <>
            <div className="flex flex-col w-full">
                <h1 className="text-[20px] text-[#B79248] font-fairplay mb-7 mt-5">
                    About you
                </h1>
                <div className="w-full">
                    <form>
                        <SelectInput label="Select title" id="titleSelect" options={options} />

                        <TextInputArray count={10} />

                        <SelectInput label="Select Country" id="titleSelect" options={options} />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AboutYou;


// import React from "react";
// import Select from "react-select";

// const options = [
//     { value: "option1", label: "Option 1" },
//     { value: "option2", label: "Option 2" },
// ];

// const AboutYou = () => {
//     return (
//         <>
//             <div className="flex flex-col w-full">
//                 {/* text-center 425:text-start  425:text-[15px] 768:text-[18px] 1024:text-[10px] 1440:text-[14px] 2000:text-[20px] */}
//                 <h1 className="text-[20px] text-[#B79248] font-fairplay mb-7 mt-5">
//                     About you
//                 </h1>
//                 <div className="w-full">
//                     <form>
//                         {/* <SelectInput label="Select title" id="titleSelect" options={options} */}
//                         <div className="mb-10">
//                             <label className="block mb-2 text-[13px] font-roboto text-[#5D6162]">
//                                 Select title
//                             </label>
//                             <Select options={options} isSearchable={true} className={'text-[#5D6162]'} placeholder={null} />
//                         </div>

//                         {[...Array(10)].map((_, index) => (
//                             <div key={index} className="mb-8">
//                                 <label
//                                     className="block text-[#5D6162] text-[13px] mb-2"
//                                     htmlFor={`inputField${index + 1}`}
//                                 >
//                                     Input Field {index + 1}
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id={`inputField${index + 1}`}
//                                     name={`inputField${index + 1}`}
//                                     className="w-full px-3 py-2 border border-[#676B6C] rounded-[4px] h-[40px]"
//                                 />
//                             </div>
//                         ))}


//                         <div className="mb-4">
//                             <label className="block text-[13px] font-roboto text-[#5D6162] mb-2">
//                                 Please Select a Country
//                             </label>
//                             <Select options={options} isSearchable={true} placeholder={null} />
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AboutYou;
