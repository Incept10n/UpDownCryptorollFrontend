import { backendUrl } from "../constants";
import { GameCoice } from "../context/ApplicationContext";
import {
    PredictionValue,
    TaskState,
    TimeframeChoice,
} from "../types/HelperTypes";
import { Match } from "../types/Match";
import { MatchHistoryItem } from "../types/MatchHistoryItem";
import { Task } from "../types/Task";
import { User } from "../types/User";
import { Converter } from "./Converter";
import { getJwtToken, saveJwtToken } from "./jwtTokenFuncions";

export const signUp = async (username: string, password: string) => {
    const response = await fetch(`${backendUrl}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        return null;
    }

    const jsonResult = await response.json();

    saveJwtToken(jsonResult.jwtToken);

    return {
        user: new User(
            jsonResult.username,
            jsonResult.currentBalance,
            jsonResult.loginStreakCount,
            jsonResult.isLastMatchCollected,
        ),
        jwtToken: jsonResult.jwtToken,
    };
};

export const logIn = async (username: string, password: string) => {
    const result = await fetch(`${backendUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });

    if (!result.ok) {
        return null;
    }

    const jsonResult = await result.json();

    saveJwtToken(jsonResult.jwtToken);

    return {
        user: new User(
            jsonResult.username,
            jsonResult.currentBalance,
            jsonResult.loginStreakCount,
            jsonResult.isLastMatchCollected,
        ),
        jwtToken: jsonResult.jwtToken,
    };
};

export const fetchPlayerInfo = async (username: string) => {
    const jwtToken = getJwtToken();

    if (!jwtToken) {
        throw new Error("JWT token not found. Please log in.");
    }

    const response = await fetch(`${backendUrl}/user?username=${username}`, {
        headers: {
            Authorization: `Bearer ${jwtToken}`,
        },
    });

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
    username: string,
    currentGameChoice: GameCoice,
    predictionAmount: number,
    predictionTimeFrame: TimeframeChoice,
    predictionValue: PredictionValue,
) => {
    const body = {
        username: username,
        coin: Converter.getCoinFromGameChoice(currentGameChoice),
        predictionAmount: predictionAmount,
        predictionTimeframe: "00:00:15",
        // Converter.getTimeFromTimeFrame(predictionTimeFrame), //"00:00:15",
        predictionValue:
            Converter.getStringValueFrompredictionValue(predictionValue),
    };

    const jwtToken = getJwtToken();

    if (!jwtToken) {
        throw new Error("JWT token not found. Please log in.");
    }

    try {
        const response = await fetch(
            `${backendUrl}/match/createMatch?username=${username}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                },
                body: JSON.stringify(body),
            },
        );

        if (!response.ok) {
            throw new Error(`Error while creating a match: ${response.status}`);
        }
    } catch (error) {
        console.log("there was an error while creating match");
    }
};

export const fetchCurrentUserMatch = async (username: string) => {
    const jwtToken = getJwtToken();

    if (!jwtToken) {
        throw new Error("JWT token not found. Please log in.");
    }

    const response = await fetch(
        `${backendUrl}/match/current?username=${username}`,
        {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        },
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
    username: string,
    offset: number,
    limit: number,
) => {
    const jwtToken = getJwtToken();

    if (!jwtToken) {
        throw new Error("JWT token not found. Please log in.");
    }

    const response = await fetch(
        `${backendUrl}/match/history?username=${username}&offset=${offset}&limit=${limit}`,
        {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        },
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

export const collectLastMatch = async (username: string) => {
    const jwtToken = getJwtToken();

    if (!jwtToken) {
        throw new Error("JWT token not found. Please log in.");
    }

    await fetch(`${backendUrl}/user/collectLastMatch?username=${username}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${jwtToken}`,
        },
    });
};

export const changeUserInfo = async (
    currentUsername: string,
    newInfo: {
        newName?: string;
        newPassword?: string;
        newWalletAddress?: string;
    } | null = null,
) => {
    const jwtToken = getJwtToken();

    if (!jwtToken) {
        throw new Error("JWT token not found. Please log in.");
    }

    const result = await fetch(
        `${backendUrl}/user?username=${currentUsername}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwtToken}`,
            },
            body: JSON.stringify({
                name: newInfo?.newName,
                password: newInfo?.newPassword,
                walletAddress: newInfo?.newWalletAddress,
            }),
        },
    );

    if (!result.ok) {
        return false;
    }

    const json = await result.json();

    saveJwtToken(json.newToken);

    return true;
};

export const fetchUserTasks = async (username: string): Promise<Task[]> => {
    const jwtToken = getJwtToken();

    if (!jwtToken) {
        throw new Error("JWT token not found. Please log in.");
    }

    const result = await fetch(`${backendUrl}/tasks?username=${username}`, {
        headers: {
            Authorization: `Bearer ${jwtToken}`,
        },
    });

    const json = await result.json();

    return json.map(
        (task: any) =>
            new Task(
                task.id,
                task.name,
                task.reward,
                Converter.getTaskStateFromString(task.status),
            ),
    );
};

export const changeTaskState = async (
    taskId: number,
    changedStatus: TaskState,
    username: string,
) => {
    const jwtToken = getJwtToken();

    if (!jwtToken) {
        throw new Error("JWT token not found. Please log in.");
    }

    await fetch(`${backendUrl}/tasks?username=${username}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ taskId, changedStatus }),
    });
};
