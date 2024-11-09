import { useEffect } from "react";
import {
    getCurrentUsername,
    isUserLoggedIn,
} from "../../../helperFunctions/jwtTokenFuncions";
import { tryVisitIfReferralLink } from "../utils/visitReferralLink";

const CheckReferralLinkOnLogin = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    useEffect(() => {
        console.log("we are here trying to visit referral link");
        tryVisitIfReferralLink();
    }, [isUserLoggedIn(), getCurrentUsername()]);

    return <>{children}</>;
};

export default CheckReferralLinkOnLogin;
