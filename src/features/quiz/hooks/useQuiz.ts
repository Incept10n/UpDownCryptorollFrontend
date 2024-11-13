import { useTranslation } from "react-i18next";
import { QuestionBlockInfo } from "../types/interfaces";
import { useState } from "react";
import { QuestionAnswerState } from "../types/enums";
import { QuizCheckBackendResponse } from "../types/classes";

const useQuiz = () => {
    const { t } = useTranslation();

    const quizDefaultData: QuestionBlockInfo[] = [
        {
            questionNumber: 1,
            questionText: t("question1"),
            optionsTexts: [
                t("question1Answer1"),
                t("question1Answer2"),
                t("question1Answer3"),
                t("question1Answer4"),
            ],
            currentAnswer: -1,
            currentAnswerState: QuestionAnswerState.Neutral,
        },
        {
            questionNumber: 2,
            questionText: t("question2"),
            optionsTexts: [
                t("question2Answer1"),
                t("question2Answer2"),
                t("question2Answer3"),
                t("question2Answer4"),
                t("question2Answer5"),
            ],
            currentAnswer: -1,
            currentAnswerState: QuestionAnswerState.Neutral,
        },
        {
            questionNumber: 3,
            questionText: t("question3"),
            optionsTexts: [
                t("question3Answer1"),
                t("question3Answer2"),
                t("question3Answer3"),
                t("question3Answer4"),
            ],
            currentAnswer: -1,
            currentAnswerState: QuestionAnswerState.Neutral,
        },
        {
            questionNumber: 4,
            questionText: t("question4"),
            optionsTexts: [
                t("question4Answer1"),
                t("question4Answer2"),
                t("question4Answer3"),
                t("question4Answer4"),
            ],
            currentAnswer: -1,
            currentAnswerState: QuestionAnswerState.Neutral,
        },
        {
            questionNumber: 5,
            questionText: t("question5"),
            optionsTexts: [
                t("question5Answer1"),
                t("question5Answer2"),
                t("question5Answer3"),
            ],
            currentAnswer: -1,
            currentAnswerState: QuestionAnswerState.Neutral,
        },
    ];

    const [quizData, setQuizData] =
        useState<QuestionBlockInfo[]>(quizDefaultData);

    const changeQuestionAnswer = (
        questionNumber: number,
        newAnswer: number,
    ) => {
        setQuizData((prevQuizData) =>
            prevQuizData.map((questionBlock) =>
                questionBlock.questionNumber === questionNumber
                    ? {
                          ...questionBlock,
                          currentAnswer: newAnswer,
                          currentAnswerState: QuestionAnswerState.Neutral,
                      }
                    : questionBlock,
            ),
        );
    };

    // TODO: finish function that will rewrite answers state "changeQuestionAnswerStates "
    // TODO: check user clicks check quiz button -> frontend changes selected tasks colors

    const changeQuestionAnswerStates = (
        quizBackendResponse: QuizCheckBackendResponse,
    ) => {
        setQuizData((prevQuizData) =>
            prevQuizData.map((questionBlock) => {
                const backendResponse = quizBackendResponse.quizResponses.find(
                    (response) =>
                        response.questionId === questionBlock.questionNumber,
                );

                if (backendResponse) {
                    return {
                        ...questionBlock,
                        currentAnswerState:
                            backendResponse.questionAnswer === -1
                                ? QuestionAnswerState.Neutral
                                : backendResponse.isQuestionAnsweredCorrectly
                                  ? QuestionAnswerState.Correct
                                  : QuestionAnswerState.Wrong,
                    };
                }

                return questionBlock;
            }),
        );
    };

    return { quizData, changeQuestionAnswer, changeQuestionAnswerStates };
};

export default useQuiz;
