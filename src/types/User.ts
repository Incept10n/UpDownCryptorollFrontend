export class User {
    username: string;
    currentBalance: number;
    loginStreakCount: number;
    isLastMatchCollected: boolean;

    constructor(
        username: string,
        currentBalance: number,
        loginStreakCount: number,
        isLastMatchCollected: boolean,
    ) {
        this.username = username;
        this.currentBalance = currentBalance;
        this.loginStreakCount = loginStreakCount;
        this.isLastMatchCollected = isLastMatchCollected;
    }
}
