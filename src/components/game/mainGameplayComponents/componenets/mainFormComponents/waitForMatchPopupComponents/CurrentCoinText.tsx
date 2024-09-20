import { useTranslation } from "react-i18next";
import { GameCoice } from "../../../../../../context/ApplicationContext";
import { assets } from "../../../../../../imagesImports/assets";

const CurrentCoinText = ({ currentCoin }: { currentCoin: GameCoice }) => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-start items-center">
            <div className="popupTextGradient">{t("coinAlreadyInMatch")}</div>
            <img
                src={
                    currentCoin === GameCoice.Btc
                        ? assets.icons.coins.btc
                        : currentCoin === GameCoice.Eth
                          ? assets.icons.coins.eth
                          : currentCoin === GameCoice.Ton
                            ? assets.icons.coins.ton
                            : assets.icons.coins.btc
                }
                alt="btc coin"
                className="ml-[5px]"
            />
        </div>
    );
};

export default CurrentCoinText;
