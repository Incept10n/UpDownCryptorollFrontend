import { useTranslation } from "react-i18next";
import AllTasks from "./subComponents/AllTasks";
import FollowUsProfileScreen from "../../common/FollowUsProfileScreen";

const TasksRewards = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="text-[30px] text-center text-[#a4a4a4] font-semibold mt-[37px]">
                {t("tasks")}
            </div>
            <AllTasks />
            <div
                className="UpDownGrayText underline text-[1rem]  
                            text-center font-light mt-[32px]"
            >
                {t("rewardsCommingSoon")}
            </div>
            <div className="relative mt-[160px]">
                <FollowUsProfileScreen />
            </div>
        </div>
    );
};

export default TasksRewards;
