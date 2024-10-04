import { useTranslation } from "react-i18next";

const MoreButton = () => {
    const { t } = useTranslation();

    return (
        <button className="px-[10px] py-[3px] buttonBlueGradient rounded-[12px]">
            <div className="text-[12px] font-semibold upDownTextWhite leading-[12px]">
                {t("historyMore")}
            </div>
        </button>
    );
};

export default MoreButton;
