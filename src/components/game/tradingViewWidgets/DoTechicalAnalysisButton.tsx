import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ApplicationContext } from "../../../context/ApplicationContext";
import { Converter } from "../../../helperFunctions/Converter";

const DoTechicalAnalysisButton = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { currentGame } = useContext(ApplicationContext)!;

    const handleOnClick = () => {
        navigate(
            `/technical-analysis?current-coin=${Converter.getCoinFromGameChoice(currentGame)}`,
        );
    };

    return (
        <button
            className="buttonGrayGradient w-[181px] h-[41px]
                       border-[1.1px] border-[#747474] rounded-[10px]
                       text-[16px] text-[#a4a4a4] md:scale-[1.5] scale-1"
            onClick={handleOnClick}
        >
            {t("doTechnicalAnalysis")}
        </button>
    );
};

export default DoTechicalAnalysisButton;
