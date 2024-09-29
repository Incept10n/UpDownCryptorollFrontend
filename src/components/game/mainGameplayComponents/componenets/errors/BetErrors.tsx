import { useTranslation } from "react-i18next";
import { MainFormValidationMistakes } from "../../../../../types/HelperTypes";

const BetErrors = ({
    validationErrors,
}: {
    validationErrors: MainFormValidationMistakes[];
}) => {
    const { t } = useTranslation();

    return (
        <div
            className="text-red-300 text-[16px] absolute w-full text-center
                        min-[1850px]:bottom-[-28px] sm:bottom-[-23px] bottom-[-17px]"
        >
            {validationErrors.find(
                (err) => err === MainFormValidationMistakes.BetCannotBeEmpty,
            ) && <div>{t("emptyBet")}</div>}
            {validationErrors.find(
                (err) => err === MainFormValidationMistakes.InsufficientFunds,
            ) && <div>{t("insufFunds")}</div>}
        </div>
    );
};

export default BetErrors;
