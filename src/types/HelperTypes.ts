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

export enum PredictionStatus {
    None,
    Win,
    Lose,
}

export enum MainFormValidationMistakes {
    None,
    BetCannotBeEmpty,
    InsufficientFunds,
    NoTimeframeChosen,
    NoPredictionChosen,
}

export enum ProfilePageType {
    Profile,
    Language,
    History,
    Rewards,
}
