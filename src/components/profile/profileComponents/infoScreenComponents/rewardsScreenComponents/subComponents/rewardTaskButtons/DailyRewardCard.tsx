import { useTranslation } from "react-i18next";
import { assets } from "../../../../../../../imagesImports/assets";

const DailyRewardCard = ({
    dayNumber,
    moneyReward,
}: {
    dayNumber: number;
    moneyReward: number;
}) => {
    const { t } = useTranslation();

    return (
        <div
            className="buttonGrayGradient border-[1px] border-[#747474] 
                       w-[88px] h-[76px] rounded-[10px] flex flex-col justify-start items-center"
        >
            <h1 className="upDownTextWhite text-[23px] font-semibold text-center">
                {t("day")} {dayNumber}
            </h1>
            <div className="flex justify-around items-center mt-[7px] w-[90%]">
                <div className="text-[1rem] font-semibold upDownTextWhite">
                    +{moneyReward}
                </div>
                <img
                    src={assets.images.inputFormCoin}
                    alt="input form coin"
                    className="w-[18px] h-[18px]"
                />
            </div>
        </div>
    );
};

export default DailyRewardCard;
