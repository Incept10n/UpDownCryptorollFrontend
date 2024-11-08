import { useEffect, useState } from "react";
import { fetchUserReferalLinkSalt } from "../services/fetchFuncions";
import { getCurrentUsername } from "../../../helperFunctions/jwtTokenFuncions";
import { currentHost } from "../../../constants";

const useRefferalLink = () => {
    const [userReferralLink, setUserReferralLink] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUserReferralLink = async () => {
            setIsLoading(true);

            const referralLinkSalt = await fetchUserReferalLinkSalt(
                getCurrentUsername()!,
            );

            setUserReferralLink(`${currentHost}?referral=${referralLinkSalt}`);

            setIsLoading(false);
        };

        getUserReferralLink();
    }, []);

    return { userReferralLink, isLoading };
};

export default useRefferalLink;
