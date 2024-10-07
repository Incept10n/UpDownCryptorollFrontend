import { useTranslation } from "react-i18next";
import CheckmarkWithTextReward from "./subComponents/CheckmarkWithTextReward";

const RewardsInfo = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col ml-[47px] mt-[39px] space-y-[19px]">
            <CheckmarkWithTextReward text={t("dailyReward")} />
            <CheckmarkWithTextReward text={t("dailyChallenge")} />
            <CheckmarkWithTextReward text={t("forCompletingTasks")} />
        </div>
    );
};

export default RewardsInfo;
