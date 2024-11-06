export class DailyRewardStatus {
    username: string;
    loginStreakCount: number;
    lastRewardedTime: string;
    lastLoginTime: string;
    isRewardCollected: boolean;

    constructor(
        username: string,
        loginStreakCount: number,
        lastRewardedTime: string,
        lastLoginTime: string,
        isRewardCollected: boolean,
    ) {
        this.username = username;
        this.loginStreakCount = loginStreakCount;
        this.lastRewardedTime = lastRewardedTime;
        this.lastLoginTime = lastLoginTime;
        this.isRewardCollected = isRewardCollected;
    }
}
