export class CurrentMatch {
    id: number;
    bet: number;
    coin: string;
    prediction: string;
    timeRemaining: string;
    winningMultiplier: number;
    entryPrice: number;

    constructor(
        id: number,
        bet: number,
        coin: string,
        prediction: string,
        timeRemaining: string,
        winningMultiplier: number,
        entryPrice: number,
    ) {
        this.id = id;
        this.bet = bet;
        this.coin = coin;
        this.prediction = prediction;
        this.timeRemaining = timeRemaining;
        this.winningMultiplier = winningMultiplier;
        this.entryPrice = entryPrice;
    }
}
