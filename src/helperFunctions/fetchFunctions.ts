import { backendUrl } from "../constants";
import { GameCoice } from "../context/ApplicationContext";
import { CurrentMatch } from "../types/CurrentMatch";
import { PredictionValue, TimeframeChoice } from "../types/HelperTypes";
import { Converter } from "./Converter";

export const fetchPlayerInfo = async (walletAddress: string) => {
    const response = await fetch(
        `${backendUrl}/user?walletAddress=${walletAddress}`,
    );

    if (response.ok) {
        const result = await response.json();
        return {
            username: result.username,
            currentBalance: result.currentBalance,
        };
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
