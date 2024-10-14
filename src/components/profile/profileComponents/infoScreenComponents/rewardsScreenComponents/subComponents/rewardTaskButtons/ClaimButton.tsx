import { useTranslation } from "react-i18next";

const ClaimButton = () => {
    const { t } = useTranslation();

    return (
        <button
            className="w-auto px-[16px] min-[1450px]:h-[41px] h-[27px] 
                       flex justify-center items-center
                       buttonGrayGradient border-[#747474] border-[1.2px] rounded-[10px]
                       min-[1450px]:text-[1.4rem] font-semibold"
        >
            {t("claim")}
        </button>
    );
};

export default ClaimButton;
