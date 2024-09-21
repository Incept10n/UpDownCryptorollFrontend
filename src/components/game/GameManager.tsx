import { useContext, useEffect } from "react";
import BitcoinGradient from "./gradients/BitcoinGradient";
import {
    ApplicationContext,
    GameCoice,
} from "../../context/ApplicationContext";
import EthereumGradient from "./gradients/EthereumGradient";
import TonGradient from "./gradients/TonGradient";
import MainGameplay from "./mainGameplayComponents/MainGameplay";
import TradingViewWidget from "./tradingViewWidgets/TradingViewWidget";
import CardUpDownBackground from "./mainGameplayComponents/componenets/common/CardUpDownBackground";

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
                className="w-full h-100vh fixed top-[180px] left-[64px]
                           flex"
            >
                <div className="w-[767px] h-[703px]">
                    <TradingViewWidget />
                </div>
                <div className="w-[54%] ml-[33px] relative">
                    <MainGameplay />
                </div>
            </div>
            <CardUpDownBackground
                widthPx={750}
                heightPx={400}
                className="absolute left-[864px] top-[180px] z-[-10]"
            />
            <CardUpDownBackground
                widthPx={236}
                heightPx={400}
                className="absolute right-[64px] top-[180px] z-[-10]"
            />
        </>
    );
};

export default GameManager;
