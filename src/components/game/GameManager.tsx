import { useContext, useEffect } from "react";
import BitcoinGradient from "./gradients/BitcoinGradient";
import {
    ApplicationContext,
    GameCoice,
} from "../../context/ApplicationContext";
import EthereumGradient from "./gradients/EthereumGradient";
import TonGradient from "./gradients/TonGradient";
import TradingViewWidget from "./tradingViewWidgets/TradingViewWidget";
import MainGameplay from "./mainGameplayComponents/MainGameplay";

const GameManager = () => {
    const { currentGame, setCurrentGame } = useContext(ApplicationContext)!;

    useEffect(() => {
        setCurrentGame(GameCoice.Btc);
    }, []);

    return (
        <>
            <div>
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
                className="w-full h-100vh fixed top-[180px] left-[64px] z-[-10]
                           flex"
            >
                <div className="w-[767px] h-[703px]">
                    <TradingViewWidget />
                </div>
                <div className="w-[50%] ml-[33px]">
                    <MainGameplay />
                </div>
            </div>
        </>
    );
};

export default GameManager;
