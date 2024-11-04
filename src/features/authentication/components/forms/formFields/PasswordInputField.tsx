import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useCutomErrorText } from "../../../hooks/useCustomErrorText";
import FormError from "../../other/FormError";
import { FormInformationContext } from "../../../context/FormInfoContext";

const PasswordInputField = ({
    placeholder,
    onChange,
}: {
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
    const { password, passwordValidationErrors, isLoading } = useContext(
        FormInformationContext,
    );
    const [errorMessage, setErrorMessage] = useState("");
    const { getPasswordErrorText } = useCutomErrorText();

    useEffect(() => {
        setErrorMessage(getPasswordErrorText(passwordValidationErrors));
    }, [passwordValidationErrors]);

    return (
        <div className={`w-[80%] relative ${isLoading && "opacity-[0.5]"}`}>
            <div
                className="h-[41px] border-[1px] border-[#717171] 
                       mt-[24px] p-[6px]"
            >
                <input
                    type="password"
                    className="w-full h-full text-[1.3rem] bg-transparent 
                               outline-none text-white ml-[11px]"
                    placeholder={placeholder}
                    maxLength={24}
                    value={password}
                    onChange={onChange}
                    disabled={isLoading}
                />
            </div>
            <FormError text={errorMessage} />
        </div>
    );
};

export default PasswordInputField;
