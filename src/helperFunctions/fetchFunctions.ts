import { backendUrl } from "../constants";

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
