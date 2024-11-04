export enum FormState {
    Login,
    Signup,
}

export enum UsernameValidationResult {
    Success,
    UsernameCannotBeEmpty,
    UsernameCanOnlyContain,
    UserWithThisNameAlreadyExists,
    IncorrectUsernameOrPassword,
}

export enum PasswordValidationResult {
    Success,
    PasswordCannotBeEmpty,
    PasswordCannotContainSpaces,
    PasswordCannotBeShorterThan,
    IncorrectUsernameOrPassword,
}
