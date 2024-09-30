import { useContext, useEffect } from "react";
import TradingViewWidget from "../game/tradingViewWidgets/TradingViewWidget";
import {
    ApplicationContext,
    GameCoice,
} from "../../context/ApplicationContext";
import BitcoinGradient from "../game/gradients/BitcoinGradient";
import EthereumGradient from "../game/gradients/EthereumGradient";
import TonGradient from "../game/gradients/TonGradient";
import GradientText from "../game/mainGameplayComponents/componenets/common/GradientText";
import { useTranslation } from "react-i18next";
import { assets } from "../../imagesImports/assets";
import { useNavigate } from "react-router-dom";

const TechnicalAnalysisGraph = () => {
    const { currentGame, setCurrentGame } = useContext(ApplicationContext)!;
    const { t } = useTranslation();
    const navigate = useNavigate();

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
            <GradientText
                className="min-[1535px]:hidden block 
                           text-center xl:text-[40px] md:text-[25px] text-[16px] font-semibold"
                text={t("makePredictionText")}
            />
            <div className="w-full h-[60vh] flex justify-center mt-[20px]">
                <div className="w-[90%] h-[100%] relative">
                    <TradingViewWidget />
                </div>
            </div>
            <div className="flex justify-center items-center mt-[62px]">
                <button
                    className="buttonGrayGradient rounded-[10px] border-[1px] border-[#747474]
                           w-[117px] h-[41px] text-[16px] text-[#a4a4a4] font-semibold
                           flex justify-between items-center px-[11px] hover:scale-[1.1] scale-[1]"
                    onClick={() => navigate(-1)}
                >
                    <img src={assets.icons.goBack} alt="go back icon" />
                    {t("goBack")}
                </button>
            </div>
        </>
    );
};

export default TechnicalAnalysisGraph;
