import { useTranslation } from "react-i18next";
import {
    PasswordValidationResult,
    UsernameValidationResult,
} from "../types/enums";

export const useCutomErrorText = () => {
    const { t } = useTranslation();

    const getUsernameErrorText = (
        usernameValidRes: UsernameValidationResult,
    ) => {
        switch (usernameValidRes) {
            case UsernameValidationResult.Success:
                return "";
            case UsernameValidationResult.UsernameCannotBeEmpty:
                return t("usernameCannotBeEmpty");
            case UsernameValidationResult.UsernameCanOnlyContain:
                return t("usernameCanOnlyContain");
            case UsernameValidationResult.IncorrectUsernameOrPassword:
                return t("incorrectUsernameOrPassword");
            case UsernameValidationResult.UserWithThisNameAlreadyExists:
                return t("userWithThisNameAlreadyExists");
            default:
                return "";
        }
    };

    const getPasswordErrorText = (
        passwordValidRes: PasswordValidationResult,
    ) => {
        switch (passwordValidRes) {
            case PasswordValidationResult.Success:
                return "";
            case PasswordValidationResult.PasswordCannotBeEmpty:
                return t("passwordCannotBeEmpty");
            case PasswordValidationResult.PasswordCannotContainSpaces:
                return t("passwordCannotContainSpaces");
            case PasswordValidationResult.PasswordCannotBeShorterThan:
                return t("passwordCannotBeShorterThan");
            case PasswordValidationResult.IncorrectUsernameOrPassword:
                return t("incorrectUsernameOrPassword");
            case PasswordValidationResult.OldPasswordIncorrect:
                return t("oldPasswordIncorrect");
            case PasswordValidationResult.OldNewPasswordsAreTheSame:
                return t("oldNewPasswordsAreTheSame");
            default:
                return "";
        }
    };

    return { getUsernameErrorText, getPasswordErrorText };
};
