import { useTranslation } from "react-i18next";
import CurrentLanguageCards from "./languageScreenComponents/CurrentLanguageCards";
import FollowUsProfileScreen from "../common/FollowUsProfileScreen";

const LanguageScreen = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="relative w-full h-full lg:p-[35px] p-0">
            <div className="text-[24px] UpDownGrayText lg:block hidden">
                {t("languageText")}
            </div>
            <div className="flex 2xl:justify-between justify-center w-[91%] mx-auto mt-[58px]">
                <div
                    className="lg:text-[42px] text-[30px] upDownTextWhite 
                               font-semibold text-nowrap lg:block hidden"
                >
                    {t("chooseLanguage")}
                </div>
                <div
                    className="lg:text-[42px] text-[30px] upDownTextWhite 
                               font-semibold text-nowrap lg:hidden block"
                >
                    {t("language")}
                </div>
                <div
                    className="lg:text-[42px] text-[30px] upDownTextWhite 
                               font-semibold text-nowrap 2xl:block hidden"
                >
                    {t("currentLanguage")} {i18n.language == "en" ? "En" : "Ru"}
                </div>
            </div>
            <CurrentLanguageCards />
            <div
                className="lg:text-[42px] text-[30px] upDownTextWhite 
                           font-semibold text-nowrap 2xl:hidden block text-center mt-[70px]"
            >
                {t("currentLanguage")} {i18n.language == "en" ? "En" : "Ru"}
            </div>
            <div
                className="upDownTextWhite lg:text-[25px] text-[16px] 
                           font-semibold border-[1px] 
                           border-[#ccc3c3] text-center rounded-[10px]
                           px-[10px] lg:h-[46px] h-[27px]
                           absolute hover:cursor-pointer
                           lg:left-[100px] left-[10%]
                           lg:bottom-[88px] lg:top-auto bottom-auto top-[397px]
                           hover:scale-[1.1] scale-[1] transition-all duration-[0.2] ease-in-out
                           xl:block hidden"
            >
                {t("inviteAFriend")}
            </div>
            <FollowUsProfileScreen />
        </div>
    );
};

export default LanguageScreen;
