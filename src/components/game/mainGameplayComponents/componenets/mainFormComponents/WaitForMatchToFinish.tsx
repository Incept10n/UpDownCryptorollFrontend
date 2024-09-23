import { useTranslation } from "react-i18next";
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
import CurrentMatchTextWithMoney from "./waitForMatchPopupComponents/CurrentMatchTextWithMoney";
import CurrentCoinText from "./waitForMatchPopupComponents/CurrentCoinText";
import CurrentPredictionText from "./waitForMatchPopupComponents/CurrentPredictionText";
import EntryPriceText from "./EntryPriceText";

const WaitForMatchToFinish = ({
    currentMatch,
    setCurrentMatch,
    setIsCurrentlyInMatch,
    livePrice,
}: {
    currentMatch: CurrentMatch | null;
    setCurrentMatch: Dispatch<SetStateAction<CurrentMatch | null>>;
    setIsCurrentlyInMatch: Dispatch<SetStateAction<boolean>>;
    livePrice: number;
}) => {
    const { t } = useTranslation();

    const calculateDeviationFromCurrentPrice = () => {
        return -(1 - livePrice / currentEntryPrice) * 10;
    };

    const [currentBet, setCurrentBet] = useState<number>(0);
    const [currentCoin, setCurrentCoin] = useState<GameCoice>(GameCoice.None);
    const [currentPrediction, setCurrentPrediction] = useState<PredictionValue>(
        PredictionValue.None,
    );
    const [currentClock, setCurrentClock] = useState<CurrentClock | null>(null);
    const [currentWinningMultiplier, setCurrentWinningMultiplier] = useState(1);
    const [currentEntryPrice, setCurrentEntryPrice] = useState(0);
    const [isCurrentlyWinning, setIsCurrentlyWinning] = useState(true);
    const [currentDeviationFromEntryPrice, setCurrentDeviationFromEntryPrice] =
        useState(() => calculateDeviationFromCurrentPrice());

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
            setCurrentWinningMultiplier(currentMatch.winningMultiplier);
            setCurrentEntryPrice(currentMatch.entryPrice);

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
                                if (result) {
                                    setCurrentBalance(result.currentBalance);
                                }
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

    useEffect(() => {
        if (currentEntryPrice && currentPrediction) {
            if (currentPrediction === PredictionValue.Up) {
                setIsCurrentlyWinning(livePrice > currentEntryPrice);
            } else if (currentPrediction === PredictionValue.Down) {
                setIsCurrentlyWinning(livePrice < currentEntryPrice);
            }
        }

        setCurrentDeviationFromEntryPrice(() =>
            calculateDeviationFromCurrentPrice(),
        );
    }, [livePrice]);

    return (
        <div
            className="absolute w-full h-full bg-[#3c3939] 
                        bg-opacity-[0.8] rounded-[68px] z-[20]
                        flex justify-center items-center"
        >
            <div
                className="w-[647px] h-[281px] UpDownDarkBlueBg rounded-[26px]
                           px-[21px] text-[25px] font-semibold"
            >
                <div
                    className="text-[22px] text-[#ccc3c3] opacity-[0.5] 
                                font-light text-center my-[5px]"
                >
                    {t("alreadyInMatch")}
                </div>
                <div className="flex justify-between items-start ">
                    <div>
                        <CurrentMatchTextWithMoney
                            text={t("betAlreadyInMatch")}
                            amountOfMoney={currentBet}
                        />
                        <CurrentMatchTextWithMoney
                            text={t("ifYouLoseAlreadyInMatch")}
                            amountOfMoney={-currentBet}
                        />
                        <CurrentMatchTextWithMoney
                            text={t("ifYouWinAlreadyInMatch")}
                            addPlus
                            amountOfMoney={
                                currentBet * currentWinningMultiplier
                            }
                        />
                        <CurrentCoinText currentCoin={currentCoin} />
                        <CurrentPredictionText
                            currentPrediction={currentPrediction}
                        />
                        <EntryPriceText entryPrice={currentEntryPrice} />
                    </div>
                    <div className="w-auto flex flex-col items-end">
                        <div className="popupTextGradient flex justify-end items-center">
                            {currentClock && (
                                <TimeRemainingCards
                                    currentClock={currentClock}
                                />
                            )}
                        </div>
                        <div className="text-[25px] popupTextGradient mr-[2px] mt-[27px]">
                            {t("youAreCurrently")}
                        </div>
                        {isCurrentlyWinning ? (
                            <div className="text-[25px] text-[#72b83b] mt-[7px]">
                                {t("winning")}
                            </div>
                        ) : (
                            <div className="text-[25px] text-[#de4747] mt-[7px]">
                                {t("losing")}
                            </div>
                        )}
                        <div
                            className="text-[25px] text-[#72b83b] mt-[7px]"
                            style={{
                                color: isCurrentlyWinning
                                    ? "#72b83b"
                                    : "#de4747",
                            }}
                        >
                            ({currentDeviationFromEntryPrice.toFixed(5)}%{" "}
                            {t("fromEntry")})
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitForMatchToFinish;
