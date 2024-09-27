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
        setCurrentGame(GameCoice.Btc);
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
                className="absolute xl:pl-[64px] pl-0 top-[110px]
                           flex xl:justify-start justify-center w-full 
                           xl:pt-[70px] sm:pt-[40px] pt-[10px]"
            >
                <div
                    className="xl:w-[40%] h-[75vh] relative 
                               xl:block hidden mr-[54px]"
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
