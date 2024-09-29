import { useTranslation } from "react-i18next";
import { MainFormValidationMistakes } from "../../../../../types/HelperTypes";

const PredictionValueErrors = ({
    validationErrors,
}: {
    validationErrors: MainFormValidationMistakes[];
}) => {
    const { t } = useTranslation();

    return (
        <div
            className="text-red-300 text-[16px] absolute w-full text-center
                        min-[1850px]:bottom-[-28px] sm:bottom-[-25px] bottom-[-20px]"
        >
            {validationErrors.find(
                (err) => err === MainFormValidationMistakes.NoPredictionChosen,
            ) && <div>{t("noPredictionValue")}</div>}
        </div>
    );
};

export default PredictionValueErrors;
