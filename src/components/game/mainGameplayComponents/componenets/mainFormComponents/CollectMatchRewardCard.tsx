import { useTranslation } from "react-i18next";
import { assets } from "../../../../../imagesImports/assets";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
    collectLastMatch,
    fetchMatchHistory,
    fetchPlayerInfo,
    fetchCurrentUserMatch,
} from "../../../../../helperFunctions/fetchFunctions";
import { Match } from "../../../../../types/Match";
import { getCurrentUsername } from "../../../../../helperFunctions/jwtTokenFuncions";

const CollectMatchRewardCard = ({
    setCurrentBalance,
    setIsLastMatchCollected,
    setCurrentMatch,
    setIsCurrentlyInMatch,
}: {
    setCurrentBalance: Dispatch<SetStateAction<number>>;
    setIsLastMatchCollected: Dispatch<SetStateAction<boolean>>;
    setCurrentMatch: Dispatch<SetStateAction<Match | null>>;
    setIsCurrentlyInMatch: Dispatch<SetStateAction<boolean>>;
}) => {
    const { t } = useTranslation();

    const [isMatchWon, setIsMatchWon] = useState(false);
    const [payout, setPayout] = useState(0);

    const handleOnCollect = () => {
        collectLastMatch(getCurrentUsername()!).then(() => {
            fetchPlayerInfo(getCurrentUsername()!).then((result) => {
                if (result) {
                    setCurrentBalance(result.currentBalance);
                    setIsLastMatchCollected(result.isLastMatchCollected);
                }
            });
            fetchCurrentUserMatch(getCurrentUsername()!).then((result) => {
                setCurrentMatch(result);
                setIsCurrentlyInMatch(result?.id !== -1);
            });
        });
    };

    useEffect(() => {
        const getMatchData = async () => {
            if (getCurrentUsername()!) {
                const latestMatch = (
                    await fetchMatchHistory(getCurrentUsername()!, 0, 1)
                )[0];

                setIsMatchWon(latestMatch.resultStatus === "Win");

                if (latestMatch.resultPayout === 0) {
                    setPayout(latestMatch.bet);
                } else {
                    setPayout(latestMatch.resultPayout);
                }
            }
        };

        getMatchData();
    }, []);

    return (
        <div
            className="absolute w-full h-full bg-[#3c3939] 
                        bg-opacity-[0.8] rounded-[68px] z-[20]
                        flex justify-center items-center"
        >
            <div
                className="min-[1580px]:w-[89%] min-[790px]:w-[647px] w-[89%] 
                           h-[281px] UpDownDarkBlueBg rounded-[26px]
                           px-[21px] text-[25px] font-semibold"
            >
                <div className="popupTextGradient text-[25px] text-center mt-[52px] font-semibold">
                    {isMatchWon
                        ? t("congratsYouWonText")
                        : t("unfortunYouLost")}
                </div>
                <div className="flex space-x-[8px] justify-center items-center mt-[33px]">
                    <div
                        className={`${isMatchWon ? "text-[#57b14f]" : "text-[#de4747]"} 
                                    text-[25px] font-semibold leading-[20px]`}
                    >
                        {isMatchWon ? "+" : "-"} {payout}
                    </div>
                    <img
                        src={assets.images.inputFormCoin}
                        alt="input coin"
                        className="w-[24px] h-[24px]"
                    />
                </div>
                <div className="flex justify-center mt-[41px]">
                    <button
                        className="buttonGrayGradient w-[263px] h-[36px] rounded-[8px]
                               border-[1.3px] border-[#747474] hover:scale-[1.1]
                               transition-all duration-[0.3s] ease-in-out"
                        onClick={handleOnCollect}
                    >
                        <div className="popupTextGradient text-[20px] font-semibold">
                            {isMatchWon ? t("collect") : t("ok")}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CollectMatchRewardCard;
