import { useTranslation } from "react-i18next";
import { assets } from "../../../../../../imagesImports/assets";
import { TaskState } from "../../../../../../types/HelperTypes";

const TaskCard = ({
    text,
    reward,
    taskState,
}: {
    text: string;
    reward: number;
    taskState: TaskState;
}) => {
    const { t } = useTranslation();

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
                {taskState === TaskState.Uncompleted ? (
                    <button
                        className="w-[29px] h-[27px] flex justify-center items-center
                               buttonGrayGradient border-[#747474] border-[1.2px] rounded-[10px]"
                    >
                        <img
                            src={assets.icons.singleArrowRight}
                            alt="arrow right"
                            className="w-[17px] h-[16px]"
                        />
                    </button>
                ) : (
                    <button
                        className="w-[54px] h-[27px] flex justify-center items-center
                               buttonGrayGradient border-[#747474] border-[1.2px] rounded-[10px]"
                    >
                        {t("claim")}
                    </button>
                )}
            </div>
        </div>
    );
};

export default TaskCard;
