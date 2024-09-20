import { useContext } from "react";
import {
    ApplicationContext,
    GameCoice,
} from "../../../../../context/ApplicationContext";
import { assets } from "../../../../../imagesImports/assets";

const GradientQuestionMark = ({ className }: { className?: string }) => {
    const { currentGame } = useContext(ApplicationContext)!;

    return (
        <img
            src={
                currentGame === GameCoice.Btc
                    ? assets.icons.questionMark.bitcoin
                    : currentGame === GameCoice.Eth
                      ? assets.icons.questionMark.ethereum
                      : currentGame === GameCoice.Ton
                        ? assets.icons.questionMark.ton
                        : assets.icons.questionMark.bitcoin
            }
            alt="question mark"
            className={`${className} hover:cursor-pointer`}
        />
    );
};

export default GradientQuestionMark;
