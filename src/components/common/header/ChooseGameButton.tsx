import { useContext, useEffect, useRef, useState } from "react";
import { assets } from "../../../imagesImports/assets";
import ChooseGameExpandMenuItem from "./ChooseGameExpandMenuItem";
import {
    ApplicationContext,
    GameCoice,
} from "../../../context/ApplicationContext";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const ChooseGameButton = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { currentGame } = useContext(ApplicationContext)!;

    const [currentIcon, setCurrentIcon] = useState("");
    const [currentText, setCurrentText] = useState("");

    const divRef = useRef<HTMLDivElement>(null);

    const { t, i18n } = useTranslation();

    const location = useLocation();

    useEffect(() => {
        if (currentGame === GameCoice.None) {
            setCurrentIcon("");
            setCurrentText(t("chooseGame"));
        } else if (currentGame === GameCoice.Btc) {
            setCurrentIcon(assets.icons.coins.btc);
            setCurrentText(t("btc"));
        } else if (currentGame === GameCoice.Eth) {
            setCurrentIcon(assets.icons.coins.eth);
            setCurrentText(t("eth"));
        } else if (currentGame === GameCoice.Ton) {
            setCurrentIcon(assets.icons.coins.ton);
            setCurrentText(t("ton"));
        }

        const handleClickedOutside = (ev: Event) => {
            if (!divRef.current?.contains(ev.target as Node)) {
                setIsExpanded(false);
            }
        };

        window.addEventListener("click", handleClickedOutside);
    }, [currentGame, i18n.language]);

    return (
        <div
            ref={divRef}
            className={`${location.pathname === "/" && "hidden"}`}
        >
            <button
                className="md:w-[154px] md:h-[44px] w-[108px] h-[30px] 
                           flex justify-between items-center
                           bg-[#0D121D] bg-opacity-[0.69]
                           rounded-[9px] px-[10px]"
                onClick={() => setIsExpanded((prevState) => !prevState)}
            >
                <div className="flex justify-start items-center w-full">
                    {currentIcon !== "" && (
                        <img
                            src={currentIcon}
                            alt="coin"
                            className="md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
                        />
                    )}
                    <div
                        className={`upDownTextWhite md:text-[16px] text-[12px] text-left whitespace-nowrap
                                    ${
                                        currentGame !== GameCoice.None
                                            ? "md:ml-[10px] ml-[3px]"
                                            : "md:ml-[3px] ml-0"
                                    }`}
                    >
                        {currentText}
                    </div>
                </div>
                <img
                    src={assets.icons.arrowDown}
                    alt="arrow down"
                    className={`${isExpanded ? "rotate-[180deg]" : "rotate-0"}
                                 transition-all duration-[0.5] ease-in-out
                                 md:w-[17px] md:h-[11px] w-[10px] h-[6px]`}
                />
            </button>
            <div
                className={`bg-[#0D121D] md:w-[154px] w-[108px] z-[20]
                            overflow-hidden bg-opacity-[0.69] backdrop-blur 
                            rounded-[9px] absolute mt-[5px] flex flex-col
                            ${isExpanded ? "md:h-[155px] h-[128px]" : "h-[0px]"}
                            transition-all duration-[0.5] ease-in-out`}
                onClick={() => setIsExpanded(false)}
            >
                <ChooseGameExpandMenuItem
                    coinIcon={assets.icons.coins.btc}
                    coinName={t("btc")}
                />
                <ChooseGameExpandMenuItem
                    coinIcon={assets.icons.coins.eth}
                    coinName={t("eth")}
                />
                <ChooseGameExpandMenuItem
                    coinIcon={assets.icons.coins.ton}
                    coinName={t("ton")}
                    lastChild
                />
            </div>
        </div>
    );
};

export default ChooseGameButton;
