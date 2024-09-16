import { useTranslation } from "react-i18next";
import { MainFormValidationMistakes } from "../../../../../types/HelperTypes";

const PredictionValueErrors = ({
    validationErrors,
}: {
    validationErrors: MainFormValidationMistakes[];
}) => {
    const { t } = useTranslation();

    return (
        <div className="text-red-300 text-[16px] absolute bottom-[-28px] w-full text-center">
            {validationErrors.find(
                (err) => err === MainFormValidationMistakes.NoTimeframeChosen,
            ) && <div>{t("noPredictionValue")}</div>}
        </div>
    );
};

export default PredictionValueErrors;
