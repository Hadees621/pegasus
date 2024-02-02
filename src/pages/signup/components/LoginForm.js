import React from "react";
import FormField from "./FormField";
import CheckboxField from "./CheckBoxField";
import Button from "./FormButton";

const LoginForm = () => {
    return (
        <form className="w-full bg-[#F9FAFA] rounded-[2px]">
            <div className="mx-5 768:mx-16 1024:mx-6 pb-32 1024:pb-20 1440:pb-32 space-y-4 2000:mx-[70px] 2000:pb-52 2000:space-y-12">
                <div className="flex items-center justify-between py-10 1024:py-7 1440:py-10">
                    <div className="flex items-center justify-center w-full">
                        <h1 className="text-[#A18758] font-fairplay text-[30px] 1024:text-[20px] 1440:text-[35px] 2000:text-[50px] 2000:tracking-[3px] items-center flex justify-end 2000:pt-16 2000:pb-6">
                            Login
                        </h1>
                    </div>
                </div>
                <FormField label="Email address" type="text" />
                <FormField label="Password" type="password" />
                <div className="flex items-center justify-between">
                    <CheckboxField label="Keep me signed in" id="remember" />
                    <a href="#" className="text-[#8F9191] text-[11px] 1024:text-[9px] 1440:text-[12px] 2000:text-[16px]">Forgotten your password?</a>
                </div>
                <Button type="submit" text="Log in" />
            </div>
        </form>
    );
};

export default LoginForm;
