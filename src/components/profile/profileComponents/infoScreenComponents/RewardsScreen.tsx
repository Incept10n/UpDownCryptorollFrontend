import { useTranslation } from "react-i18next";
import RewardsInfo from "./rewardsScreenComponents/RewardsInfo";
import TasksRewards from "./rewardsScreenComponents/TasksRewards";

const RewardsScreen = () => {
    const { t } = useTranslation();

    return (
        <div className="relative w-full h-full lg:p-[35px] p-0">
            <div className="text-[24px] UpDownGrayText lg:block hidden">
                {t("Rewards")}
            </div>
            <div className="text-[30px] text-center text-[#a4a4a4] font-semibold block lg:hidden">
                {t("Rewards")}
            </div>
            <RewardsInfo />
            <TasksRewards />
        </div>
    );
};

export default RewardsScreen;
