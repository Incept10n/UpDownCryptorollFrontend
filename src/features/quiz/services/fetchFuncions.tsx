import { backendUrl } from "../../../constants";
import { getJwtToken } from "../../../helperFunctions/jwtTokenFuncions";
import { QuestionBlockInfo } from "../types/interfaces";
import { QuestionQuizResult } from "../types/QuestionQuizResult";

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

    const jsonAnswer: QuestionQuizResult[] = await bruh.json();

    const response = jsonAnswer.map(
        (questionResult) =>
            new QuestionQuizResult(
                questionResult.questionId,
                questionResult.questionAnswer,
            ),
    );

    console.log(response);
};
