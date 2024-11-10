import { QuestionAnswerState } from "./enums";

export interface QuestionBlockInfo {
    questionNumber: number;
    questionText: string;
    optionsTexts: string[];
    currentAnswer: number;
    currentAnswerState: QuestionAnswerState;
}
