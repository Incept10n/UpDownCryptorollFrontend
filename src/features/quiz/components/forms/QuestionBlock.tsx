import { QuestionBlockInfo } from "../../types/interfaces";
import Line from "../other/Line";
import QuestionHeading from "../text/QuestionHeading";
import QuestionAnswerOption from "./QuestionAnswerOption";

const QuestionBlock = ({
    questionBlockData,
    changeQuestionAnswer,
}: {
    questionBlockData: QuestionBlockInfo;
    changeQuestionAnswer: (questionId: number, newAnswer: number) => void;
}) => {
    return (
        <div className="mt-[40px]">
            <QuestionHeading
                text={questionBlockData.questionText}
                num={questionBlockData.questionNumber}
            />
            <div
                className="md:space-y-[25px] space-y-[19px] md:mt-[49px] mt-[39px] 
                            md:max-w-[795px] max-w-[370px] ml-[20px]"
            >
                {questionBlockData.optionsTexts.map((q, id) => (
                    <QuestionAnswerOption
                        text={q}
                        key={id + 1}
                        isSelected={id + 1 === questionBlockData.currentAnswer}
                        handleOnClick={() =>
                            changeQuestionAnswer(
                                questionBlockData.questionNumber,
                                id + 1,
                            )
                        }
                        answerState={questionBlockData.currentAnswerState}
                    />
                ))}
            </div>
            <Line />
        </div>
    );
};

export default QuestionBlock;
