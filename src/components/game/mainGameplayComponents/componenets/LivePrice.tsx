import { useTranslation } from "react-i18next";
import GradientText from "./common/GradientText";
import GradientQuestionMark from "./common/GradientQuestionMark";
import { assets } from "../../../../imagesImports/assets";
import GradientDollarSign from "./common/GradientDollarSign";
import { Formatter } from "../../../../helperFunctions/Formater";
import { useEffect, useState } from "react";
import { fetchCurrentUserMatch } from "../../../../helperFunctions/fetchFunctions";
import {
    getCurrentUsername,
    isUserLoggedIn,
} from "../../../../helperFunctions/jwtTokenFuncions";

const LivePrice = ({
    livePrice,
    profit,
    isCurrentlyInMatch,
}: {
    livePrice: number;
    profit: number;
    isCurrentlyInMatch: boolean;
}) => {
    const { t } = useTranslation();
    const [currentProfit, setCurrentProfit] = useState<number | null>(null);

    useEffect(() => {
        if (isCurrentlyInMatch && isUserLoggedIn()) {
            fetchCurrentUserMatch(getCurrentUsername()!).then((result) => {
                setCurrentProfit(result.bet * result.winningMultiplier);
            });
        } else {
            setCurrentProfit(null);
        }
    }, [isCurrentlyInMatch]);

    return (
        <div
            className="min-[1580px]:ml-[14px] ml-[0px] 
                       min-[1580px]:mt-[0] md:mt-[21px] sm:mt-[-30px] mt-[-35px]
                       min-[1580px]:w-[236px] w-[335px] 
                       min-[1580px]:h-[400px] h-[147px] flex-none"
        >
            <div
                className="min-[1580px]:flex min-[1580px]:flex-col 
                           inline-grid grid-cols-2
                           items-center min-[1580px]:py-[52px] py-[26px]"
            >
                <div
                    className="flex min-[1580px]:flex-row flex-row-reverse 
                               min-[1580px]:justify-between justify-end items-center
                               min-[1580px]:ml-0 ml-[25px]"
                >
                    <GradientText
                        className="min-[1580px]:text-[25px] text-[22px] font-semibold whitespace-nowrap"
                        text={t("livePrice")}
                    />
                    <div className="ml-[10px] min-[1580px]:mr-0 mr-[10px]">
                        <GradientQuestionMark />
                    </div>
                </div>
                <div className="flex items-center min-[1580px]:mt-[33px] min-[1580px]:ml-0 ml-[18px]">
                    <GradientDollarSign className="min-[1580px]:scale-100 scale-[0.83]" />
                    <GradientText
                        text={livePrice !== -1 ? livePrice.toString() : "..."}
                        className="min-[1580px]:text-[40px] text-[26px] font-semibold ml-[7px]"
                    />
                </div>
                <div className="w-[70%] h-[1px] bg-[#6b6a6a] mt-[30px] min-[1580px]:block hidden" />
                <GradientText
                    className="text-center min-[1580px]:text-[25px] text-[22px] 
                               font-semibold w-[80%] min-[1580px]:mt-[30px] mt-0 
                               min-[1580px]:ml-0 ml-[43px]
                               min-[1580px]:leading-[33px] leading-[28px]"
                    text={t("ifYouWin")}
                />
                <div className="flex min-[1580px]:mt-[7px] mt-0 min-[1580px]:ml-0 ml-[20px]">
                    <GradientText
                        text={
                            "+" + Formatter.formatMoney(currentProfit ?? profit)
                        }
                        className="min-[1580px]:text-[30px] text-[26px] font-semibold"
                    />
                    <div
                        className={`${profit.toFixed(2).length >= 6 ? "hidden" : "block"}`}
                    >
                        <img
                            src={assets.images.inputFormCoin}
                            alt="input coin picture"
                            className="ml-[15px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LivePrice;
