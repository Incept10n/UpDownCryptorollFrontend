import { useTranslation } from "react-i18next";
import CurrentLanguageCards from "./languageScreenComponents/CurrentLanguageCards";
import InviteFriendButton from "../common/InviteFriendButton";
import FollowUsProfileTextRegularComponent from "../common/FollowUsProfileTextRegularComponent";

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
                    {t("Language")}
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
                className="2xl:ml-[66px] ml-0 flex 2xl:justify-between justify-center 
                            2xl:mt-[200px] mt-[130px]"
            >
                <div className="2xl:block hidden">
                    <InviteFriendButton />
                </div>
                <FollowUsProfileTextRegularComponent />
            </div>
        </div>
    );
};

export default LanguageScreen;
