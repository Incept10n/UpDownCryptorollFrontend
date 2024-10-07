import { GameCoice } from "../context/ApplicationContext";
import {
    PredictionStatus,
    PredictionValue,
    TaskState,
    TimeframeChoice,
} from "../types/HelperTypes";

export class Converter {
    static getCoinFromGameChoice = (coin: GameCoice) => {
        switch (coin) {
            case GameCoice.Btc:
                return "Btc";
            case GameCoice.Eth:
                return "Eth";
            case GameCoice.Ton:
                return "Ton";
            case GameCoice.None:
                return "";
            default:
                break;
        }
    };

    static getGameChoiceFromCoinString = (coinString: string) => {
        switch (coinString.toLowerCase()) {
            case "btc":
                return GameCoice.Btc;
            case "eth":
                return GameCoice.Eth;
            case "ton":
                return GameCoice.Ton;
            default:
                return GameCoice.Btc;
        }
    };

    static getTimeFromTimeFrame = (timeframe: TimeframeChoice) => {
        switch (timeframe) {
            case TimeframeChoice.Min30:
                return "00:30:00";
            case TimeframeChoice.Hrs4:
                return "04:00:00";
            case TimeframeChoice.Hrs12:
                return "12:00:00";
            case TimeframeChoice.None:
                return "";
            default:
                break;
        }
    };

    static getTimeFrameFromTime = (timeframe: string) => {
        switch (timeframe) {
            case "00:30:00":
                return TimeframeChoice.Min30;
            case "04:00:00":
                return TimeframeChoice.Hrs4;
            case "12:00:00":
                return TimeframeChoice.Hrs12;
            case "":
                return TimeframeChoice.None;
            default:
                break;
        }
    };

    static getStringValueFrompredictionValue = (
        predictionValue: PredictionValue,
    ) => {
        switch (predictionValue) {
            case PredictionValue.Up:
                return "Up";
            case PredictionValue.Down:
                return "Down";
            case PredictionValue.None:
                return "";
            default:
                break;
        }
    };

    static getPredictionValueFromString = (predictionValue: string) => {
        switch (predictionValue.toLowerCase()) {
            case "up":
                return PredictionValue.Up;
            case "down":
                return PredictionValue.Down;
            case "none":
                return PredictionValue.None;
            default:
                return PredictionValue.None;
        }
    };

    static getPredictionStatusFromString = (predictionStatus: string) => {
        switch (predictionStatus.toLowerCase().trim()) {
            case "win":
                return PredictionStatus.Win;
            case "loss":
                return PredictionStatus.Lose;
            case "none":
                return PredictionStatus.None;
            default:
                return PredictionStatus.None;
        }
    };

    static getTaskStateFromString = (taskState: string) => {
        switch (taskState.toLowerCase()) {
            case "completed":
                return TaskState.Completed;
            case "uncollected":
                return TaskState.Uncollected;
            case "uncompleted":
                return TaskState.Uncompleted;
            default:
                return TaskState.Uncompleted;
        }
    };
}
