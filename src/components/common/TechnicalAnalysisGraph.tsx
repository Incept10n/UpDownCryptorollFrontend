import { useContext, useEffect } from "react";
import TradingViewWidget from "../game/tradingViewWidgets/TradingViewWidget";
import {
    ApplicationContext,
    GameCoice,
} from "../../context/ApplicationContext";
import BitcoinGradient from "../game/gradients/BitcoinGradient";
import EthereumGradient from "../game/gradients/EthereumGradient";
import TonGradient from "../game/gradients/TonGradient";

const TechnicalAnalysisGraph = () => {
    const { currentGame, setCurrentGame } = useContext(ApplicationContext)!;

    useEffect(() => {
        if (currentGame === GameCoice.None) {
            setCurrentGame(GameCoice.Btc);
        }
    }, []);

    return (
        <>
            <div className="fixed z-[-20]">
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
            <div className="w-[500px] h-[300px] relative mt-[20px]">
                <TradingViewWidget />
            </div>
        </>
    );
};

export default TechnicalAnalysisGraph;
