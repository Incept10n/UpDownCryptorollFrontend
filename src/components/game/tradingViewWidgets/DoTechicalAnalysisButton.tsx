import { useTranslation } from "react-i18next";

const DoTechicalAnalysisButton = () => {
    const { t } = useTranslation();

    return (
        <button
            className="buttonGrayGradient w-[181px] h-[41px]
                       border-[1.1px] border-[#747474] rounded-[10px]
                       text-[16px] text-[#a4a4a4]"
        >
            {t("doTechnicalAnalysis")}
        </button>
    );
};

export default DoTechicalAnalysisButton;
