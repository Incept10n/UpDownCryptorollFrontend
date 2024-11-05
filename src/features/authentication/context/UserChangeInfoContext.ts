import { createContext, Dispatch, SetStateAction } from "react";
import { FormContext } from "./FormInfoContext";
import {
    PasswordValidationResult,
    UsernameValidationResult,
} from "../types/enums";

interface UserChageInfoContextInterface extends FormContext {
    walletAddress: string;
    setUsername: Dispatch<SetStateAction<string>>;
    setPassword: Dispatch<SetStateAction<string>>;
    setWalletAddress: Dispatch<SetStateAction<string>>;
}

export const UserChangeInfoContext =
    createContext<UserChageInfoContextInterface>({
        username: "",
        password: "",
        usernameValidationErrors: UsernameValidationResult.Success,
        passwordValidationErrors: PasswordValidationResult.Success,
        setUsernameValidationErrors: () => {},
        setPasswordValidationErrors: () => {},
        isLoading: false,
        setIsLoading: () => {},

        walletAddress: "",
        setUsername: () => {},
        setPassword: () => {},
        setWalletAddress: () => {},
    });
