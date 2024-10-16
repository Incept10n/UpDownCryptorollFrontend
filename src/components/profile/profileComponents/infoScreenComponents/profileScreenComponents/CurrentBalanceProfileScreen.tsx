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
        <div className="flex flex-col 2xl:items-start lg:items-center">
            <div className="lg:text-[42px] text-[30px] upDownTextWhite font-semibold text-nowrap">
                {t("currentBalance")}
            </div>
            <div className="flex justify-start items-center mt-[7px]">
                <div className="lg:text-[42px] text-[30px] upDownTextWhite font-semibold leading-[42px]">
                    {currentBalance}
                </div>
                <img
                    src={assets.images.coin}
                    alt="coin"
                    className="lg:w-[42px] lg:h-[42px] w-[34px] h-[34px] ml-[11px]"
                />
            </div>
            <div
                className="UpDownGrayText lg:text-[24px] text-[16px] font-light 
                           underline hover:cursor-pointer mt-[17px]"
                onClick={() => setCurrentProfilePage(ProfilePageType.Rewards)}
            >
                {t("howToGetMore")}
            </div>
        </div>
    );
};

export default CurrentBalanceProfileScreen;
