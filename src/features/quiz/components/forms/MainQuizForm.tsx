import { QuestionBlockInfo } from "../../types/interfaces";
import QuestionBlock from "./QuestionBlock";

const MainQuizForm = ({
    quizData,
    changeQuestionAnswer,
}: {
    quizData: QuestionBlockInfo[];
    changeQuestionAnswer: (questionNumber: number, newAnswer: number) => void;
}) => {
    return (
        <div
            className="md:mt-[90px] mt-[50px] 
                       flex flex-col justify-start md:items-start items-center"
        >
            {quizData.map((questionBlockInfo) => (
                <QuestionBlock
                    questionBlockData={questionBlockInfo}
                    changeQuestionAnswer={changeQuestionAnswer}
                    key={questionBlockInfo.questionNumber}
                />
            ))}
        </div>
    );
};

export default MainQuizForm;
