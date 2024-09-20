import { useTranslation } from "react-i18next";
import { PredictionValue } from "../../../../../../types/HelperTypes";
import { assets } from "../../../../../../imagesImports/assets";

const CurrentPredictionText = ({
    currentPrediction,
}: {
    currentPrediction: PredictionValue;
}) => {
    const { t } = useTranslation();

    return (
        <div className="popupTextGradient flex justify-start items-center">
            <div className="popupTextGradient">
                {t("predictionAlreadyInMatch")}
            </div>
            <div
                className={`w-[42px] h-[26px] bg-opacity-[0.72] ml-[6px]
                                       ${
                                           currentPrediction ===
                                           PredictionValue.Up
                                               ? "bg-[#CCF751]"
                                               : "bg-[#fd5254]"
                                       }
                                       rounded-tl-[100px] rounded-tr-[1000px] 
                                       rounded-bl-[1000px] rounded-br-[100px]
                                       flex justify-center items-center relative`}
            >
                <img
                    src={assets.icons.winLoseArrow}
                    alt="arrow"
                    className={`${
                        currentPrediction === PredictionValue.Up
                            ? "rotate-[0deg]"
                            : "rotate-[180deg]"
                    } scale-[0.60] absolute top-[-7px]`}
                />
            </div>
        </div>
    );
};

export default CurrentPredictionText;
