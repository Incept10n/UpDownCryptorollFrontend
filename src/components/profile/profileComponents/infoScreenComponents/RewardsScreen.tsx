import { useTranslation } from "react-i18next";
import RewardsInfo from "./rewardsScreenComponents/RewardsInfo";
import TasksRewards from "./rewardsScreenComponents/TasksRewards";
import FollowUsProfileTextRegularComponent from "../common/FollowUsProfileTextRegularComponent";
import HowToGetCoinAndRewardsText from "./rewardsScreenComponents/subComponents/HowToGetCoinAndRewardsText";

const RewardsScreen = () => {
    const { t } = useTranslation();

    return (
        <div className="relative w-full h-full lg:p-[35px] p-0 lg:overflow-y-scroll">
            <div className="text-[24px] UpDownGrayText lg:inline-block hidden ">
                {t("Rewards")}
            </div>
            <div className="text-[30px] text-center text-[#a4a4a4] font-semibold block lg:hidden">
                {t("Rewards")}
            </div>
            <div className="flex flex-col min-[1450px]:flex-row justify-between">
                <div className="flex flex-col justify-start pl-[47px]">
                    <HowToGetCoinAndRewardsText />
                    <RewardsInfo />
                    <div className="min-[1450px]:flex hidden justify-start mt-[170px]">
                        <FollowUsProfileTextRegularComponent />
                    </div>
                </div>
                <TasksRewards />
            </div>
            <div className="min-[1450px]:hidden flex justify-center mt-[40px]">
                <FollowUsProfileTextRegularComponent />
            </div>
        </div>
    );
};

export default RewardsScreen;
