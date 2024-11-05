import { useTranslation } from "react-i18next";
import PopupButton from "../../../../components/game/mainGameplayComponents/componenets/common/PopupButton";
import { FormValidator } from "../../utils/FormValidator";
import {
    FormState,
    PasswordValidationResult,
    UsernameValidationResult,
} from "../../types/enums";
import { useContext } from "react";
import { FormInformationContext } from "../../context/FormInfoContext";
import { logIn, signUp } from "../../../../helperFunctions/fetchFunctions";
import LoadingLoginButtonAnimation from "../other/LoadingLoginButtonAnimation";
import { ApplicationContext } from "../../../../context/ApplicationContext";

const LoginSignupButton = ({
    currentFormState,
}: {
    currentFormState: FormState;
}) => {
    const { t } = useTranslation();

    const {
        username,
        password,
        setUsernameValidationErrors,
        setPasswordValidationErrors,
        isLoading,
        setIsLoading,
    } = useContext(FormInformationContext);

    const { setDisplayLoginSignupPopup } = useContext(ApplicationContext)!;

    const getTextBasedOnFormState = () => {
        return currentFormState === FormState.Login
            ? t("loginText")
            : t("signupText");
    };

    const tryLogIn = async () => {
        const result = await logIn(username.trim(), password.trim());

        setIsLoading(false);

        if (result === null) {
            setUsernameValidationErrors(
                UsernameValidationResult.IncorrectUsernameOrPassword,
            );
            setPasswordValidationErrors(
                PasswordValidationResult.IncorrectUsernameOrPassword,
            );
        } else {
            setDisplayLoginSignupPopup(false);
        }
    };

    const trySignUp = async () => {
        const result = await signUp(username.trim(), password.trim());

        setIsLoading(false);

        if (result === null) {
            setUsernameValidationErrors(
                UsernameValidationResult.UserWithThisNameAlreadyExists,
            );
        } else {
            setDisplayLoginSignupPopup(false);
        }
    };

    const handleOnClick = () => {
        const usernameValidationError =
            FormValidator.validateUsername(username);

        const passwordValidationErrors =
            FormValidator.validatePassword(password);

        setUsernameValidationErrors(usernameValidationError);
        setPasswordValidationErrors(passwordValidationErrors);

        if (
            usernameValidationError !== UsernameValidationResult.Success ||
            passwordValidationErrors !== PasswordValidationResult.Success
        ) {
            return;
        }

        setIsLoading(true);

        if (currentFormState === FormState.Login) {
            tryLogIn();
        } else if (currentFormState === FormState.Signup) {
            trySignUp();
        }
    };

    return (
        <div className="mt-[47px]">
            {isLoading ? (
                <LoadingLoginButtonAnimation
                    currentFormState={currentFormState}
                />
            ) : (
                <div>
                    <div className="hidden sm:block">
                        <PopupButton
                            text={getTextBasedOnFormState()}
                            width="175px"
                            height="37px"
                            fontSize="1.3rem"
                            onClick={handleOnClick}
                        />
                    </div>
                    <div className="block sm:hidden">
                        <PopupButton
                            text={getTextBasedOnFormState()}
                            width="98px"
                            height="30px"
                            fontSize="1rem"
                            onClick={handleOnClick}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginSignupButton;
