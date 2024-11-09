import { backendUrl } from "../../../constants";
import { getJwtToken } from "../../../helperFunctions/jwtTokenFuncions";

export const fetchUserReferalLinkSalt = async (username: string) => {
    const jwtToken = getJwtToken();

    const result = await fetch(
        `${backendUrl}/referralLinks/?username=${username}`,
        {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        },
    );

    return await result.text();
};

export const fetchVisitReferralLink = async (
    visitorName: string,
    referralSalt: string,
) => {
    const token = getJwtToken();

    await fetch(
        `${backendUrl}/referralLinks/visit?visitorName=${visitorName}&referralSalt=${referralSalt}`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
};
