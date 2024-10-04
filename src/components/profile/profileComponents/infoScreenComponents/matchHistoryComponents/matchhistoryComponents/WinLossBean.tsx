import { useTranslation } from "react-i18next";
import { PredictionStatus } from "../../../../../../types/HelperTypes";

const WinLossBean = ({
    predictionStatus,
    className,
}: {
    predictionStatus: PredictionStatus;
    className: string;
}) => {
    const { t } = useTranslation();

    return (
        <div
            className={`bg-opacity-[0.72] ml-[6px]
                                       ${
                                           predictionStatus ===
                                           PredictionStatus.Win
                                               ? "bg-[#CCF751] greenBeanShadow"
                                               : "bg-[#fd5254] redBeanShadow"
                                       }
                                       rounded-tl-[100px] rounded-tr-[1000px] 
                                       rounded-bl-[1000px] rounded-br-[100px]
                                       flex justify-center items-center relative ${className}`}
        >
            <div className="text-[100%] font-semibold">
                {predictionStatus === PredictionStatus.Win
                    ? t("win")
                    : t("loss")}
            </div>
        </div>
    );
};

export default WinLossBean;
