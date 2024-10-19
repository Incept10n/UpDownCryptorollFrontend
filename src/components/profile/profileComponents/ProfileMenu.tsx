import ProfileMenuItem from "./menuComponents/ProfileMenuItem";
import { assets } from "../../../imagesImports/assets";
import { useTranslation } from "react-i18next";
import { ProfilePageType } from "../../../types/HelperTypes";

const ProfileMenu = () => {
    const { t } = useTranslation();

    return (
        <div
            className="w-[295px] h-auto UpDownDarkBlueBg lg:block hidden
                       border-[#999999] border-opacity-[70%] border-[1px] rounded-[35px] p-[35px]"
        >
            <div className="text-[#ccc3c3] text-opacity-[50%] text-[24px] font-light">
                {t("menu")}
            </div>
            <ul
                className="flex flex-col justify-start items-center 
                           w-full mt-[44px]"
            >
                <ProfileMenuItem
                    icon={assets.icons.home}
                    text={t("profile")}
                    pageType={ProfilePageType.Profile}
                />
                <ProfileMenuItem
                    icon={assets.icons.world}
                    text={t("Language")}
                    pageType={ProfilePageType.Language}
                />
                <ProfileMenuItem
                    icon={assets.icons.book}
                    text={t("History")}
                    pageType={ProfilePageType.History}
                />
                <ProfileMenuItem
                    icon={assets.icons.reward}
                    text={t("Rewards")}
                    pageType={ProfilePageType.Rewards}
                />
            </ul>
        </div>
    );
};

export default ProfileMenu;
