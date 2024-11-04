import { createContext, Dispatch, SetStateAction } from "react";
import {
    PasswordValidationResult,
    UsernameValidationResult,
} from "../types/enums";

interface FormContext {
    username: string;
    password: string;
    usernameValidationErrors: UsernameValidationResult;
    passwordValidationErrors: PasswordValidationResult;
    setUsernameValidationErrors: Dispatch<
        SetStateAction<UsernameValidationResult>
    >;
    setPasswordValidationErrors: Dispatch<
        SetStateAction<PasswordValidationResult>
    >;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const FormInformationContext = createContext<FormContext>({
    username: "",
    password: "",
    usernameValidationErrors: UsernameValidationResult.Success,
    passwordValidationErrors: PasswordValidationResult.Success,
    setUsernameValidationErrors: () => {},
    setPasswordValidationErrors: () => {},
    isLoading: false,
    setIsLoading: () => {},
});
