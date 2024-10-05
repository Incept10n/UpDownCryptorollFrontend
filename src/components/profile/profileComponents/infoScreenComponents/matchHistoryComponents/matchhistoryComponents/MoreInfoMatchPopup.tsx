import { useContext } from "react";
import { GameCoice } from "../../../../../../context/ApplicationContext";
import { Converter } from "../../../../../../helperFunctions/Converter";
import { assets } from "../../../../../../imagesImports/assets";
import TextWithUnderlineInfo from "./TextWithUnderlineInfo";
import { MatchHistoryContext } from "../../../../../../context/MatchHistoryContext";
import { useTranslation } from "react-i18next";
import EntryInfo from "./EntryInfo";
import ExitInfo from "./ExitInfo";
import UpDownBean from "./UpDownBean";
import { TimeframeChoice } from "../../../../../../types/HelperTypes";
import Payout from "./Payout";
import WinLossBean from "./WinLossBean";

const MoreInfoMatchPopup = () => {
    const { setIsViewingMatch, currentMatch } =
        useContext(MatchHistoryContext)!;
    const { t } = useTranslation();

    const getCoinPicture = (coin: GameCoice) => {
        switch (coin) {
            case GameCoice.Btc:
                return assets.icons.coins.btc;
            case GameCoice.Eth:
                return assets.icons.coins.eth;
            case GameCoice.Ton:
                return assets.icons.coins.ton;
            case GameCoice.None:
                return assets.icons.coins.btc;
        }
    };

    const getTimeFrameText = () => {
        const currentMatchTimeFrame = Converter.getTimeFrameFromTime(
            currentMatch!.predictionTimeframe,
        );

        switch (currentMatchTimeFrame!) {
            case TimeframeChoice.Min30:
                return `30 ${t("minutes")}`;
            case TimeframeChoice.Hrs4:
                return `4 ${t("hours")}`;
            case TimeframeChoice.Hrs12:
                return `12 ${t("hours")}`;
            case TimeframeChoice.None:
                return `15 seconds`;
            default:
                return `15 seconds`;
        }
    };

    return (
        <div
            className={`w-full h-full rounded-t-[19px] overflow-hidden
                        UpDownDarkBlueBg 
                        border-t-[1px] border-t-[#a4a4a4]`}
        >
            <img
                src={assets.icons.whiteClosePopup}
                alt="close"
                className="absolute top-[20px] right-[20px] w-[40px] h-[40px]"
                onClick={() => setIsViewingMatch(false)}
            />
            <div className="flex justify-center mt-[12px]">
                <img
                    src={getCoinPicture(
                        Converter.getGameChoiceFromCoinString(
                            currentMatch!.coin,
                        ),
                    )}
                    alt="coin picture"
                    className="w-[56px] h-[56px]"
                />
            </div>
            <div className="w-full flex justify-around mt-[15px]">
                <EntryInfo />
                <ExitInfo />
            </div>
            <div
                className="absolute left-[50%] translate-x-[-50%] top-[210px]
                            flex flex-col items-center"
            >
                <UpDownBean
                    predictionValue={Converter.getPredictionValueFromString(
                        currentMatch!.predictionValue,
                    )}
                    className="w-[56px] h-[36px] "
                />
                <TextWithUnderlineInfo
                    text={getTimeFrameText()}
                    underlineInfo={t("historyPrediction")}
                />
            </div>
            <div
                className="absolute top-[340px] left-[50%] translate-x-[-50%] text-[1rem]
                           text-center rounded-[12px] w-[158px] h-[30px] leading-[1rem]
                           flex justify-center items-center
                           border-[1px] border-[#ccc3c3] upDownTextWhite"
            >
                {t("historyResult")}
            </div>
            <div className="absolute left-[50%] translate-x-[-50%] top-[420px]">
                <Payout
                    amount={
                        currentMatch!.resultPayout === 0
                            ? -currentMatch!.bet
                            : currentMatch!.resultPayout
                    }
                    className="text-[2rem]"
                    coinStyle="w-[38px] h-[38px] ml-[4px]"
                />
            </div>
            <div className="absolute left-[50%] translate-x-[-50%] top-[500px]">
                <WinLossBean
                    predictionStatus={Converter.getPredictionStatusFromString(
                        currentMatch!.resultStatus,
                    )}
                    className="w-[85px] h-[44px]"
                />
            </div>
        </div>
    );
};

export default MoreInfoMatchPopup;
