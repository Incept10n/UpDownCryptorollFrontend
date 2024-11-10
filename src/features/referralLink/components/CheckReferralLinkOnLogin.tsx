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
        tryVisitIfReferralLink();
    }, [isUserLoggedIn(), getCurrentUsername()]);

    return <>{children}</>;
};

export default CheckReferralLinkOnLogin;
