import { useTranslation } from "react-i18next";
import PasswordInputField from "./formFields/PasswordInputField";
import UsernameInputField from "./formFields/UsernameInputField";
import { ChangeEvent, useEffect, useState } from "react";
import LoginSignupButton from "../buttons/LoginSignupButton";
import {
    FormState,
    PasswordValidationResult,
    UsernameValidationResult,
} from "../../types/enums";
import { FormInformationContext } from "../../context/FormInfoContext";

const LoginSignupForm = ({
    currentFormState,
}: {
    currentFormState: FormState;
}) => {
    const { t } = useTranslation();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [usernameValidationErrors, setUsernameValidationErrors] = useState(
        UsernameValidationResult.Success,
    );
    const [passwordValidationErrors, setPasswordValidationErrors] = useState(
        PasswordValidationResult.Success,
    );
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setUsernameValidationErrors(UsernameValidationResult.Success);
        setPasswordValidationErrors(PasswordValidationResult.Success);
        setUsername("");
        setPassword("");
    }, [currentFormState]);

    return (
        <FormInformationContext.Provider
            value={{
                username,
                password,
                usernameValidationErrors,
                setUsernameValidationErrors,
                passwordValidationErrors,
                setPasswordValidationErrors,
                isLoading,
                setIsLoading,
            }}
        >
            <div className="w-full flex flex-col justify-start items-center relative">
                <UsernameInputField
                    placeholder={t("usernamePlaceholder")}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setUsername(e.target.value)
                    }
                />
                <PasswordInputField
                    placeholder={t("passwordPlaceholder")}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                    }
                />
                <LoginSignupButton currentFormState={currentFormState} />
            </div>
        </FormInformationContext.Provider>
    );
};

export default LoginSignupForm;
