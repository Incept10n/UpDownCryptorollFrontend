import { useTranslation } from "react-i18next";

const HistoryScreen = () => {
    const { t } = useTranslation();

    return (
        <div className="relative w-full h-full lg:p-[35px] p-0">
            <div className="text-[24px] UpDownGrayText lg:block hidden">
                {t("History")}
            </div>
        </div>
    );
};

export default HistoryScreen;
