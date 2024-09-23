import { TimeframeChoice } from "../types/HelperTypes";

export class Calculator {
    static getMultiplierFromTimeframeAndLoginStreak = (
        timeframe: TimeframeChoice,
        loginStreak: number,
    ) => {
        const dailyBonus = this.getMultiplierFromLoginStreak(loginStreak);
        const timeframeBonus = this.getMultiplierFromTimeframe(timeframe);

        return dailyBonus + timeframeBonus;
    };

    static getMultiplierFromTimeframe = (timeframe: TimeframeChoice) => {
        let timeframeBonus: number;

        switch (timeframe) {
            case TimeframeChoice.None:
                timeframeBonus = 1;
                break;
            case TimeframeChoice.Min30:
                timeframeBonus = 2;
                break;
            case TimeframeChoice.Hrs4:
                timeframeBonus = 15;
                break;
            case TimeframeChoice.Hrs12:
                timeframeBonus = 45;
                break;
            default:
                timeframeBonus = 1;
                break;
        }

        return timeframeBonus;
    };

    static getMultiplierFromLoginStreak = (loginStreak: number) => {
        const dailyBonus = 1 + 0.3 * loginStreak;

        return dailyBonus;
    };
}
