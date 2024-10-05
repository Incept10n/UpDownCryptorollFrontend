import { useTranslation } from "react-i18next";
import MatchHistory from "./matchHistoryComponents/MatchHistory";
import FollowUsProfileScreen from "../common/FollowUsProfileScreen";

const HistoryScreen = () => {
    const { t } = useTranslation();

    return (
        <div className="relative w-full h-auto lg:p-[35px] p-0">
            <div className="text-[24px] UpDownGrayText lg:block hidden">
                {t("History")}
            </div>
            <div
                className="lg:text-[42px] text-[30px] upDownTextWhite 
                           font-semibold text-nowrap lg:block hidden mt-[44px] ml-[40px]"
            >
                {t("youMatchHistory")}
            </div>
            <div
                className="lg:text-[42px] text-[30px] upDownTextWhite text-center
                           font-semibold text-nowrap lg:hidden block"
            >
                {t("youMatchHistoryMobile")}
            </div>
            <MatchHistory />
            <div className="absolute left-[50%] translate-x-[-50%] bottom-[-170px] min-[1024px]:hidden">
                <FollowUsProfileScreen />
            </div>
        </div>
    );
};

export default HistoryScreen;
