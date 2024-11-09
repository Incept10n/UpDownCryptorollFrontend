import { getCurrentUsername } from "../../../helperFunctions/jwtTokenFuncions";
import { fetchVisitReferralLink } from "../services/fetchFuncions";

export const tryVisitIfReferralLink = async () => {
    const params = new URLSearchParams(location.search);

    const visitorName = getCurrentUsername();
    const referralSalt = params.get("referral");

    if (visitorName && referralSalt) {
        await fetchVisitReferralLink(visitorName, referralSalt);
    }
};
