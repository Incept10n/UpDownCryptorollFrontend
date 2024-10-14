import { useTranslation } from "react-i18next";
import { assets } from "../../../../../../imagesImports/assets";

const HowToGetCoinAndRewardsText = () => {
    const { t } = useTranslation();

    return (
        <div className="justify-start items-center min-[1450px]:flex hidden mt-[40px]">
            <div className="text-[2.2rem] upDownTextWhite font-semibold text-center">
                {t("rewardshowToGetMore")}
            </div>
            <img
                src={assets.icons.trophy}
                alt="trophy"
                className="ml-[26px] min-[1820px]:block hidden"
            />
        </div>
    );
};

export default HowToGetCoinAndRewardsText;
