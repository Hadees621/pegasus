import React from "react";

const Section = () => {
    return (
        <>
            <div className="flex flex-col 2000:mx-[430px] 2000:gap-10 mb-20 1024:flex-row 1024:gap-4 1024:mx-[230px] 1440:mx-[350px] 1535:mx-[440px] 1827:mx-[500px] 2560:mx-[530px] 1024:my-10 gap-14 py-20 1024:py-0">

                <form className="w-full bg-[#F5F1E6] rounded-[2px]" >

                    <div className="mx-5 768:mx-32 1024:mx-6 pb-32 1024:pb-20 1440:pb-32 space-y-5 2000:mx-[70px] 2000:pb-52 2000:space-y-12">

                        <div className="flex items-center justify-between py-10 1024:py-7 1440:py-10" >

                            <div className="flex items-center justify-center w-full">

                                <h1 className="text-[#A18758] font-fairplay text-[30px] 1024:text-[20px] 1440:text-[45px] 2000:text-[50px] 2000:tracking-[3px] items-center flex justify-end 2000:pt-16 2000:pb-6">
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

                            <div className="2000:mb-8 1024:mb-3">
                                <label className="block text-[#5D6162] text-[13px] 1024:text-[9px] 1440:text-[12px] mb-2 2000:text-[20px]">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-[#5D6162] rounded-[4px] h-[50px] 1024:h-[28px] 1440:h-[35px] 2000:h-[55px]"
                                />
                            </div>

                            <div className="2000:mb-8 1024:mb-3">
                                <label className="block text-[#5D6162] text-[13px] 1024:text-[9px] 1440:text-[12px] mb-2 2000:text-[20px]">
                                    Last name
                                </label>
                                <input
                                    type="password"
                                    className="w-full px-3 py-2 border border-[#5D6162] rounded-[4px] h-[50px] 1024:h-[28px] 1440:h-[35px] 2000:h-[55px]"
                                />
                            </div>

                            <div className="2000:mb-8 1024:mb-3">
                                <label className="block text-[#5D6162] text-[13px] 1024:text-[9px] 1440:text-[12px] mb-2 2000:text-[20px]">
                                    Password
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-[#5D6162] rounded-[4px] h-[50px] 1024:h-[28px] 1440:h-[35px] 2000:h-[55px]"
                                />
                            </div>

                            <div className="2000:mb-8 1024:mb-3">
                                <label className="block text-[#5D6162] text-[13px] 1024:text-[9px] 1440:text-[12px] mb-2 2000:text-[20px]">
                                    Email address
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-[#5D6162] rounded-[4px] h-[50px] 1024:h-[28px] 1440:h-[35px] 2000:h-[55px]"
                                />
                            </div>

                        </div>

                        <div className="flex flex-col items-start space-y-6 1024:space-y-3 justify-between">

                            <div className="flex items-center justify-center">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" className="w-3 h-3 2000:w-6 2000:h-6 appearance-none border border-[#5D6162] rounded-full checked:bg-black checked:border-transparent focus:outline-none focus:ring-2 focus:to-black" required />
                                </div>

                                <div className="ml-2 2000:ml-5 flex items-center">
                                    <label for="remember" className="text-[11px] 1024:text-[9px] 1440:text-[12px] 2000:text-[17px] font-roboto">I would like to recieve news & offers.
                                    </label>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" className="w-3 h-3 2000:w-6 2000:h-6 appearance-none border border-[#5D6162] rounded-full checked:bg-black checked:border-transparent focus:outline-none focus:ring-2 focus:to-black" required />
                                </div>

                                <div className="ml-2 2000:ml-5 flex items-center">
                                    <label for="remember" className="text-[11px] 1024:text-[9px] 1440:text-[12px] 2000:text-[17px] font-roboto">I have read and agree to the <a href="/signup" className="font-medium text-[#A18758]">Terms and Conditions</a>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="w-full text-white bg-black h-9 1024:h-7 1024:text-[9px] 2000:h-14 rounded-[28px]">Create account</button>

                    </div>

                </form>

                <form className="w-full bg-[#F9FAFA] rounded-[2px]" >

                    <div className="mx-5 768:mx-16 1024:mx-6 pb-32 1024:pb-20 1440:pb-32 space-y-4 2000:mx-[70px] 2000:pb-52 2000:space-y-12">

                        <div className="flex items-center justify-between py-10 1024:py-7 1440:py-10" >

                            <div className="flex items-center justify-center w-full">

                                <h1 className="text-[#A18758] font-fairplay text-[30px] 1024:text-[20px] 1440:text-[45px] 2000:text-[50px] 2000:tracking-[3px] items-center flex justify-end 2000:pt-16 2000:pb-6">
                                    Login
                                </h1>

                            </div>

                        </div>

                        <div className="space-y-4 2000:space-y-8">
                            <div className="2000:mb-8 1024:mb-3">
                                <label className="block text-[#5D6162] text-[13px] 1024:text-[9px] 1440:text-[12px] mb-2 2000:text-[20px]">
                                    Email address
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-[#5D6162] rounded-[4px] h-[50px] 1024:h-[28px] 1440:h-[35px] 2000:h-[55px]"
                                />
                            </div>

                            <div className="2000:mb-8 1024:mb-3">
                                <label className="block text-[#5D6162] text-[13px] 1024:text-[9px] 1440:text-[12px] mb-2 2000:text-[20px]">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full px-3 py-2 border border-[#5D6162] rounded-[4px] h-[50px] 1024:h-[28px] 1440:h-[35px] 2000:h-[55px]"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">

                            <div className="flex items-center justify-center">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" className="w-3 h-3 2000:w-6 2000:h-6 appearance-none border border-[#5D6162] rounded-full checked:bg-black checked:border-transparent focus:outline-none focus:ring-2 focus:to-black" required />
                                </div>

                                <div className="ml-2 2000:ml-5 flex items-center">
                                    <label for="remember" className="text-[11px] 1024:text-[9px] 1440:text-[12px] 2000:text-[17px] font-roboto">Keep me signed in</label>
                                </div>
                            </div>
                            <>
                                <a href="#" className="text-[#8F9191] text-[11px] 1024:text-[9px] 1440:text-[12px] 2000:text-[16px]">Forgotten your password?</a>
                            </>
                        </div>

                        <button type="submit" className="w-full text-white bg-black h-9 1024:h-7 1024:text-[9px] 2000:h-14 rounded-[28px]">Log in</button>

                    </div>

                </form>

            </div>
        </>
    );
};

export default Section;
