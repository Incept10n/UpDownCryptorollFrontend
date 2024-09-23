import { backendUrl } from "../constants";
import { GameCoice } from "../context/ApplicationContext";
import { CurrentMatch } from "../types/CurrentMatch";
import { PredictionValue, TimeframeChoice } from "../types/HelperTypes";
import { User } from "../types/User";
import { Converter } from "./Converter";

export const fetchPlayerInfo = async (walletAddress: string) => {
    const response = await fetch(
        `${backendUrl}/user?walletAddress=${walletAddress}`,
    );

    if (response.ok) {
        const result = await response.json();
        return new User(
            result.username,
            result.currentBalance,
            result.loginStreakCount,
            result.isLastMatchCollected,
        );
    }
};

export const postMatch = async (
    walletAddress: string,
    currentGameChoice: GameCoice,
    predictionAmount: number,
    predictionTimeFrame: TimeframeChoice,
    predictionValue: PredictionValue,
) => {
    const body = {
        WalletAddress: walletAddress,
        Coin: Converter.getCoinFromGameChoice(currentGameChoice),
        PredictionAmount: predictionAmount,
        PredictionTimeframe: "00:00:15",
        // Converter.getTimeFromTimeFrame(predictionTimeFrame), //"00:00:15",
        PredictionValue:
            Converter.getStringValueFrompredictionValue(predictionValue),
    };

    try {
        const response = await fetch(`${backendUrl}/match/createMatch`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Error while creating a match: ${response.status}`);
        }
    } catch (error) {
        console.log("there was an error while creating match");
    }
};

export const fetchCurrentUserMatch = async (walletAddress: string) => {
    const response = await fetch(
        `${backendUrl}/match/current?walletAddress=${walletAddress}`,
    );

    const result = await response.json();
    return new CurrentMatch(
        result.id,
        result.bet,
        result.coin,
        result.prediction,
        result.timeRemaining,
        result.winningMultiplier,
        result.entryPrice,
    );
};

export const fetchCurrentPrice: (coin: GameCoice) => Promise<number> = async (
    coin: GameCoice,
) => {
    const response = await fetch(
        `${backendUrl}/livePrice?sym=${Converter.getCoinFromGameChoice(coin)}`,
    );

    const result = await response.json();

    return result;
};
