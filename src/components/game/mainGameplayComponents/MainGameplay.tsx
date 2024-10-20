import { useContext, useEffect, useState } from "react";
import GuessPriceForm from "./componenets/GuessPriceForm";
import LivePrice from "./componenets/LivePrice";
import { ApplicationContext } from "../../../context/ApplicationContext";
import {
    fetchCurrentPrice,
    fetchPlayerInfo,
} from "../../../helperFunctions/fetchFunctions";
import { TimeframeChoice } from "../../../types/HelperTypes";
import { useTonAddress } from "@tonconnect/ui-react";
import { Calculator } from "../../../helperFunctions/Calculator";
import Multipliers from "./componenets/Multipliers";
import DoTechicalAnalysisButton from "../tradingViewWidgets/DoTechicalAnalysisButton";

const MainGameplay = () => {
    const { currentGame } = useContext(ApplicationContext)!;
    const [livePrice, setLivePrice] = useState<number>(-1);
    const walletAddress = useTonAddress(false);
    const [userLoginStreak, setUserLoginStreak] = useState(1);
    const [profit, setProfit] = useState(0);

    const [currentTimeframeChoice, setCurrentTimeframeChoice] =
        useState<TimeframeChoice>(TimeframeChoice.None);
    const [betValue, setBetValue] = useState("");

    const [isCurrentlyInMatch, setIsCurrentlyInMatch] =
        useState<boolean>(false);
    const [isLastMatchCollected, setIsLastMatchCollected] =
        useState<boolean>(true);

    useEffect(() => {
        const getUserLoginStreak = async () => {
            const userInfo = await fetchPlayerInfo(walletAddress);

            if (userInfo) {
                setUserLoginStreak(userInfo.loginStreakCount);
            }
        };

        getUserLoginStreak();
    }, []);

    useEffect(() => {
        const getLivePrice = async () => {
            const fetchedPrice = await fetchCurrentPrice(currentGame);
            setLivePrice(fetchedPrice);
        };

        const intervalId = window.setInterval(getLivePrice, 500);

        return () => {
            window.clearInterval(intervalId);
        };
    }, [currentGame]);

    useEffect(() => {
        const totalMultiplier =
            Calculator.getMultiplierFromTimeframeAndLoginStreak(
                currentTimeframeChoice,
                userLoginStreak,
            );

        if (!Number.isNaN(Number.parseFloat(betValue))) {
            setProfit(Number.parseFloat(betValue) * totalMultiplier);
        } else {
            setProfit(0);
        }
    }, [betValue, currentTimeframeChoice, userLoginStreak]);

    return (
        <div
            className="min-[1580px]:w-[51%] w-[90%] min-[1580px]:ml-[33px] ml-0 relative
                       flex flex-col"
        >
            <div
                className="flex min-[1580px]:flex-row min-[1580px]:justify-start 
                                   flex-col justify-center"
            >
                <GuessPriceForm
                    livePrice={livePrice}
                    currentTimeframeChoice={currentTimeframeChoice}
                    setCurrentTimeframeChoice={setCurrentTimeframeChoice}
                    betValue={betValue}
                    setBetValue={setBetValue}
                    isCurrentlyInMatch={isCurrentlyInMatch}
                    setIsCurrentlyInMatch={setIsCurrentlyInMatch}
                    isLastMatchCollected={isLastMatchCollected}
                    setIsLastMatchCollected={setIsLastMatchCollected}
                />
                <div
                    className="flex lg:flex-row flex-col-reverse lg:justify-between items-center
                                        space-x-[20px]"
                >
                    <LivePrice
                        livePrice={livePrice}
                        profit={profit}
                        isCurrentlyInMatch={isCurrentlyInMatch}
                    />
                    <Multipliers
                        userLoginStreak={userLoginStreak}
                        currentTimeframeChoice={currentTimeframeChoice}
                        isCurrentlyInMatch={isCurrentlyInMatch}
                        isLastMatchCollected={isLastMatchCollected}
                        className="w-[75%] lg:h-[60%] h-[150px] lg:mt-0 md:mt-[30px] mt-[0]
                                   min-[1580px]:hidden flex justify-center 
                                   min-[1580px]:scale-100 scale-[0.86]"
                    />
                    <div
                        className="min-[1580px]:hidden min-[1400px]:flex hidden w-full h-full
                                   justify-center items-center mt-[44px]"
                    >
                        <DoTechicalAnalysisButton />
                    </div>
                </div>
            </div>
            <Multipliers
                userLoginStreak={userLoginStreak}
                currentTimeframeChoice={currentTimeframeChoice}
                isCurrentlyInMatch={isCurrentlyInMatch}
                isLastMatchCollected={isLastMatchCollected}
                className="w-[68%] h-[150px] ml-[40px] mt-[8px] 
                           min-[1580px]:block hidden"
            />
            <div
                className="min-[1400px]:hidden flex w-full h-full
                           justify-center items-center my-[44px]"
            >
                <DoTechicalAnalysisButton />
            </div>
        </div>
    );
};

export default MainGameplay;
