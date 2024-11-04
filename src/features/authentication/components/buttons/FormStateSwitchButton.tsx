import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction } from "react";
import { FormState } from "../../types/enums";

const FormStateSwitchButton = ({
    currentFormState,
    setCurrentFormState,
}: {
    currentFormState: FormState;
    setCurrentFormState: Dispatch<SetStateAction<FormState>>;
}) => {
    const { t } = useTranslation();

    return (
        <div className="flex items-center space-x-[-11px]">
            <button
                className="leftOuterCutRectange"
                onClick={() => setCurrentFormState(FormState.Login)}
            >
                <div
                    className={`leftInnerCutRectange 
                                ${
                                    currentFormState === FormState.Login
                                        ? "activeChoiceBg"
                                        : "UpDownDarkBlueBg"
                                }`}
                >
                    <div className="popupTextGradient text-[1rem] font-semibold ml-[4px] mr-[14px]">
                        {t("loginText")}
                    </div>
                </div>
            </button>
            <button
                className="rightOuterCutRectange"
                onClick={() => setCurrentFormState(FormState.Signup)}
            >
                <div
                    className={`rightInnerCutRectange 
                                 ${
                                     currentFormState === FormState.Signup
                                         ? "activeChoiceBg"
                                         : "UpDownDarkBlueBg"
                                 }`}
                >
                    <div className="popupTextGradient text-[1rem] font-semibold mr-[4px] ml-[14px]">
                        {t("signupText")}
                    </div>
                </div>
            </button>
        </div>
    );
};

export default FormStateSwitchButton;
