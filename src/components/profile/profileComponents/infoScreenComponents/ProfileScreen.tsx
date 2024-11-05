import { useTranslation } from "react-i18next";
import CurrentBalanceProfileScreen from "./profileScreenComponents/CurrentBalanceProfileScreen";
import { TonConnectButton } from "@tonconnect/ui-react";
import InviteFriendButton from "../common/InviteFriendButton";
import FollowUsProfileTextRegularComponent from "../common/FollowUsProfileTextRegularComponent";
import { ProfileInfoChangeCard } from "../../../../features/authentication";

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
            <div
                className="flex 2xl:flex-row flex-col-reverse justify-between 
                           lg:w-[95%] w-[80%] mx-auto mt-[50px]"
            >
                <div className="flex justify-between 2xl:hidden mt-[80px]">
                    <InviteFriendButton />
                    <TonConnectButton />
                </div>
                <div className="2xl:mt-0 mt-[70px]">
                    <CurrentBalanceProfileScreen />
                </div>
                <div className="flex flex-col 2xl:items-end items-center">
                    <ProfileInfoChangeCard />
                    <div className="mt-[46px] 2xl:block hidden">
                        <TonConnectButton />
                    </div>
                </div>
            </div>
            <div
                className="flex 2xl:justify-between justify-center  
                            items-center w-[95%] mx-auto 
                            2xl:mt-[250px] mt-[100px]"
            >
                <div className="2xl:block hidden">
                    <InviteFriendButton />
                </div>
                <FollowUsProfileTextRegularComponent />
            </div>
        </div>
    );
};

export default ProfileScreen;
