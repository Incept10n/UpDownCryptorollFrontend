import { useTranslation } from "react-i18next";
import { assets } from "../../../../../imagesImports/assets";
import TimeRemainingCards from "./waitForMatchPopupComponents/TimeRemainingCards";
import { CurrentMatch } from "../../../../../types/CurrentMatch";
import {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import {
    ApplicationContext,
    GameCoice,
} from "../../../../../context/ApplicationContext";
import { PredictionValue } from "../../../../../types/HelperTypes";
import { CurrentClock } from "../../../../../types/CurrentClock";
import {
    fetchPlayerInfo,
    fetchCurrentUserMatch,
} from "../../../../../helperFunctions/fetchFunctions";
import { useTonAddress } from "@tonconnect/ui-react";

const WaitForMatchToFinish = ({
    currentMatch,
    setCurrentMatch,
    setIsCurrentlyInMatch,
}: {
    currentMatch: CurrentMatch | null;
    setCurrentMatch: Dispatch<SetStateAction<CurrentMatch | null>>;
    setIsCurrentlyInMatch: Dispatch<SetStateAction<boolean>>;
}) => {
    const { t } = useTranslation();

    const [currentBet, setCurrentBet] = useState<number>(0);
    const [currentCoin, setCurrentCoin] = useState<GameCoice>(GameCoice.None);
    const [currentPrediction, setCurrentPrediction] = useState<PredictionValue>(
        PredictionValue.None,
    );
    const [currentClock, setCurrentClock] = useState<CurrentClock | null>(null);

    const walletAddress = useTonAddress(false);

    const { setCurrentBalance } = useContext(ApplicationContext)!;

    useEffect(() => {
        let intervalId: number;

        if (currentMatch) {
            setCurrentBet(currentMatch.bet);
            switch (currentMatch.coin) {
                case "Btc":
                    setCurrentCoin(GameCoice.Btc);
                    break;
                case "Eth":
                    setCurrentCoin(GameCoice.Eth);
                    break;
                case "Ton":
                    setCurrentCoin(GameCoice.Ton);
                    break;
                default:
                    break;
            }
            setCurrentPrediction(
                currentMatch.prediction === "Up"
                    ? PredictionValue.Up
                    : PredictionValue.Down,
            );
            const initialClock = CurrentClock.fromTimeString(
                currentMatch.timeRemaining,
            );
            setCurrentClock(initialClock);

            intervalId = window.setInterval(() => {
                setCurrentClock((prevClock) => {
                    if (prevClock) {
                        prevClock.decrementByOneSecond();

                        if (prevClock.totalSeconds === 0) {
                            fetchPlayerInfo(walletAddress).then((result) => {
                                setCurrentBalance(result?.currentBalance);
                            });
                            fetchCurrentUserMatch(walletAddress).then(
                                (result) => {
                                    setCurrentMatch(result);
                                    setIsCurrentlyInMatch(result?.id !== -1);
                                },
                            );
                        }

                        return new CurrentClock(prevClock.totalSeconds);
                    }
                    return null;
                });
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [currentMatch]);

    return (
        <div
            className="absolute w-full h-full bg-[#3c3939] 
                        bg-opacity-[0.8] rounded-[68px] z-[20]
                        flex justify-center items-center"
        >
            <div
                className="w-[525px] h-[205px] UpDownDarkBlueBg rounded-[26px]
                           flex flex-col justify-start items-center 
                           text-[25px] font-semibold"
            >
                <div className="popupTextGradient text-center mt-[14px]">
                    {t("alreadyInMatch")}
                </div>
                <div className="flex justify-between items-center space-x-[13px] mt-[24px]">
                    <div className="flex justify-start items-center">
                        <div className="popupTextGradient">
                            {t("betAlreadyInMatch")}
                        </div>
                        <div className="flex justify-start items-center ml-[11px]">
                            <div className="bitcoinTextGradient">
                                {currentBet}
                            </div>
                            <img
                                src={assets.images.inputFormCoin}
                                alt="coin currency image"
                                className="w-[24px] h-[24px] ml-[10px]"
                            />
                        </div>
                    </div>
                    <div className="flex justify-start items-center">
                        <div className="popupTextGradient">
                            {t("coinAlreadyInMatch")}
                        </div>
                        <img
                            src={
                                currentCoin === GameCoice.Btc
                                    ? assets.icons.coins.btc
                                    : currentCoin === GameCoice.Eth
                                      ? assets.icons.coins.eth
                                      : currentCoin === GameCoice.Ton
                                        ? assets.icons.coins.ton
                                        : assets.icons.coins.btc
                            }
                            alt="btc coin"
                            className="ml-[5px]"
                        />
                    </div>
                    <div className="popupTextGradient flex justify-between items-center">
                        <div className="popupTextGradient">
                            {t("predictionAlreadyInMatch")}
                        </div>
                        <div
                            className={`w-[42px] h-[26px] bg-opacity-[0.72] ml-[6px]
                                       ${
                                           currentPrediction ===
                                           PredictionValue.Up
                                               ? "bg-[#CCF751]"
                                               : "bg-[#fd5254]"
                                       }
                                       rounded-tl-[100px] rounded-tr-[1000px] 
                                       rounded-bl-[1000px] rounded-br-[100px]
                                       flex justify-center items-center relative`}
                        >
                            <img
                                src={assets.icons.winLoseArrow}
                                alt="arrow"
                                className={`${
                                    currentPrediction === PredictionValue.Up
                                        ? "rotate-[0deg]"
                                        : "rotate-[180deg]"
                                } scale-[0.60] absolute top-[-7px]`}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="popupTextGradient flex justify-between items-center 
                                w-[382px] mt-[19px]"
                >
                    <div>{t("timeRemainingAlreadyInMatch")}</div>
                    {currentClock && (
                        <TimeRemainingCards currentClock={currentClock} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default WaitForMatchToFinish;
