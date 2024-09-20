import { useContext } from "react";
import {
    ApplicationContext,
    GameCoice,
} from "../../../../../context/ApplicationContext";

const GradientText = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => {
    const { currentGame } = useContext(ApplicationContext)!;

    return (
        <div
            className={`
                        ${
                            currentGame === GameCoice.Btc
                                ? "bitcoinTextGradient"
                                : currentGame === GameCoice.Eth
                                  ? "ethereumTextGradient"
                                  : currentGame === GameCoice.Ton
                                    ? "tonTextGradient"
                                    : "hidden"
                        } 
                        ${className}`}
        >
            {text}
        </div>
    );
};

export default GradientText;
