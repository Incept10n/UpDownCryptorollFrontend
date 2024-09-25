import { useTranslation } from "react-i18next";

const DoTechicalAnalysisButton = () => {
    const { t } = useTranslation();

    return (
        <button
            className="buttonGrayGradient w-[181px] h-[41px] xl:hidden block
                       border-[1.1px] border-[#747474] rounded-[10px]
                       text-[16px] text-[#a4a4a4] sm:mt-[0] mt-[31px]"
        >
            {t("doTechnicalAnalysis")}
        </button>
    );
};

export default DoTechicalAnalysisButton;
