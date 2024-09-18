export class CurrentMatch {
    id: number;
    bet: number;
    coin: string;
    prediction: string;
    timeRemaining: string;

    constructor(
        id: number,
        bet: number,
        coin: string,
        prediction: string,
        timeRemaining: string,
    ) {
        this.id = id;
        this.bet = bet;
        this.coin = coin;
        this.prediction = prediction;
        this.timeRemaining = timeRemaining;
    }
}
