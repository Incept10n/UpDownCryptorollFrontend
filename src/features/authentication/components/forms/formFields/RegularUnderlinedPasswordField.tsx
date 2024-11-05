import { ChangeEvent } from "react";
import FormError from "../../other/FormError";

const RegularUnderlinedPasswordField = ({
    value,
    placeholder,
    formErrorMessage,
    isLoading,
    handleOnChange,
}: {
    value: string;
    placeholder: string;
    formErrorMessage: string;
    isLoading: boolean;
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <div className="relative mt-[15px]">
            <input
                type="password"
                className={`text-[1.9rem] upDownTextWhite bg-transparent outline-none w-[210px]
                            ${isLoading && "opacity-[0.5]"}`}
                maxLength={24}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
                disabled={isLoading}
            />
            <div
                className={`h-[1px] w-full bg-white ${isLoading && "opacity-[0.5]"}`}
            ></div>
            <FormError text={formErrorMessage} />
        </div>
    );
};

export default RegularUnderlinedPasswordField;
