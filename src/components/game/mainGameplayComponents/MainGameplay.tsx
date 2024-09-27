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
    }, [betValue, currentTimeframeChoice]);

    return (
        <div
            className="xl:w-[52%] w-[90%] xl:ml-[33px] ml-0 relative
                       flex flex-col"
        >
            <div
                className="flex xl:flex-row xl:justify-start 
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
                <LivePrice livePrice={livePrice} profit={profit} />
            </div>
            <Multipliers
                userLoginStreak={userLoginStreak}
                currentTimeframeChoice={currentTimeframeChoice}
                isCurrentlyInMatch={isCurrentlyInMatch}
                isLastMatchCollected={isLastMatchCollected}
            />
        </div>
    );
};

export default MainGameplay;
