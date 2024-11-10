import { useTranslation } from "react-i18next";
import PageNameHeader from "./text/PageNameHeader";
import useQuiz from "../hooks/useQuiz";
import MainQuizForm from "./forms/MainQuizForm";
import CheckQuizButton from "./buttons/CheckQuizButton";

const QuizForm = () => {
    const { t } = useTranslation();

    const { quizData, changeQuestionAnswer } = useQuiz();

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
            <CheckQuizButton quizData={quizData} />
        </div>
    );
};

export default QuizForm;
