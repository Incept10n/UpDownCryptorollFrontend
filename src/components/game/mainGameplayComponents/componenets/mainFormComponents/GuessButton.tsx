import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PredictionValue } from "../../../../../types/HelperTypes";
import { assets } from "../../../../../imagesImports/assets";

const GuessButton = ({
    predictionValue,
    setpredictionValue,
    up,
    down,
    className,
}: {
    predictionValue: PredictionValue;
    setpredictionValue: Dispatch<SetStateAction<PredictionValue>>;
    up?: boolean;
    down?: boolean;
    className?: string;
}) => {
    const { t } = useTranslation();

    const [currentText, setCurrentText] = useState("");
    const [currentBgColor, setCurrentBgColor] = useState("");
    const [scaleUp, setScaleUp] = useState(false);

    useEffect(() => {
        if (up) {
            setCurrentText(t("up"));
            setCurrentBgColor("bg-[#ccf751]");
        } else if (down) {
            setCurrentText(t("down"));
            setCurrentBgColor("bg-[#fd5254]");
        }
    }, []);

    const handleOnClick = () => {
        if (up) {
            setpredictionValue(PredictionValue.Up);
        } else if (down) {
            setpredictionValue(PredictionValue.Down);
        }
    };

    const setScaleBasedOnChoice = () => {
        if (
            (up && predictionValue === PredictionValue.Up) ||
            (down && predictionValue === PredictionValue.Down)
        ) {
            setScaleUp(true);
        } else {
            setScaleUp(false);
        }
    };

    useEffect(() => {
        setScaleBasedOnChoice();
    }, [predictionValue]);

    return (
        <button
            className={`w-[155px] h-[44px] bg-opacity-[42%] ${currentBgColor}
                        rounded-tl-[100px] rounded-tr-[1000px] 
                        rounded-br-[100px] rounded-bl-[1000px]
                        flex justify-between items-center
                        ${scaleUp ? "scale-[1.1]" : "scale-[1]"}
                        transition-all duration-[0.5] ease-in-out
                        ${className}`}
            onClick={handleOnClick}
        >
            <div
                className={`bg-opacity-[0.42] w-[69px] h-[44px] ${currentBgColor}
                                       rounded-tl-[100px] rounded-tr-[1000px]
                                       rounded-br-[100px] rounded-bl-[1000px]
                                       relative`}
            >
                <img
                    src={assets.icons.winLoseArrow}
                    alt="win/lose arrow"
                    className={`absolute  
                                ${
                                    up
                                        ? "rotate-[0deg] left-[17px] top-[5px]"
                                        : "rotate-[180deg] left-[19px] top-[0px]"
                                }`}
                />
            </div>
            <div
                className={`${up ? "mr-[39px]" : "mr-[23px]"} text-[20px] font-semibold`}
            >
                {currentText}
            </div>
        </button>
    );
};

export default GuessButton;
