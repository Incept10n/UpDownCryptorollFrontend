import { useTranslation } from "react-i18next";
import { landingPageUrl } from "../../../constants";

const RulesHeading = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1
                className="xl:text-[42px] md:text-[37px] text-[30px] xl:text-left text-center 
                           font-semibold sm:block hidden"
            >
                {t("rulesHeader")}
            </h1>
            <h1
                className="sm:hidden block text-[30px] xl:text-left text-center 
                           font-semibold"
            >
                {t("rulesHeaderMobile")}
            </h1>
            <a
                className="xl:block hidden text-[#ccc3c3] opacity-[50%] underline font-light text-[24px]"
                href={`${landingPageUrl}`}
                target="_blank"
            >
                {t("aboutTheProjectRules")}
            </a>
        </>
    );
};

export default RulesHeading;
