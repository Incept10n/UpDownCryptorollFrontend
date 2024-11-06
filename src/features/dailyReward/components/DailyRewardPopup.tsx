import { useContext, useEffect, useState } from "react";
import PopupBackground from "../../../components/common/PopupBackground";
import {
    getCurrentUsername,
    isUserLoggedIn,
} from "../../../helperFunctions/jwtTokenFuncions";
import {
    fetchCollectReward,
    fetchDailyRewardStatus,
} from "../services/fetchFuncions";
import PopupText from "../../../components/common/PopupText";
import { useTranslation } from "react-i18next";
import PopupLogo from "../../../components/common/PopupLogo";
import PayoutMessage from "./PayoutMessage";
import PopupButton from "../../../components/game/mainGameplayComponents/componenets/common/PopupButton";
import DayCard from "./DayCard";
import { calculateRewardValue } from "../utils/calculateRewardValue";
import "../styles/dailyRewardStyle.css";
import ShieldPopupBackground from "./ShieldPopupBackground";
import LoadingIcon from "../../../components/common/LoadingIcon";
import { ApplicationContext } from "../../../context/ApplicationContext";
import { fetchPlayerInfo } from "../../../helperFunctions/fetchFunctions";

const DailyRewardPopup = () => {
    const [displayDailyRewardPopup, setDisplayDailyRewardPopup] =
        useState(false);

    const { setCurrentBalance } = useContext(ApplicationContext)!;

    const [rewartValue, setRewartValue] = useState(0);
    const [currentLoginStreak, setCurrentLoginStreak] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const { t } = useTranslation();

    const decideWhetherToDisplayPopup = async () => {
        if (isUserLoggedIn()) {
            const result = await fetchDailyRewardStatus(getCurrentUsername()!);

            if (!result.isRewardCollected) {
                setDisplayDailyRewardPopup(true);
                setRewartValue(calculateRewardValue(result.loginStreakCount));
                setCurrentLoginStreak(result.loginStreakCount);
            } else {
                setDisplayDailyRewardPopup(false);
            }
        }
    };

    const handleOnCollect = () => {
        setIsLoading(true);

        fetchCollectReward(getCurrentUsername()!).then(() => {
            setIsLoading(false);
            decideWhetherToDisplayPopup().then(() => {
                fetchPlayerInfo(getCurrentUsername()!).then((user) => {
                    setCurrentBalance(user!.currentBalance);
                });
            });
        });
    };

    useEffect(() => {
        decideWhetherToDisplayPopup();
    }, [getCurrentUsername(), isUserLoggedIn()]);

    return (
        <div
            className={`popupBackground w-full h-full fixed top-0 left-0 overflow-hidden
                            flex justify-center items-center 
                            ${!displayDailyRewardPopup ? "opacity-0 z-[-20]" : "opacity-100 z-[20]"}
                            transition-all duration-[0.5] ease-in-out`}
        >
            <ShieldPopupBackground
                className="sm:w-[387px] sm:height-[417px] 
                           w-[325px] h-[320px]"
            >
                <div className="left-[50%] -translate-x-1/2 sm:top-[-100px] top-[-100px] absolute">
                    <PopupLogo className="sm:w-[82px] sm:h-[82px] w-[72px] h-[72px]" />
                </div>
                <PopupText
                    text={t("dailyReward")}
                    className="sm:text-[2.25rem] text-[1.6rem]"
                />
                <div className="mt-[52px]">
                    <PayoutMessage
                        payout={rewartValue}
                        fontSize="1.5rem"
                        lineHeight="1.5rem"
                    />
                </div>
                <div className="w-full flex justify-center mt-[52px]">
                    {isLoading ? (
                        <LoadingIcon
                            width="40px"
                            height="40px"
                            borderWidth="7px"
                        />
                    ) : (
                        <PopupButton
                            text={t("collect")}
                            fontSize="1.25rem"
                            width="174px"
                            height="36px"
                            onClick={handleOnCollect}
                        />
                    )}
                </div>
                <div className="w-full sm:flex hidden justify-center mt-[58px]">
                    <DayCard dayNumber={currentLoginStreak} />
                </div>
            </ShieldPopupBackground>
        </div>
    );
};

export default DailyRewardPopup;
