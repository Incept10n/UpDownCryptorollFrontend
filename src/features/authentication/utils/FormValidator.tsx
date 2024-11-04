import {
    PasswordValidationResult,
    UsernameValidationResult,
} from "../types/enums";

export class FormValidator {
    static validateUsername(username: string): UsernameValidationResult {
        if (!username || !username.trim()) {
            return UsernameValidationResult.UsernameCannotBeEmpty;
        }

        const validPattern = /^[A-Za-z0-9_ ]+$/;

        if (!validPattern.test(username)) {
            return UsernameValidationResult.UsernameCanOnlyContain;
        }

        return UsernameValidationResult.Success;
    }

    static validatePassword(password: string): PasswordValidationResult {
        if (!password || !password.trim()) {
            return PasswordValidationResult.PasswordCannotBeEmpty;
        }

        const noSpacesPattern = /^\S+$/;

        if (!noSpacesPattern.test(password)) {
            return PasswordValidationResult.PasswordCannotContainSpaces;
        }

        if (password.trim().length < 6) {
            return PasswordValidationResult.PasswordCannotBeShorterThan;
        }

        return PasswordValidationResult.Success;
    }
}
