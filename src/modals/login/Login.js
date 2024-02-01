import React from "react";

const Login = ({ isLoginModalOpen, setIsLoginModalOpen }) => {
    const closeModal = () => {
        setIsLoginModalOpen(false);
    };

    return (
        <>
            {isLoginModalOpen && <div className="fixed z-50 inset-0 overflow-auto flex items-center justify-center backdrop-blur-md" onClick={closeModal}>

                <form className="w-[29%] bg-[#F9FAFA] m-auto space-y-12 1024:space-y-4 1440:space-y-7 2000:space-y-12 rounded-md " >

                    <div className="2000:mx-[70px] 2000:pb-56 2000:space-y-12">

                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-center w-full">

                                <h1 className="text-[#A18758] font-fairplay text-[40px] 1024:text-[40px] 1440:text-[57px] 2000:text-[50px] 2000:tracking-[3px] items-center flex justify-end pt-16 pb-6">
                                    Login
                                </h1>

                            </div>

                            <div className="w-9 h-9 flex justify-center items-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#5D6162">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>

                        </div>

                        <div className="space-y-8">
                            <div className="mb-8 1024:mb-3">
                                <label className="block text-[#5D6162] text-[13px] 1024:text-[9px] mb-2 2000:text-[20px]">
                                    Email address
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-[#5D6162] rounded-[4px] h-[50px] 1024:h-[28px] 2000:h-[55px]"
                                />
                            </div>

                            <div className="mb-8 1024:mb-3">
                                <label className="block text-[#5D6162] text-[13px] 1024:text-[9px] mb-2 2000:text-[20px]">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full px-3 py-2 border border-[#5D6162] rounded-[4px] h-[50px] 1024:h-[28px] 2000:h-[55px]"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">

                            <div className="flex items-center justify-center">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" className="w-6 h-6 appearance-none border border-[#5D6162] rounded-full checked:bg-black checked:border-transparent focus:outline-none focus:ring-2 focus:to-black" required />
                                </div>

                                <div className="ml-5">
                                    <label for="remember" className="text-[13px] 1024:text-[9px] mb-2 2000:text-[17px] font-roboto">Keep me signed in</label>
                                </div>
                            </div>
                            <>
                                <a href="#" className="text-[#8F9191] text-[13px] 1024:text-[9px] mb-2 2000:text-[16px]">Forgotten your password?</a>
                            </>
                        </div>

                        <button type="submit" className="w-full text-white bg-black h-14 rounded-[28px]">Log in</button>

                        <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                            Not a Member? <a href="#" className="font-medium text-black border-black border-b pb-1">Create an account</a>
                        </p>

                    </div>

                </form>
            </div>}
        </>
    );
};

export default Login;
