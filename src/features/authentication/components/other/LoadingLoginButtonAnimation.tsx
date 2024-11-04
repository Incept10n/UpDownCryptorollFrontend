import { useTranslation } from "react-i18next";
import LoadingIcon from "../../../../components/common/LoadingIcon";
import { FormState } from "../../types/enums";

const LoadingLoginButtonAnimation = ({
    currentFormState,
}: {
    currentFormState: FormState;
}) => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-start items-center">
            <LoadingIcon width="29px" height="29px" borderWidth="4px" />
            <div className="text-[0.8rem] font-light text-white ml-[6px]">
                {currentFormState === FormState.Login
                    ? t("loginLoadingText")
                    : t("signupLoadingText")}
            </div>
        </div>
    );
};

export default LoadingLoginButtonAnimation;
