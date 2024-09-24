import { useTranslation } from "react-i18next";
import { Calculator } from "../../../../helperFunctions/Calculator";
import { TimeframeChoice } from "../../../../types/HelperTypes";
import MultiplierCard from "./multipliersComponents/MultiplierCard";

const Multipliers = ({
    userLoginStreak,
    currentTimeframeChoice,
    isCurrentlyInMatch,
    isLastMatchCollected,
}: {
    userLoginStreak: number;
    currentTimeframeChoice: TimeframeChoice;
    isCurrentlyInMatch: boolean;
    isLastMatchCollected: boolean;
}) => {
    const { t } = useTranslation();

    const getTextBasedOnCurrentTimeframeChoice = () => {
        switch (currentTimeframeChoice) {
            case TimeframeChoice.None:
                return t("noChoiceMulti");
            case TimeframeChoice.Min30:
                return `30 ${t("minutes")} ${t("betMultiText")}`;
            case TimeframeChoice.Hrs4:
                return `4 ${t("hours")} ${t("betMultiText")}`;
            case TimeframeChoice.Hrs12:
                return `12 ${t("hours")} ${t("betMultiText")}`;
            default:
                return t("noChoiceMulti");
        }
    };

    return (
        <div className="w-[742px] h-[391px] flex justify-center relative">
            {(isCurrentlyInMatch || !isLastMatchCollected) && (
                <div
                    className="absolute z-[20] w-[654px] h-[157px]
                           left-[50%] top-0 translate-x-[-50%]
                           multipliersPolygon bg-[#3c3939] bg-opacity-[0.8]"
                ></div>
            )}
            <div
                className="multipliersPolygon bg-[#d9d9d9] bg-opacity-[0.09] 
                           w-[654px] h-[157px] 
                           flex justify-center items-start pt-[14px] space-x-[52px]"
            >
                <MultiplierCard
                    multiplier={Calculator.getMultiplierFromLoginStreak(
                        userLoginStreak,
                    )}
                    text={`${userLoginStreak} ${t("daysStreakMultText")}`}
                />
                <MultiplierCard
                    multiplier={Calculator.getMultiplierFromTimeframe(
                        currentTimeframeChoice,
                    )}
                    text={getTextBasedOnCurrentTimeframeChoice()}
                />
            </div>
        </div>
    );
};

export default Multipliers;
