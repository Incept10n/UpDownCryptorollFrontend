import { useTranslation } from "react-i18next";

const RulesHeading = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1 className="text-[42px] font-semibold">{t("rulesHeader")}</h1>
            <a
                className="text-[#ccc3c3] opacity-[50%] underline font-light text-[24px]"
                href="https://cryptoroll.su"
                target="_blank"
            >
                {t("aboutTheProjectRules")}
            </a>
        </>
    );
};

export default RulesHeading;
