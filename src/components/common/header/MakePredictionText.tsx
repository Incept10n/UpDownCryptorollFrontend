import { useContext } from "react";
import { useTranslation } from "react-i18next";
import {
    ApplicationContext,
    GameCoice,
} from "../../../context/ApplicationContext";

const MakePredictionText = () => {
    const { t } = useTranslation();
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
                        } text-[50px] font-semibold flex justify-center items-center`}
        >
            {t("makePredictionText")}
        </div>
    );
};

export default MakePredictionText;
