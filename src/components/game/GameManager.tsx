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
                <div className="w-[40%] h-[75vh] xl:block hidden">
                    <TradingViewWidget />
                </div>
                <div className="w-[54%] ml-[33px] relative">
                    {/* <MainGameplay /> */}
                </div>
            </div>
            <div className="z-[-20]">
                <GeneralLayout />
            </div>
        </>
    );
};

export default GameManager;
