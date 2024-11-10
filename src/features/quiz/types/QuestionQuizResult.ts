export class QuestionQuizResult {
    questionId: number;
    questionAnswer: number;

    constructor(questionId: number, questionAnswer: number) {
        this.questionId = questionId;
        this.questionAnswer = questionAnswer;
    }
}
