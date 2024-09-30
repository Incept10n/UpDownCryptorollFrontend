import { useContext, useEffect } from "react";
import BitcoinGradient from "./gradients/BitcoinGradient";
import {
    ApplicationContext,
    GameCoice,
} from "../../context/ApplicationContext";
import EthereumGradient from "./gradients/EthereumGradient";
import TonGradient from "./gradients/TonGradient";
import TradingViewWidget from "./tradingViewWidgets/TradingViewWidget";
import GeneralLayout from "./GeneralLayout";
import MainGameplay from "./mainGameplayComponents/MainGameplay";

const GameManager = () => {
    const { currentGame, setCurrentGame } = useContext(ApplicationContext)!;

    useEffect(() => {
        if (currentGame === GameCoice.None) {
            setCurrentGame(GameCoice.Btc);
        }
    }, []);

    return (
        <>
            <div className="fixed z-[-5]">
                {currentGame === GameCoice.Btc ? (
                    <BitcoinGradient />
                ) : currentGame === GameCoice.Eth ? (
                    <EthereumGradient />
                ) : currentGame === GameCoice.Ton ? (
                    <TonGradient />
                ) : (
                    <div />
                )}
            </div>
            <div
                className="absolute min-[1580px]:pl-[64px] pl-0 top-[110px]
                           flex min-[1580px]:justify-start justify-center w-full 
                           min-[1580px]:pt-[70px] sm:pt-[40px] pt-[10px]"
            >
                <div
                    className="min-[1580px]:w-[40%] h-[75vh] relative 
                               min-[1580px]:block hidden mr-[54px]"
                >
                    <TradingViewWidget />
                </div>
                <MainGameplay />
            </div>
            <div className="z-[-20]">
                <GeneralLayout />
            </div>
        </>
    );
};

export default GameManager;
