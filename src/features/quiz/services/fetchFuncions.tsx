import { backendUrl } from "../../../constants";
import { getJwtToken } from "../../../helperFunctions/jwtTokenFuncions";
import { QuestionQuizResult, QuizCheckBackendResponse } from "../types/classes";
import { QuestionBlockInfo } from "../types/interfaces";

export const fetchCheckQuiz = async (
    quizData: QuestionBlockInfo[],
    username: string,
) => {
    const token = getJwtToken();

    const body = quizData.map((questionInfo) => ({
        questionId: questionInfo.questionNumber,
        questionAnswer: questionInfo.currentAnswer,
    }));

    const bruh = await fetch(`${backendUrl}/quiz?username=${username}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    });

    if (!bruh.ok) {
        return null;
    }

    const jsonAnswer: QuizCheckBackendResponse = await bruh.json();

    const questionResponseStates: QuestionQuizResult[] =
        jsonAnswer.quizResponses.map(
            (questionResult: QuestionQuizResult) =>
                new QuestionQuizResult(
                    questionResult.questionId,
                    questionResult.questionAnswer,
                    questionResult.isQuestionAnsweredCorrectly,
                ),
        );

    const result: QuizCheckBackendResponse = new QuizCheckBackendResponse(
        jsonAnswer.isQuizCompleted,
        questionResponseStates,
    );

    return result;
};
