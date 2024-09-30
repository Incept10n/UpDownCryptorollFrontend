import { useTranslation } from "react-i18next";

const PurposeHeading = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1
                className="xl:text-[42px] md:text-[37px] text-[30px] xl:text-left text-center 
                           font-semibold sm:block hidden xl:mt-[114px] md:mt-[80px] mt-[65px]"
            >
                {t("rulesPurpose")}
            </h1>
            <h1
                className="text-[30px] xl:text-left text-center 
                           font-semibold sm:hidden block mt-[65px]"
            >
                {t("rulesPurposeMobile")}
            </h1>
        </>
    );
};

export default PurposeHeading;
