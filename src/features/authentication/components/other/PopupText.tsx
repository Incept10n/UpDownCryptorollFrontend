import { useTranslation } from "react-i18next";
import { FormState } from "../../types/enums";

const PopupText = ({ currentFormState }: { currentFormState: FormState }) => {
    const { t } = useTranslation();

    return (
        <h1
            className="sm:text-[1.6rem] text-[1.4rem] popupTextGradient font-semibold text-center 
                       mt-[55px] relative"
        >
            {currentFormState === FormState.Login
                ? t("loginToContinueText")
                : t("signupText")}
        </h1>
    );
};

export default PopupText;
