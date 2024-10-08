import { Dispatch, SetStateAction } from "react";
import { assets } from "../../../../../../../imagesImports/assets";
import { useTranslation } from "react-i18next";
import DailyCards from "./DailyCards";

const DailyRewardPopup = ({
    setDisplayDailyRewardPopup,
    displayDailyRewardPopup,
}: {
    setDisplayDailyRewardPopup: Dispatch<SetStateAction<boolean>>;
    displayDailyRewardPopup: boolean;
}) => {
    const { t } = useTranslation();

    return (
        <div
            className={`fixed bottom-0 left-0 w-full z-[10]
                       rounded-[19px] UpDownDarkBlueBg border-t-[0.8px] border-[#a4a4a4]
                       ${displayDailyRewardPopup ? "h-[475px]" : "h-[0px]"}
                       transition-all duration-[0.2s]`}
        >
            <img
                src={assets.icons.cross}
                alt="exit button"
                className="w-[38px] h-[38px] absolute right-[21px] top-[21px]"
                onClick={() => setDisplayDailyRewardPopup(false)}
            />
            <div
                className="text-[26px] text-[#a4a4a4] font-semibold text-center
                           mt-[25px]"
            >
                {t("dailyReward")}
            </div>
            <DailyCards />
            <div className="w-full flex justify-center mt-[53px]">
                <div className="text-[26px] font-semibold text-center max-w-[255px] upDownTextWhite">
                    {t("andPlusEveryFollowing")}
                </div>
            </div>
        </div>
    );
};

export default DailyRewardPopup;
