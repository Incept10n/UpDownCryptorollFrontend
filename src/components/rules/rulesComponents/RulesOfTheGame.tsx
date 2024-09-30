import { useTranslation } from "react-i18next";

const RulesOfTheGame = () => {
    const { t } = useTranslation();

    return (
        <div className="flex xl:justify-start justify-center items-center">
            <div
                className="mt-[48px] space-y-[20px] xl:text-[26px] md:text-[20px] text-[16px]
                        font-semibold xl:max-w-[725px] md:max-w-[500px] max-w-[323px]"
            >
                <p>{t("rule1")}</p>
                <p>{t("rule2")}</p>
                <p>{t("rule3")}</p>
                <p>{t("rule4")}</p>
                <p>{t("rule5")}</p>
                <p>{t("rule6")}</p>
            </div>
        </div>
    );
};

export default RulesOfTheGame;
