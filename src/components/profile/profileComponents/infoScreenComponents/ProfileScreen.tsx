import { useTranslation } from "react-i18next";
import CurrentBalanceProfileScreen from "./profileScreenComponents/CurrentBalanceProfileScreen";
import ProfileNameCard from "./profileScreenComponents/ProfileNameCard";
import { TonConnectButton } from "@tonconnect/ui-react";
import FollowUsProfileScreen from "../common/FollowUsProfileScreen";

const ProfileScreen = () => {
    const { t } = useTranslation();

    return (
        <div className="relative w-full h-full p-[35px]">
            <div className="text-[24px] UpDownGrayText">
                {t("myProfileText")}
            </div>
            <CurrentBalanceProfileScreen />
            <ProfileNameCard />
            <div className="absolute top-[380px] right-[96px]">
                <TonConnectButton />
            </div>
            <FollowUsProfileScreen />
            <div
                className="upDownTextWhite text-[25px] font-semibold border-[1px] 
                           border-[#ccc3c3] w-[193px] h-[46px] text-center rounded-[10px]
                           absolute left-[112px] bottom-[88px] hover:cursor-pointer
                           hover:scale-[1.1] scale-[1] transition-all duration-[0.2] ease-in-out"
            >
                {t("inviteAFriend")}
            </div>
        </div>
    );
};

export default ProfileScreen;
