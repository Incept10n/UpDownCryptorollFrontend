import { useContext } from "react";
import { assets } from "../../../../../imagesImports/assets";
import {
    ApplicationContext,
    GameCoice,
} from "../../../../../context/ApplicationContext";

const GradientDollarSign = ({ className }: { className?: string }) => {
    const { currentGame } = useContext(ApplicationContext)!;

    return (
        <img
            src={
                currentGame === GameCoice.Btc
                    ? assets.icons.livePriceDollarSign.bitcoin
                    : currentGame === GameCoice.Eth
                      ? assets.icons.livePriceDollarSign.ethereum
                      : currentGame === GameCoice.Ton
                        ? assets.icons.livePriceDollarSign.ton
                        : assets.icons.livePriceDollarSign.bitcoin
            }
            alt="dollar sign"
        />
    );
};

export default GradientDollarSign;
