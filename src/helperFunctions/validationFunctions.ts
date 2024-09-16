import {
    MainFormValidationMistakes,
    PredictionValue,
    TimeframeChoice,
} from "../types/HelperTypes";

export const validateFormValues = (
    currentUserBalance: number,
    currentBet: number,
    timeframe: TimeframeChoice,
    predictionValue: PredictionValue,
) => {
    const validationErrors: MainFormValidationMistakes[] = [];
    validationErrors.push(MainFormValidationMistakes.None);

    if (!currentBet || currentBet <= 0) {
        validationErrors.push(MainFormValidationMistakes.BetCannotBeEmpty);
    } else if (
        currentUserBalance !== undefined &&
        currentUserBalance - currentBet < 0
    ) {
        validationErrors.push(MainFormValidationMistakes.InsufficientFunds);
    }

    if (timeframe === TimeframeChoice.None) {
        validationErrors.push(MainFormValidationMistakes.NoTimeframeChosen);
    }

    if (predictionValue === PredictionValue.None) {
        validationErrors.push(MainFormValidationMistakes.NoPredictionChosen);
    }

    return validationErrors;
};
