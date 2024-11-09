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
    const getButtonBasedOnTaskState = () => {
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
            className="buttonGrayGradient w-[93%] min-[1450px]:h-[54px] h-[40px] rounded-[10px]
                       border-[#747474] border-[1.2px] 
                       flex justify-between items-center upDownTextWhite"
        >
            <div className="min-[1450px]:text-[1.4rem] text-[1rem] ml-[11px] font-semibold">
                {text}
            </div>
            <div className={`flex justify-between items-center mr-[6px]`}>
                <div className="flex justify-start items-center">
                    <div className="min-[1450px]:text-[1.4rem] text-[1rem] font-semibold">
                        +{reward}
                    </div>
                    <img
                        src={assets.images.inputFormCoin}
                        alt="coin picture"
                        className="min-[1450px]:w-[30px] min-[1450px]:h-[30px]
                                   w-[24px] h-[24px] ml-[6px] mr-[20px]"
                    />
                </div>
                {getButtonBasedOnTaskState()}
            </div>
        </div>
    );
};

export default TaskCard;
