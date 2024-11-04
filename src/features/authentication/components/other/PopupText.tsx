import { useTranslation } from "react-i18next";
import { FormState } from "../../types/enums";

const PopupText = ({ currentFormState }: { currentFormState: FormState }) => {
    const { t } = useTranslation();

    return (
        <h1
            className="text-[1.6rem] popupTextGradient font-semibold text-center 
                       mt-[55px] relative"
        >
            {currentFormState === FormState.Login
                ? t("loginToContinueText")
                : t("signupText")}
        </h1>
    );
};

export default PopupText;
