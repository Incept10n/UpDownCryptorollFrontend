import { useEffect, useState } from "react";
import { User } from "../../../types/User";
import {
    getCurrentUsername,
    isUserLoggedIn,
} from "../../../helperFunctions/jwtTokenFuncions";
import { fetchPlayerInfo } from "../../../helperFunctions/fetchFunctions";
import LoadingIcon from "../../../components/common/LoadingIcon";
import UsernamePasswordForm from "./buttonGroups/UsernamePasswordForm";
import SignoutConnectWalletButtons from "./buttonGroups/SignoutConnectWalletButtons";

const ProfileInfoChangeCard = () => {
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
                <div className="w-[300px] h-[100px] flex justify-center items-center">
                    <LoadingIcon width="40px" height="40px" borderWidth="8px" />
                </div>
            ) : (
                <>
                    <UsernamePasswordForm user={userInfo!} />
                    <SignoutConnectWalletButtons />
                </>
            )}
        </div>
    );
};

export default ProfileInfoChangeCard;
