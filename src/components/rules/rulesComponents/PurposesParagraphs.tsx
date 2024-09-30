import { useTranslation } from "react-i18next";

const PurposesParagraphs = () => {
    const { t } = useTranslation();

    return (
        <div className="flex xl:justify-start justify-center items-center">
            <div
                className="xl:mt-[75px] md:mt-[50px] mt-[30px] xl:space-y-[48px] md:space-y-[35px] space-y-[22px]
                            xl:text-[26px] md:text-[20px] text-[16px]
                            font-semibold xl:max-w-[959px] md:max-w-[500px] max-w-[323px]"
            >
                <p>{t("purposeParagraph1")}</p>
                <p>{t("purposeParagraph2")}</p>
                <p>{t("purposeParagraph3")}</p>
                <p>{t("purposeParagraph4")}</p>
            </div>
        </div>
    );
};

export default PurposesParagraphs;
