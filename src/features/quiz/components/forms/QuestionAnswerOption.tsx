import { useEffect, useState } from "react";
import { QuestionAnswerState } from "../../types/enums";
import RadioCheckmark from "../other/RadioCheckmark";

const QuestionAnswerOption = ({
    text,
    isSelected,
    handleOnClick,
    answerState,
}: {
    text: string;
    isSelected: boolean;
    handleOnClick: () => void;
    answerState: QuestionAnswerState;
}) => {
    const [bgColor, setBgColor] = useState("bg-[#2b3e67]");

    useEffect(() => {
        switch (answerState) {
            case QuestionAnswerState.Neutral:
                setBgColor("bg-[#2b3e67]");
                break;
            case QuestionAnswerState.Correct:
                setBgColor("bg-[#4ca444]");
                break;
            case QuestionAnswerState.Wrong:
                setBgColor("bg-[#a54242]");
                break;
            default:
                setBgColor("bg-[#2b3e67]");
                break;
        }
    }, [answerState]);

    return (
        <div
            className="flex justify-start items-start space-x-[24px] hover:cursor-pointer relative"
            onClick={handleOnClick}
        >
            <RadioCheckmark
                isChecked={isSelected}
                className="md:w-[26px] md:h-[26px] w-[18px] h-[18px] flex-none mt-[5px]"
            />
            <div className="upDownTextWhite md:text-[1.5rem] text-[1rem] font-semibold">
                {text}
            </div>
            <div
                className={`${bgColor} bg-opacity-[0.42] 
                            md:w-[110%] w-[105%] md:h-[150%] h-[130%]
                            absolute z-[-20] left-[-40px] md:top-[-20%] top-[-10%]
                            md:rounded-[15px] rounded-[9px] py-[12px] pl-[85px] pr-[26px]
                            ${!isSelected && "hidden"}`}
            ></div>
        </div>
    );
};

export default QuestionAnswerOption;
