import { useContext, useState } from "react";
import { ApplicationContext } from "../../../context/ApplicationContext";
import PopupBackground from "../../../components/common/PopupBackground";
import FormStateSwitchButton from "./buttons/FormStateSwitchButton";
import "../styles/authenticationStyles.css";
import LoginSignupForm from "./forms/LoginSignupForm";
import { FormState } from "../types/enums";
import PopupLogo from "../../../components/common/PopupLogo";
import { useTranslation } from "react-i18next";
import PopupText from "../../../components/common/PopupText";
import ClosePopupButton from "../../../components/common/ClosePopupButton";

const SignupLoginPopupManager = () => {
    const { displayLoginSignupPopup, setDisplayLoginSignupPopup } =
        useContext(ApplicationContext)!;
    const [currentFormState, setCurrentFormState] = useState<FormState>(
        FormState.Login,
    );

    const { t } = useTranslation();

    return (
        <div
            className={`popupBackground w-full h-full fixed top-0 left-0 overflow-hidden
                        flex justify-center items-center 
                        ${!displayLoginSignupPopup ? "opacity-0 z-[-20]" : "opacity-100 z-[20]"}
                        transition-all duration-[0.5] ease-in-out`}
        >
            <PopupBackground className="sm:w-[387px] sm:h-[431px] w-[310px] h-[431px]">
                <div className="left-[50%] -translate-x-1/2 sm:top-[-50px] top-[-40px] absolute">
                    <PopupLogo className="sm:w-[82px] sm:h-[82px] w-[72px] h-[72px]" />
                </div>
                <ClosePopupButton
                    handleOnClick={() => setDisplayLoginSignupPopup(false)}
                />
                <PopupText
                    text={
                        currentFormState === FormState.Login
                            ? t("loginToContinueText")
                            : t("signupText")
                    }
                />
                <LoginSignupForm currentFormState={currentFormState} />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[31px] sm:scale-100 scale-[0.9]">
                    <FormStateSwitchButton
                        currentFormState={currentFormState}
                        setCurrentFormState={setCurrentFormState}
                    />
                </div>
            </PopupBackground>
        </div>
    );
};

export default SignupLoginPopupManager;
