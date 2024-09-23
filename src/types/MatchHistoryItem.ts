export class MatchHistoryItem {
    id: number;
    bet: number;
    coin: string;
    entryTime: string;
    entryPrice: number;
    exitTime: string;
    exitPrice: number;
    predictionTimeframe: string;
    predictionValue: string;
    resultPayout: number;
    resultStatus: string;

    constructor(
        id: number,
        bet: number,
        coin: string,
        entryTime: string,
        entryPrice: number,
        exitTime: string,
        exitPrice: number,
        predictionTimeframe: string,
        predictionValue: string,
        resultPayout: number,
        resultStatus: string,
    ) {
        this.id = id;
        this.bet = bet;
        this.coin = coin;
        this.entryTime = entryTime;
        this.entryPrice = entryPrice;
        this.exitTime = exitTime;
        this.exitPrice = exitPrice;
        this.predictionTimeframe = predictionTimeframe;
        this.predictionValue = predictionValue;
        this.resultPayout = resultPayout;
        this.resultStatus = resultStatus;
    }
}
