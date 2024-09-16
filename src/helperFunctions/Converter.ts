import { GameCoice } from "../context/ApplicationContext";
import { PredictionValue, TimeframeChoice } from "../types/HelperTypes";

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
}
