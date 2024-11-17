import { backendUrl } from "../../../constants";
import {
    getJwtToken,
    removeJwtToken,
} from "../../../helperFunctions/jwtTokenFuncions";
import { DailyRewardStatus } from "../types/DailyRewardStatus";

export const fetchDailyRewardStatus = async (username: string) => {
    const token = getJwtToken();

    const result = await fetch(
        `${backendUrl}/rewards/dailyRewardStatus?username=${username}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    if (!result.ok && result.status === 404) {
        removeJwtToken();
    }

    const json: DailyRewardStatus = await result.json();

    return new DailyRewardStatus(
        json.username,
        json.loginStreakCount,
        json.lastRewardedTime,
        json.lastLoginTime,
        json.isRewardCollected,
    );
};

export const fetchCollectReward = async (username: string) => {
    const token = getJwtToken();

    await fetch(
        `${backendUrl}/rewards/collectDailyReward?username=${username}`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
};
