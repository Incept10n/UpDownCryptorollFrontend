import { useTranslation } from "react-i18next";
import { Calculator } from "../../../../helperFunctions/Calculator";
import { TimeframeChoice } from "../../../../types/HelperTypes";
import MultiplierCard from "./multipliersComponents/MultiplierCard";

const Multipliers = ({
    userLoginStreak,
    currentTimeframeChoice,
    isCurrentlyInMatch,
    isLastMatchCollected,
    className,
}: {
    userLoginStreak: number;
    currentTimeframeChoice: TimeframeChoice;
    isCurrentlyInMatch: boolean;
    isLastMatchCollected: boolean;
    className?: string;
}) => {
    const { t } = useTranslation();

    const getTextBasedOnCurrentTimeframeChoice = () => {
        const noChoiceText =
            window.innerWidth >= 640
                ? t("noChoiceMulti")
                : t("noChoiceMultiMobile");
        const betMultiText =
            window.innerWidth >= 640
                ? t("betMultiText")
                : t("betMultiTextMobile");

        switch (currentTimeframeChoice) {
            case TimeframeChoice.None:
                return noChoiceText;
            case TimeframeChoice.Min30:
                return `30 ${t("minutes")} ${betMultiText}`;
            case TimeframeChoice.Hrs4:
                return `4 ${t("hours")} ${betMultiText}`;
            case TimeframeChoice.Hrs12:
                return `12 ${t("hours")} ${betMultiText}`;
            default:
                return t("noChoiceMulti");
        }
    };

    return (
        <div className={`${className}`}>
            {(isCurrentlyInMatch || !isLastMatchCollected) && (
                <div
                    className="absolute z-[20] multipliersPolygon lg:bg-[#3c3939] lg:bg-opacity-[0.8]
                               lg:block hidden
                               w-[654px] h-[157px] justify-center 
                               items-start pt-[14px] space-x-[52px]"
                ></div>
            )}
            <div
                className="flex multipliersPolygon lg:bg-[#d9d9d9]
                           lg:bg-opacity-[0.09] w-[654px] h-[157px] justify-center 
                            items-start pt-[14px] space-x-[52px]"
            >
                <MultiplierCard
                    multiplier={Calculator.getMultiplierFromLoginStreak(
                        userLoginStreak,
                    )}
                    text={`${userLoginStreak} ${
                        window.innerWidth >= 640
                            ? t("daysStreakMultText")
                            : t("daysStreakMultTextMobile")
                    }`}
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
