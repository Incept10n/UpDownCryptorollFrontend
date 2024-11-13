export class QuestionQuizResult {
    isQuestionAnsweredCorrectly: boolean;
    questionId: number;
    questionAnswer: number;

    constructor(
        questionId: number,
        questionAnswer: number,
        isQuestionAnsweredCorrectly: boolean,
    ) {
        this.questionId = questionId;
        this.questionAnswer = questionAnswer;
        this.isQuestionAnsweredCorrectly = isQuestionAnsweredCorrectly;
    }
}

export class QuizCheckBackendResponse {
    isQuizCompleted: boolean;
    quizResponses: QuestionQuizResult[];

    constructor(isQuizCompleted: boolean, quizResponses: QuestionQuizResult[]) {
        this.isQuizCompleted = isQuizCompleted;
        this.quizResponses = quizResponses;
    }
}
