import { useContext, useEffect, useRef, useState } from "react";
import {
    ApplicationContext,
    GameCoice,
} from "../../../../../context/ApplicationContext";
import { assets } from "../../../../../imagesImports/assets";
import QuestionMarkPopup from "../livePriceComponents/QuestionMarkPopup";

const GradientQuestionMark = ({ className }: { className?: string }) => {
    const { currentGame } = useContext(ApplicationContext)!;
    const [displayPopup, setDisplayPopup] = useState(false);

    const questionMarkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOnClick = (ev: Event) => {
            if (!questionMarkRef.current?.contains(ev.target as Node)) {
                setDisplayPopup(false);
            }
        };

        window.addEventListener("click", handleOnClick);
    }, []);

    return (
        <div className="relative" ref={questionMarkRef}>
            <div
                className={`${displayPopup ? "opacity-100" : "opacity-0"} 
                            transition-all duration-[0.1s] ease-in-out z-[20] 
                            absolute bottom-0 left-0 
                            min-[1580px]:translate-x-[-70%] translate-x-[-18%]
                            translate-y-[-70%]`}
            >
                <QuestionMarkPopup />
            </div>
            <img
                src={
                    currentGame === GameCoice.Btc
                        ? assets.icons.questionMark.bitcoin
                        : currentGame === GameCoice.Eth
                          ? assets.icons.questionMark.ethereum
                          : currentGame === GameCoice.Ton
                            ? assets.icons.questionMark.ton
                            : assets.icons.questionMark.bitcoin
                }
                alt="question mark"
                className={`${className} hover:cursor-pointer`}
                onClick={() => setDisplayPopup((prevState) => !prevState)}
            />
        </div>
    );
};

export default GradientQuestionMark;
