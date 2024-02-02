import React from "react";
import FormField from "./FormField";
import CheckboxField from "./CheckBoxField";
import Button from "./FormButton";

const SignupForm = () => {
    return (
        <form className="w-full bg-[#F5F1E6] rounded-[2px]">
            <div className="mx-5 768:mx-32 1024:mx-6 pb-32 1024:pb-20 1440:pb-32 space-y-5 2000:mx-[70px] 2000:pb-52 2000:space-y-12">

                <div className="flex items-center justify-between py-10 1024:py-7 1440:py-10" >
                    <div className="flex items-center justify-center w-full">
                        <h1 className="text-[#A18758] font-fairplay text-[30px] 1024:text-[20px] 1440:text-[35px] 2000:text-[50px] 2000:tracking-[3px] items-center flex justify-end 2000:pt-16 2000:pb-6">
                            Signup
                        </h1>
                    </div>
                </div>

                <div className="space-y-4 1024:space-y-2 2000:space-y-8">
                    <div className={`mb-8 1024:mb-4 2000:mb-8`}>
                        <label className="block text-[#5D6162] text-[13px] 1024:text-[9px] 1440:text-[12px] mb-2 2000:text-[20px]">
                            Select title
                        </label>
                        <div className="relative">
                            <select id="" className={`flex items-center pl-2 w-full border border-[#676B6C] rounded-[4px] h-[50px] 1024:h-[28px] 1440:h-[35px] 2000:h-[55px] text-[#5D6162] appearance-none 1024:text-[8px]2000:text-[15px]`}
                            >
                                <option className="1024:text-[8px] 2000:text-[20px]">
                                    A
                                </option>
                                <option className="1024:text-[8px] 2000:text-[20px]">
                                    B
                                </option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-[#5D6162]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <FormField label="First name" type="text" />
                    <FormField label="Last name" type="password" />
                    <FormField label="Password" type="text" />
                    <FormField label="Email address" type="text" />
                    <div className="flex flex-col items-start space-y-6 1024:space-y-3 justify-between">
                        <CheckboxField label="I would like to receive news & offers." id="remember" />
                        <CheckboxField label="I have read and agree to the Terms and Conditions" id="termsAgreement" />
                    </div>
                </div>

                <Button type="submit" text="Create account" />
            </div>
        </form>
    );
};

export default SignupForm;
