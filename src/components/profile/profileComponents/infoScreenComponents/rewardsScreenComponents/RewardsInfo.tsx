import { useTranslation } from "react-i18next";
import CheckmarkWithTextReward from "./subComponents/CheckmarkWithTextReward";
import { useState } from "react";
import DailyRewardPopup from "./subComponents/rewardTaskButtons/DailyRewardPopup";

const RewardsInfo = () => {
    const { t } = useTranslation();
    const [displayDailyRewardPopup, setDisplayDailyRewardPopup] =
        useState(false);

    return (
        <div className="flex flex-col ml-[47px] mt-[39px] space-y-[19px]">
            <div
                onClick={() => {
                    setDisplayDailyRewardPopup(true);
                }}
                className="hover:cursor-pointer inline-block"
            >
                <CheckmarkWithTextReward text={t("dailyReward")} />
            </div>
            <CheckmarkWithTextReward text={t("dailyChallenge")} />
            <CheckmarkWithTextReward text={t("forCompletingTasks")} />
            <DailyRewardPopup
                displayDailyRewardPopup={displayDailyRewardPopup}
                setDisplayDailyRewardPopup={setDisplayDailyRewardPopup}
            />
        </div>
    );
};

export default RewardsInfo;
