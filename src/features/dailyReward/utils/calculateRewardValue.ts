export const calculateRewardValue = (loginStreakCount: number) => {
    return 200 + (loginStreakCount - 1) * 60;
};
