export enum TimeframeChoice {
    None,
    Min30,
    Hrs4,
    Hrs12,
}

export enum PredictionValue {
    None,
    Up,
    Down,
}

export enum MainFormValidationMistakes {
    None,
    BetCannotBeEmpty,
    InsufficientFunds,
    NoTimeframeChosen,
    NoPredictionChosen,
}
