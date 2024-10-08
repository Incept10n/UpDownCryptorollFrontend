import { assets } from "../../../../../../imagesImports/assets";
import { TaskState } from "../../../../../../types/HelperTypes";
import CompletedCheckmarkButton from "./rewardTaskButtons/CompletedCheckmarkButton";
import ClaimButton from "./rewardTaskButtons/ClaimButton";
import ArrowRightButton from "./rewardTaskButtons/ArrowRightButton";

const TaskCard = ({
    text,
    reward,
    taskState,
}: {
    text: string;
    reward: number;
    taskState: TaskState;
}) => {
    const getButtonBasedOnTaskState = (taskState: TaskState) => {
        switch (taskState) {
            case TaskState.Completed:
                return <CompletedCheckmarkButton />;
            case TaskState.Uncollected:
                return <ClaimButton />;
            case TaskState.Uncompleted:
                return <ArrowRightButton />;
        }
    };

    return (
        <div
            className="buttonGrayGradient w-[93%] h-[40px] rounded-[10px]
                       border-[#747474] border-[1.2px] 
                       flex justify-between items-center upDownTextWhite"
        >
            <div className="text-[1rem] ml-[11px] font-semibold">{text}</div>
            <div
                className={`flex justify-between items-center mr-[6px]
                            ${taskState === TaskState.Uncompleted ? "w-[130px]" : "w-[140px]"}`}
            >
                <div className="flex justify-start items-center">
                    <div className="text-[1rem] font-semibold">+{reward}</div>
                    <img
                        src={assets.images.inputFormCoin}
                        alt="coin picture"
                        className="w-[24px] h-[24px] ml-[6px]"
                    />
                </div>
                {getButtonBasedOnTaskState(taskState)}
            </div>
        </div>
    );
};

export default TaskCard;
