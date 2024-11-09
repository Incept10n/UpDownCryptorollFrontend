import Line from "../other/Line";
import QuestionHeading from "../text/QuestionHeading";
import QuestionAnswerOption from "./QuestionAnswerOption";

const QuestionBlock = ({
    questionNumber,
    headingText,
    questions,
}: {
    questionNumber: number;
    headingText: string;
    questions: string[];
}) => {
    return (
        <div className="mt-[40px]">
            <QuestionHeading text={headingText} num={questionNumber} />
            <div className="space-y-[25px] mt-[49px] max-w-[795px] ml-[20px]">
                {questions.map((q, id) => (
                    <QuestionAnswerOption text={q} key={id} />
                ))}
            </div>
            <Line />
        </div>
    );
};

export default QuestionBlock;
