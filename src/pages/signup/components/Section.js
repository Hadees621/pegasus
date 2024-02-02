import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Section = () => {
    return (
        <>
            <div className="flex flex-col 2000:mx-[430px] 2000:gap-10 mb-20 1024:flex-row 1024:gap-4 1024:mx-[230px] 1440:mx-[270px] 1535:mx-[440px] 1827:mx-[500px] 2560:mx-[530px] 1024:my-10 gap-14 py-20 1024:py-0">
                <SignupForm />
                <LoginForm />
            </div>
        </>
    );
};

export default Section;


