import { useTranslation } from "react-i18next";

const ClaimButton = () => {
    const { t } = useTranslation();

    return (
        <button
            className="w-[54px] h-[27px] flex justify-center items-center
                               buttonGrayGradient border-[#747474] border-[1.2px] rounded-[10px]"
        >
            {t("claim")}
        </button>
    );
};

export default ClaimButton;
