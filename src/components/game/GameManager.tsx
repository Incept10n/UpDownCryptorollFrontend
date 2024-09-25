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
import DoTechicalAnalysisButton from "./tradingViewWidgets/DoTechicalAnalysisButton";

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
                    <MainGameplay />
                </div>
            </div>
            <div
                className="absolute xl:pl-[64px] pl-0 top-[110px]
                           flex xl:justify-start justify-center w-full 
                           xl:pt-[70px] sm:pt-[40px] pt-[10px] z-[-20]"
            >
                <div
                    className="xl:w-[40%] h-[75vh] relative 
                               xl:block hidden z-[-20] mr-[54px]"
                />
                <div
                    className="xl:w-[52%] w-[90%] xl:ml-[33px] ml-0 relative
                                flex xl:flex-row xl:justify-start flex-col justify-center"
                >
                    <CardUpDownBackground className="z-[-10] w-[100%] md:h-[400px] h-[250px]" />
                    <div className="flex sm:flex-row flex-col">
                        <CardUpDownBackground
                            className="z-[-10] ml-[14px] xl:mt-[0] mt-[21px]
                                   xl:w-[236px] w-[335px] xl:h-[400px] h-[147px] flex-none"
                        />
                        <div className="flex justify-center items-center w-full">
                            <DoTechicalAnalysisButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GameManager;
