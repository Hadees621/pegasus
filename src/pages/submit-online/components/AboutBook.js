import React, { useState } from "react";
import { Link } from "react-router-dom";
import FileUpload from "./FileUpload.js";
import RadioGroup from "./RadioGroup";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput.js";
import FileUploadProgress from "./FileUploadProgress.js";

const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
];

const AboutBook = () => {
    const progress = 80;

    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (option) => {
        setSelectedOption(option);
    };
    return (
        <>
            <div className="flex flex-col w-full">
                <h1 className="text-[20px] 2000:text-[20px] 1024:text-[12px] text-[#B79248] font-fairplay mb-7 mt-5 1024:my-4 2000:mb-7 2000:mt-5">
                    About your book
                </h1>
                <div className="w-full 2000:mt-2">
                    <form>
                        <TextInput label="Pen name" id="inputField1" name="inputField1" />
                        <TextInput label="Book title" id="inputField2" name="inputField2" />

                        <div className="flex gap-4  1024:gap-2">
                            <div className="w-[40%]">
                                <TextInput label="Word count" id="inputField3" name="inputField3" />
                            </div>
                            <div className="flex-1">
                                <SelectInput label={"Genre"} option={options} />
                            </div>
                        </div>

                        <RadioGroup
                            label="Does your book have illustrations?"
                            options={[
                                { value: 1, label: "Yes" },
                                { value: 2, label: "No" },
                            ]}
                            onChange={handleRadioChange}
                            selectedOption={selectedOption}
                        />

                        <RadioGroup
                            label="Who will provide the illustrations?
"
                            options={[
                                { value: 1, label: "Author" },
                                { value: 2, label: "Publisher" },
                            ]}
                            onChange={handleRadioChange}
                            selectedOption={selectedOption}
                        />

                        <TextInput label="Additional comments" id="inputField2" name="inputField2" />

                        <RadioGroup
                            label="Have you had any work published?"
                            options={[
                                { value: 1, label: "Yes" },
                                { value: 2, label: "No" },
                            ]}
                            onChange={handleRadioChange}
                            selectedOption={selectedOption}
                        />

                        <FileUpload
                            label="Upload synopsis"

                        />

                        <FileUploadProgress
                            filename={"filename"}
                            progress={progress}
                        />

                        <FileUpload
                            label="Upload manuscripts"
                        />

                        <div className="flex flex-col gap-3 mb-3 1024:gap-1 1024:mb-1 2000:gap-3 2000: justify-center">
                            <div className={`form-check space-x-5 items-center ${selectedOption === 1 ? 'text-[#2E3059]' : 'text-[#B4B4B4]'}`}>
                                <input
                                    type="radio"
                                    className="form-check-input items-center"
                                    id="radioOption1"
                                    name="radioOptions"
                                    style={{ width: "20px", height: "20px" }}
                                    onChange={() => handleRadioChange(1)}
                                    checked={selectedOption === 1}
                                />
                                <label className="form-check-label font-fairplay 1024:text-[9px] 2000:text-[16px]" htmlFor="radioOption1">
                                    I have uploaded the completed manuscript (recommended)
                                </label>
                            </div>

                            <div className={`form-check space-x-5 items-center ${selectedOption === 2 ? 'text-[#2E3059]' : 'text-[#B4B4B4]'} mb-8`}>
                                <input
                                    type="radio"
                                    className="form-check-input items-center"
                                    id="radioOption2"
                                    name="radioOptions"
                                    style={{ width: "20px", height: "20px" }}
                                    onChange={() => handleRadioChange(2)}
                                    checked={selectedOption === 2}
                                />
                                <label className="form-check-label font-fairplay 1024:text-[9px] 2000:text-[16px]" htmlFor="radioOption2">
                                    I have uploaded samples
                                </label>
                            </div>
                        </div>

                        <SelectInput label={"Where did you hear about us?"} options={options} />

                        <div className="form-check space-x-5 flex justify-between items-center">
                            <div className="space-x-4 items-center flex">
                                <input
                                    type="radio"
                                    className="form-check-input border-2 border-black text-black"
                                    id="radio"
                                    name="radio"
                                    style={{ width: "20px", height: "20px" }}
                                />
                                <label className="form-check-label font-fairplay text-[12px] 1024:text-[9px] 2000:text-[16px] text-black">
                                    I have read and agree to the{" "}
                                    <Link to="/terms" className="text-[#B79248] underline font-fairplay">
                                        Terms and Conditions
                                    </Link>
                                    .
                                </label>
                            </div>

                            <Link to="/submitted" className="bg-[#42BA7A] text-white px-9 py-[10px] rounded-3xl cursor-pointer text-[12px] font-fairplay 1024:text-[9px] 1024:px-5 1024:py-[5px] 2000:text-[18px] 2000:px-11 2000:py-[11px]">
                                Submit
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default AboutBook;

