import { useContext, useEffect, useRef, useState } from "react";
import { assets } from "../../../imagesImports/assets";
import ChooseGameExpandMenuItem from "./ChooseGameExpandMenuItem";
import {
    ApplicationContext,
    GameCoice,
} from "../../../context/ApplicationContext";
import { useTranslation } from "react-i18next";

const ChooseGameButton = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { currentGame } = useContext(ApplicationContext)!;

    const [currentIcon, setCurrentIcon] = useState("");
    const [currentText, setCurrentText] = useState("");

    const divRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();

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
    }, [currentGame]);

    return (
        <div ref={divRef}>
            <button
                className="w-[154px] h-[44px] flex justify-between items-center
                bg-[#0D121D] bg-opacity-[0.69]
                rounded-[9px] px-[10px]"
                onClick={() => setIsExpanded((prevState) => !prevState)}
            >
                <div className="flex justify-start items-center w-full">
                    {currentIcon !== "" && <img src={currentIcon} alt="coin" />}
                    <div className="upDownTextWhite text-[16px] w-full text-left ml-[10px]">
                        {currentText}
                    </div>
                </div>
                <img
                    src={assets.icons.arrowDown}
                    alt="arrow down"
                    className={`${isExpanded ? "rotate-[180deg]" : "rotate-0"}
                                 transition-all duration-[0.5] ease-in-out`}
                />
            </button>
            <div
                className={`bg-[#0D121D] w-[154px] overflow-hidden bg-opacity-[0.69] backdrop-blur 
                            rounded-[9px] absolute mt-[5px] flex flex-col
                            ${isExpanded ? "h-[155px]" : "h-[0px]"}
                            transition-all duration-[0.5] ease-in-out`}
                onClick={() => setIsExpanded(false)}
            >
                <ChooseGameExpandMenuItem
                    coinIcon={assets.icons.coins.btc}
                    coinName={"Bitcoin"}
                />
                <ChooseGameExpandMenuItem
                    coinIcon={assets.icons.coins.eth}
                    coinName={"Ethereum"}
                />
                <ChooseGameExpandMenuItem
                    coinIcon={assets.icons.coins.ton}
                    coinName={"TON"}
                    lastChild
                />
            </div>
        </div>
    );
};

export default ChooseGameButton;
