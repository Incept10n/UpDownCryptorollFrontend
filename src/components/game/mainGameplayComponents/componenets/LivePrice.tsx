import { useTranslation } from "react-i18next";
import GradientText from "./common/GradientText";
import GradientQuestionMark from "./common/GradientQuestionMark";
import { assets } from "../../../../imagesImports/assets";
import GradientDollarSign from "./common/GradientDollarSign";
import { Formatter } from "../../../../helperFunctions/Formater";

const LivePrice = ({
    livePrice,
    profit,
}: {
    livePrice: number;
    profit: number;
}) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center py-[52px] relative">
            <div className="flex justify-between items-center w-[141px]">
                <GradientText
                    className="text-[25px] font-semibold"
                    text={t("livePrice")}
                />
                <GradientQuestionMark />
            </div>
            <div className="flex items-center mt-[33px]">
                <GradientDollarSign />
                <GradientText
                    text={livePrice !== -1 ? livePrice.toString() : "..."}
                    className="text-[40px] font-semibold ml-[7px]"
                />
            </div>
            <div className="w-[70%] h-[1px] bg-[#6b6a6a] mt-[30px]" />
            <GradientText
                text={t("ifYouWin")}
                className="text-center text-[25px] font-semibold w-[80%] mt-[30px] leading-[33px]"
            />
            <div className="flex mt-[7px]">
                <GradientText
                    text={"+" + Formatter.formatMoney(profit)}
                    className="text-[30px] font-semibold"
                />
                <img
                    src={assets.images.inputFormCoin}
                    alt="input coin picture"
                    className="ml-[15px]"
                />
            </div>
        </div>
    );
};

export default LivePrice;
