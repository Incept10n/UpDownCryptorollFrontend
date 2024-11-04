import { useEffect, useState } from "react";
import { fetchPlayerInfo } from "../../../../../helperFunctions/fetchFunctions";
import {
    getCurrentUsername,
    isUserLoggedIn,
} from "../../../../../helperFunctions/jwtTokenFuncions";
import UsernamePasswordForm from "./profileNameCardComponents/UsernamePasswordForm";
import SignoutConnectWalletButtons from "./profileNameCardComponents/SignoutConnectWalletButtons";
import { User } from "../../../../../types/User";
import LoadingIcon from "../../../../common/LoadingIcon";

const ProfileNameCard = () => {
    const [userInfo, setUserInfo] = useState<User>();

    useEffect(() => {
        const fetchUserInfo = async () => {
            if (isUserLoggedIn()) {
                const result = await fetchPlayerInfo(getCurrentUsername()!);

                if (result) {
                    setUserInfo(result);
                }
            }
        };

        fetchUserInfo();
    }, [isUserLoggedIn(), getCurrentUsername()]);

    return (
        <div className="flex flex-col">
            {!userInfo ? (
                <LoadingIcon width="20px" height="20px" borderWidth="5px" />
            ) : (
                <>
                    <UsernamePasswordForm user={userInfo!} />
                    <SignoutConnectWalletButtons />
                </>
            )}
        </div>
    );
};

export default ProfileNameCard;
