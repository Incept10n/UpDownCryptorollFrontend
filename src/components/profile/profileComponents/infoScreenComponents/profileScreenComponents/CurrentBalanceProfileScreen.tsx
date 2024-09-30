import { useTranslation } from "react-i18next";
import { assets } from "../../../../../imagesImports/assets";
import { useContext } from "react";
import { ProfileContext } from "../../../../../context/ProfileContext";
import { ProfilePageType } from "../../../../../types/HelperTypes";
import { ApplicationContext } from "../../../../../context/ApplicationContext";

const CurrentBalanceProfileScreen = () => {
    const { t } = useTranslation();
    const { setCurrentProfilePage } = useContext(ProfileContext)!;
    const { currentBalance } = useContext(ApplicationContext)!;

    return (
        <div className="absolute left-[96px] top-[127px]">
            <div className="text-[42px] text-[] upDownTextWhite font-semibold">
                {t("currentBalance")}
            </div>
            <div className="flex justify-start mt-[7px]">
                <div className="text-[42px] upDownTextWhite font-semibold leading-[42px]">
                    {currentBalance}
                </div>
                <img
                    src={assets.images.coin}
                    alt="coin"
                    className="w-[42px] h-[42px] ml-[11px]"
                />
            </div>
            <div
                className="UpDownGrayText text-[24px] font-light 
                            underline hover:cursor-pointer mt-[17px]"
                onClick={() => setCurrentProfilePage(ProfilePageType.Rewards)}
            >
                {t("howToGetMore")}
            </div>
        </div>
    );
};

export default CurrentBalanceProfileScreen;
