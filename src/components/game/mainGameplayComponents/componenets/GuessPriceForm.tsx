import {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import { ApplicationContext } from "../../../../context/ApplicationContext";
import { useTranslation } from "react-i18next";
import { assets } from "../../../../imagesImports/assets";
import {
    MainFormValidationMistakes,
    PredictionValue,
    TimeframeChoice,
} from "../../../../types/HelperTypes";
import { useTonAddress, useTonWallet } from "@tonconnect/ui-react";
import { validateFormValues } from "../../../../helperFunctions/validationFunctions";
import {
    fetchPlayerInfo,
    fetchCurrentUserMatch,
    postMatch,
} from "../../../../helperFunctions/fetchFunctions";
import BetErrors from "./errors/BetErrors";
import PredictionTimeframeErrors from "./errors/PredictionTimeframeErrors";
import PredictionValueErrors from "./errors/PredictionValueErrors";
import WaitForMatchToFinish from "./mainFormComponents/WaitForMatchToFinish";
import BetInputField from "./mainFormComponents/BetInputField";
import GuessButton from "./mainFormComponents/GuessButton";
import TimeChoiceCard from "./mainFormComponents/TimeChoiceCard";
import GradientText from "./common/GradientText";
import { Match } from "../../../../types/Match";
import CollectMatchRewardCard from "./mainFormComponents/CollectMatchRewardCard";

const GuessPriceForm = ({
    livePrice,
    currentTimeframeChoice,
    setCurrentTimeframeChoice,
    betValue,
    setBetValue,
}: {
    livePrice: number;
    currentTimeframeChoice: TimeframeChoice;
    setCurrentTimeframeChoice: Dispatch<SetStateAction<TimeframeChoice>>;
    betValue: string;
    setBetValue: Dispatch<SetStateAction<string>>;
}) => {
    const {
        currentBalance,
        setCurrentBalance,
        currentGame,
        setDisplayTonConnectPopup,
    } = useContext(ApplicationContext)!;

    const [predictionValue, setpredictionValue] = useState<PredictionValue>(
        PredictionValue.None,
    );
    const [validationErrors, setValidationErrors] = useState<
        MainFormValidationMistakes[]
    >([]);

    const { t } = useTranslation();
    const wallet = useTonWallet();
    const walletAddress = useTonAddress(false);

    const [isCurrentlyInMatch, setIsCurrentlyInMatch] =
        useState<boolean>(false);
    const [currentMatch, setCurrentMatch] = useState<Match | null>(null);
    const [isLastMatchCollected, setIsLastMatchCollected] = useState(true);

    const submitForm = async () => {
        if (wallet === null) {
            setDisplayTonConnectPopup(true);
            return;
        }

        const validErrors = validateFormValues(
            currentBalance,
            Number.parseFloat(betValue),
            currentTimeframeChoice,
            predictionValue,
        );

        setValidationErrors(validErrors);

        if (validErrors.length !== 1) {
            return;
        }

        console.log(
            "the form is valid!, sending post request for match with 15 seconds timeframe as a text",
        );

        await postMatch(
            walletAddress,
            currentGame,
            Number.parseFloat(betValue),
            currentTimeframeChoice,
            predictionValue,
        );

        fetchPlayerInfo(walletAddress).then((result) => {
            if (result) {
                setCurrentBalance(result.currentBalance);
                setIsLastMatchCollected(result.isLastMatchCollected);
            }
        });
        fetchCurrentUserMatch(walletAddress).then((result) => {
            setCurrentMatch(result);
            setIsCurrentlyInMatch(result?.id !== -1);
        });

        console.log("post request to create match has been sent");
    };

    useEffect(() => {
        if (wallet) {
            fetchPlayerInfo(walletAddress).then((result) => {
                if (result) {
                    setCurrentBalance(result.currentBalance);
                    setIsLastMatchCollected(result.isLastMatchCollected);
                }
            });
            fetchCurrentUserMatch(walletAddress).then((result) => {
                setCurrentMatch(result);
                setIsCurrentlyInMatch(result?.id !== -1);
            });
        }
    }, [wallet]);

    return (
        <div className="w-[750px] h-[400px] rounded-[68px] relative">
            {isCurrentlyInMatch ? (
                <WaitForMatchToFinish
                    setCurrentMatch={setCurrentMatch}
                    setIsCurrentlyInMatch={setIsCurrentlyInMatch}
                    currentMatch={currentMatch}
                    livePrice={livePrice}
                />
            ) : !isLastMatchCollected ? (
                <CollectMatchRewardCard
                    setCurrentBalance={setCurrentBalance}
                    setIsLastMatchCollected={setIsLastMatchCollected}
                    setCurrentMatch={setCurrentMatch}
                    setIsCurrentlyInMatch={setIsCurrentlyInMatch}
                />
            ) : (
                ""
            )}
            <div className="p-[55px] space-y-[27px]">
                <div className="flex justify-between items-center relative">
                    <GradientText
                        text={t("iWantToBet")}
                        className="text-[40px] font-semibold"
                    />
                    <div className="relative">
                        <BetInputField
                            betValue={betValue}
                            setBetValue={setBetValue}
                        />
                        <BetErrors validationErrors={validationErrors} />
                    </div>
                    <GradientText
                        text={t("that")}
                        className="text-[40px] font-semibold"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <GradientText
                        text={t("btcPricein")}
                        className="text-[40px] font-semibold"
                    />
                    <div className="relative">
                        <TimeChoiceCard
                            currentTimeframeChoice={currentTimeframeChoice}
                            setCurrentTimeframeChoice={
                                setCurrentTimeframeChoice
                            }
                        />
                        <PredictionTimeframeErrors
                            validationErrors={validationErrors}
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <GradientText
                        text={t("willGo")}
                        className="text-[40px] font-semibold"
                    />
                    <div className="relative">
                        <div className="w-[347px] flex justify-between items-center">
                            <GuessButton
                                up
                                predictionValue={predictionValue}
                                setpredictionValue={setpredictionValue}
                            />
                            <GuessButton
                                down
                                predictionValue={predictionValue}
                                setpredictionValue={setpredictionValue}
                            />
                        </div>
                        <PredictionValueErrors
                            validationErrors={validationErrors}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button
                        className="w-[411px] h-[51px] bg-no-repeat bg-contain bg-center
                                   flex justify-center items-center hover:scale-[1.05] scale-[1]
                                   transition-all duration-[0.5] ease-in-out"
                        style={{
                            backgroundImage: `url(${assets.images.makePredictionBg})`,
                        }}
                        onClick={submitForm}
                    >
                        <GradientText
                            text={t("makePrediction")}
                            className="text-[25px] font-semibold"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GuessPriceForm;
