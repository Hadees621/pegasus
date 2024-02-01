import React, { useState } from "react";
import Login from "../modals/login/Login";
import { useNavigate } from 'react-router-dom';

const AuthStrip = () => {
    const navigate = useNavigate();

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const handleLoginClick = () => {
        setIsLoginModalOpen(true);
    };

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    return (
        <>
            <div className="320:h-[70px] 1024:h-[28px] 1440:h-[50px] 2560:h-[80px] bg-[#EAEBEE] flex items-center justify-end">
                <div className="flex space-x-1 2000:space-x-3">
                    <p
                        className="text-xl 1024:text-[8px] 1440:text-[12px] 2560:text-[21px] font-fairplay cursor-pointer"
                        onClick={handleSignUpClick}
                    >
                        Sign up
                    </p>
                    <span> | </span>
                    <p
                        className="text-xl 1024:text-[8px] 1440:text-[12px] 2560:text-[21px] font-fairplay pr-5 md:pr-16 1024:pr-40 1440:pr-52 2560:pr-96 cursor-pointer"
                        onClick={handleLoginClick}
                    >
                        Log in
                    </p>

                </div>
            </div>

            {isLoginModalOpen && <Login isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />}
        </>
    );
};

export default AuthStrip;
