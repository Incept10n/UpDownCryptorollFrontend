import { useTranslation } from "react-i18next";
import PageNameHeader from "./text/PageNameHeader";
import useQuiz from "../hooks/useQuiz";
import MainQuizForm from "./forms/MainQuizForm";
import CheckQuizButton from "./buttons/CheckQuizButton";

const QuizForm = () => {
    const { t } = useTranslation();

    const { quizData, changeQuestionAnswer, changeQuestionAnswerStates } =
        useQuiz();

    return (
        <div
            className="md:ml-[114px] ml-[16px] 
                       md:mr-[114px] mr-[16px]
                       md:mt-[153px] mt-[46px]"
        >
            <PageNameHeader
                mainText={t("quiz")}
                secondaryText={t("askToGetRewards")}
            />
            <MainQuizForm
                quizData={quizData}
                changeQuestionAnswer={changeQuestionAnswer}
            />
            <div className="md:max-w-[991px] max-w-[400px] md:mx-0 mx-auto md:mt-[100px] mt-[61px]">
                <CheckQuizButton
                    quizData={quizData}
                    changeQuestinonAnswerStates={changeQuestionAnswerStates}
                />
            </div>
        </div>
    );
};

export default QuizForm;
