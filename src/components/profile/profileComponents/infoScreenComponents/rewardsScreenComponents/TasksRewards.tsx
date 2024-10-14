import { useTranslation } from "react-i18next";
import AllTasks from "./subComponents/AllTasks";

const TasksRewards = () => {
    const { t } = useTranslation();

    return (
        <div
            className="min-[1450px]:w-[640px] min-[1450px]:border-[1px]
                       min-[1450px]:border-[#999999] min-[1450px]:rounded-[35px]"
        >
            <div
                className="text-[30px] text-center text-[#a4a4a4] font-semibold 
                            mt-[37px] min-[1450px]:hidden block"
            >
                {t("tasks")}
            </div>
            <div
                className="text-[2rem] text-center upDownTextWhite font-semibold mt-[37px]
                            hidden min-[1450px]:block"
            >
                {t("completeAndGetCoins")}
            </div>
            <AllTasks />
            <div
                className="UpDownGrayText underline text-[1rem]  
                            text-center font-light  lg:hidden min-[1450px]:block
                           min-[1450px]:mt-[0] mt-[43px] mb-[14px]"
            >
                {t("rewardsCommingSoon")}
            </div>
        </div>
    );
};

export default TasksRewards;
