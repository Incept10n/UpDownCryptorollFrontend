import { useContext } from "react";
import BitcoinGradient from "./gradients/BitcoinGradient";
import {
    ApplicationContext,
    GameCoice,
} from "../../context/ApplicationContext";
import EthereumGradient from "./gradients/EthereumGradient";
import TonGradient from "./gradients/TonGradient";

const GameManager = () => {
    const { currentGame } = useContext(ApplicationContext)!;

    return (
        <div className="overflow-hidden">
            {currentGame === GameCoice.Btc ? (
                <BitcoinGradient />
            ) : currentGame === GameCoice.Eth ? (
                <EthereumGradient />
            ) : currentGame === GameCoice.Ton ? (
                <TonGradient />
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default GameManager;
