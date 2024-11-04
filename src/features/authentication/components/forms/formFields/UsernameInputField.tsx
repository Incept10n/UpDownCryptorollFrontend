import { ChangeEvent, useContext, useEffect, useState } from "react";
import FormError from "../../other/FormError";
import { useCutomErrorText } from "../../../hooks/useCustomErrorText";
import { FormInformationContext } from "../../../context/FormInfoContext";

const UsernameInputField = ({
    placeholder,
    onChange,
}: {
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
    const { username, usernameValidationErrors, isLoading } = useContext(
        FormInformationContext,
    );
    const [errorMessage, setErrorMessage] = useState("");
    const { getUsernameErrorText } = useCutomErrorText();

    useEffect(() => {
        setErrorMessage(getUsernameErrorText(usernameValidationErrors));
    }, [usernameValidationErrors]);

    return (
        <div className={`w-[80%] relative ${isLoading && "opacity-[0.5]"}`}>
            <div
                className="h-[41px] border-[1px] border-[#717171]
                       mt-[50px] p-[6px]"
            >
                <input
                    type="text"
                    className="w-full h-full text-[1.3rem] bg-transparent 
                               outline-none text-white ml-[11px] tracking-wide"
                    placeholder={placeholder}
                    maxLength={13}
                    value={username}
                    onChange={onChange}
                    disabled={isLoading}
                />
            </div>
            <FormError text={errorMessage} />
        </div>
    );
};

export default UsernameInputField;
