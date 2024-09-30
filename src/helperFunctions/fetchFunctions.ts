import { backendUrl } from "../constants";
import { GameCoice } from "../context/ApplicationContext";
import { PredictionValue, TimeframeChoice } from "../types/HelperTypes";
import { Match } from "../types/Match";
import { MatchHistoryItem } from "../types/MatchHistoryItem";
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
    return new Match(
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

export const fetchMatchHistory = async (
    walletAddress: string,
    offset: number,
    limit: number,
) => {
    const response = await fetch(
        `${backendUrl}/match/history?walletAddress=${walletAddress}&offset=${offset}&limit=${limit}`,
    );

    const matches: MatchHistoryItem[] = (await response.json()).map(
        (m: any) =>
            new MatchHistoryItem(
                m.id,
                m.bet,
                m.coin,
                m.entryDateTime,
                m.entryPrice,
                m.exitDateTime,
                m.exitPrice,
                m.predictionTimeframe,
                m.predictionValue,
                m.resultPayout,
                m.resultStatus,
            ),
    );

    return matches;
};

export const collectLastMatch = async (walletAddress: string) => {
    await fetch(
        `${backendUrl}/user/collectLastMatch?walletAddress=${walletAddress}`,
        {
            method: "POST",
        },
    );
};

export const changeUserName = async (
    walletAddress: string,
    newName: string,
) => {
    await fetch(`${backendUrl}/user?walletAddress=${walletAddress}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ newName: newName }),
    });
};
