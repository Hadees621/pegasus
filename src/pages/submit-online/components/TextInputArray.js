import React from "react";
import TextInput from "./TextInput";

const TextInputArray = ({ count }) => {
    return (
        <>
            {[...Array(count)].map((_, index) => (
                <TextInput
                    key={index}
                    label={`Input Field ${index + 1}`}
                    id={`inputField${index + 1}`}
                    name={`inputField${index + 1}`}
                />
            ))}
        </>
    );
};

export default TextInputArray;
