import { useTranslation } from "react-i18next";
import { MainFormValidationMistakes } from "../../../../../types/HelperTypes";

const BetErrors = ({
    validationErrors,
}: {
    validationErrors: MainFormValidationMistakes[];
}) => {
    const { t } = useTranslation();

    return (
        <div className="text-red-300 text-[16px] absolute bottom-[-28px] w-full text-center">
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