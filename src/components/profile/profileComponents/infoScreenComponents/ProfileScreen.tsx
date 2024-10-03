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
                className="absolute 
                           xl:top-[380px] lg:top-[580px] top-[390px]
                           xl:right-[170px] lg:right-[50%] right-[10%]
                           lg:translate-x-[50%] translate-x-0"
            >
                <TonConnectButton />
            </div>
            <FollowUsProfileScreen />
            <div
                className="upDownTextWhite lg:text-[25px] text-[16px] 
                           font-semibold border-[1px] 
                           border-[#ccc3c3] text-center rounded-[10px]
                           px-[10px] lg:h-[46px] h-[27px]
                           absolute hover:cursor-pointer
                           lg:left-[100px] left-[10%]
                           lg:bottom-[88px] lg:top-auto bottom-auto top-[397px]
                           hover:scale-[1.1] scale-[1] transition-all duration-[0.2] ease-in-out
                           xl:block lg:hidden block"
            >
                {t("inviteAFriend")}
            </div>
        </div>
    );
};

export default ProfileScreen;
