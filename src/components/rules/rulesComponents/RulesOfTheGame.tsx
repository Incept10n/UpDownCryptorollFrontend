import { useTranslation } from "react-i18next";

const RulesOfTheGame = () => {
    const { t } = useTranslation();

    return (
        <div className=" mt-[48px] space-y-[20px]">
            <p className="text-[26px] font-semibold">{t("rule1")}</p>
            <p className="text-[26px] font-semibold max-w-[725px]">
                {t("rule2")}
            </p>
            <p className="text-[26px] font-semibold max-w-[725px]">
                {t("rule3")}
            </p>
            <p className="text-[26px] font-semibold max-w-[725px]">
                {t("rule4")}
            </p>
            <p className="text-[26px] font-semibold max-w-[725px]">
                {t("rule5")}
            </p>
            <p className="text-[26px] font-semibold max-w-[725px]">
                {t("rule6")}
            </p>
        </div>
    );
};

export default RulesOfTheGame;
