import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TimeframeChoice } from "../../../../../types/HelperTypes";
import GradientText from "../common/GradientText";

const TimeChoiceCard = ({
    currentTimeframeChoice,
    setCurrentTimeframeChoice,
}: {
    currentTimeframeChoice: TimeframeChoice;
    setCurrentTimeframeChoice: Dispatch<SetStateAction<TimeframeChoice>>;
}) => {
    const { t, i18n } = useTranslation();

    const [currentChoiceBoxStyle, setCurrentChoiceBoxStyle] =
        useState("hidden");

    useEffect(() => {
        setCurrentTimeframeChoice(TimeframeChoice.None);
    }, []);

    useEffect(() => {
        switch (currentTimeframeChoice) {
            case TimeframeChoice.Min30:
                if (i18n.language === "en") {
                    setCurrentChoiceBoxStyle("left-0 top-0 w-[130px]");
                } else {
                    setCurrentChoiceBoxStyle("left-0 top-0 w-[120px]");
                }
                break;
            case TimeframeChoice.Hrs4:
                if (i18n.language === "en") {
                    setCurrentChoiceBoxStyle("left-[130px] top-0 w-[95px]");
                } else {
                    setCurrentChoiceBoxStyle("left-[120px] top-0 w-[95px]");
                }
                break;
            case TimeframeChoice.Hrs12:
                setCurrentChoiceBoxStyle("left-[225px] top-0 w-[110px]");
                break;
            default:
                setCurrentChoiceBoxStyle("w-[0px]");
                break;
        }
    }, [currentTimeframeChoice]);

    return (
        <div
            className="w-[332px] h-[48px] buttonGrayGradient sm:rounded-[14px] rounded-full
                       border-[1px] border-[#747474] border-opacity-[0.75]
                       flex justify-around items-center
                       text-[20px] font-semibold relative overflow-hidden
                       "
        >
            <div
                className={`buttonGrayGradient sm:rounded-[14px] rounded-full
                           h-full z-0 
                           absolute ${currentChoiceBoxStyle}
                           transition-all duration-[0.5] ease-in-out`}
            />
            <button
                className="z-10"
                onClick={() => setCurrentTimeframeChoice(TimeframeChoice.Min30)}
            >
                <GradientText text={`30 ${t("minutes")}`} />
            </button>
            <button
                className="z-10"
                onClick={() => setCurrentTimeframeChoice(TimeframeChoice.Hrs4)}
            >
                <GradientText text={`4 ${t("hours")}`} />
            </button>
            <button
                className="z-10"
                onClick={() => setCurrentTimeframeChoice(TimeframeChoice.Hrs12)}
            >
                <GradientText text={`12 ${t("hours")}`} />
            </button>
        </div>
    );
};

export default TimeChoiceCard;
