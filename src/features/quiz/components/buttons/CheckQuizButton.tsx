import { useTranslation } from "react-i18next";
import { QuestionBlockInfo } from "../../types/interfaces";
import { fetchCheckQuiz } from "../../services/fetchFuncions";
import { getCurrentUsername } from "../../../../helperFunctions/jwtTokenFuncions";
import { QuizCheckBackendResponse } from "../../types/classes";
import { useState } from "react";
import { QuizButtonState } from "../../types/enums";
import CheckingQuizAnimation from "../other/CheckingQuizAnimation";
import QuizResultMessage from "../text/QuizResultMessage";
import { useNavigate } from "react-router-dom";

const CheckQuizButton = ({
    quizData,
    changeQuestinonAnswerStates,
}: {
    quizData: QuestionBlockInfo[];
    changeQuestinonAnswerStates: (
        quizBackendResponse: QuizCheckBackendResponse,
    ) => void;
}) => {
    const { t } = useTranslation();
    const [quizButtonState, setQuizButtonState] = useState(
        QuizButtonState.CheckQuiz,
    );
    const navigate = useNavigate();

    const handleOnClick = async () => {
        if (quizButtonState === QuizButtonState.AllAnswersCorrect) {
            navigate("/profile?page=rewards");
        }

        setQuizButtonState(QuizButtonState.Checking);

        const result = await fetchCheckQuiz(quizData, getCurrentUsername()!);

        if (result) {
            changeQuestinonAnswerStates(result);

            if (result.isQuizCompleted) {
                setQuizButtonState(QuizButtonState.AllAnswersCorrect);
            } else {
                setQuizButtonState(QuizButtonState.YouHaveMistakes);
            }
        }
    };

    return (
        <>
            {quizButtonState === QuizButtonState.Checking ? (
                <CheckingQuizAnimation />
            ) : (
                <div
                    className="flex md:justify-start md:space-x-[60px] space-x-0 
                                justify-between items-center"
                >
                    <button
                        className={`border-[ccc3c3] border-[1px] rounded-[20px] 
                                   md:px-[40px] md:py-[10px] px-[14px] py-[9px]
                                   active:scale-[1.1] flex-none
                                   ${
                                       quizButtonState ===
                                           QuizButtonState.AllAnswersCorrect &&
                                       "bg-[#4daf63] bg-opacity-[0.29] border-transparent"
                                   }`}
                        onClick={handleOnClick}
                    >
                        <div className="md:text-[1.8rem] text-[1.25rem] text-white font-semibold">
                            {quizButtonState ===
                            QuizButtonState.AllAnswersCorrect
                                ? t("collectReward")
                                : t("checkQuiz")}
                        </div>
                    </button>
                    <QuizResultMessage buttonState={quizButtonState} />
                </div>
            )}
        </>
    );
};

export default CheckQuizButton;
