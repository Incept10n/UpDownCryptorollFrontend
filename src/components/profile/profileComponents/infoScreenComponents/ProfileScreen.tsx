import { useTranslation } from "react-i18next";
import CurrentBalanceProfileScreen from "./profileScreenComponents/CurrentBalanceProfileScreen";
import ProfileNameCard from "./profileScreenComponents/ProfileNameCard";
import { TonConnectButton } from "@tonconnect/ui-react";
import FollowUsProfileScreen from "../common/FollowUsProfileScreen";

const ProfileScreen = () => {
    const { t } = useTranslation();

    return (
        <div className="relative w-full h-full lg:p-[35px] p-0">
            <div className="text-[24px] UpDownGrayText lg:block hidden">
                {t("myProfileText")}
            </div>
            <div className="text-[30px] text-center text-[#a4a4a4] font-semibold block lg:hidden">
                {t("myProfileText")}
            </div>
            <CurrentBalanceProfileScreen />
            <ProfileNameCard />
            <div
                className="absolute xl:top-[380px] xl:right-[170px]
                            top-[580px] right-[50%] translate-x-[50%]"
            >
                <TonConnectButton />
            </div>
            <FollowUsProfileScreen />
            <div
                className="upDownTextWhite text-[25px] font-semibold border-[1px] 
                           border-[#ccc3c3] w-[193px] h-[46px] text-center rounded-[10px]
                           absolute left-[112px] bottom-[88px] hover:cursor-pointer
                           hover:scale-[1.1] scale-[1] transition-all duration-[0.2] ease-in-out
                           xl:block hidden"
            >
                {t("inviteAFriend")}
            </div>
        </div>
    );
};

export default ProfileScreen;
