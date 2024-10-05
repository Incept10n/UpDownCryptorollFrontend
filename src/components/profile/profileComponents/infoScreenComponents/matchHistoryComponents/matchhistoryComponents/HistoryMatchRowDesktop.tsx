import { MatchHistoryItem } from "../../../../../../types/MatchHistoryItem";
import { GameCoice } from "../../../../../../context/ApplicationContext";
import { assets } from "../../../../../../imagesImports/assets";
import HistoryItemContainer from "./HistoryItemContainer";
import { Converter } from "../../../../../../helperFunctions/Converter";
import UpDownBean from "./UpDownBean";
import Payout from "./Payout";
import WinLossBean from "./WinLossBean";
import { Formatter } from "../../../../../../helperFunctions/Formater";
import { TimeframeChoice } from "../../../../../../types/HelperTypes";
import { useTranslation } from "react-i18next";

const HistoryMatchRowDesktop = ({ match }: { match: MatchHistoryItem }) => {
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
            match.predictionTimeframe,
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
        <>
            <HistoryItemContainer>
                <img
                    src={getCoinPicture(
                        Converter.getGameChoiceFromCoinString(match.coin),
                    )}
                    alt="predicted coin picture"
                    className="w-[36px] h-[36px]"
                />
            </HistoryItemContainer>
            <HistoryItemContainer>
                <div className="text-[1.3rem] font-semibold upDownTextWhite max-w-[86px]">
                    {Formatter.extractDateFromDateTimeString(
                        match.entryTime,
                        true,
                    )}
                </div>
            </HistoryItemContainer>
            <HistoryItemContainer>
                <div className="text-[1.3rem] font-semibold upDownTextWhite">
                    {Formatter.extractTimeFromDateTimeString(match.entryTime)}
                </div>
            </HistoryItemContainer>
            <HistoryItemContainer>
                <div className="text-[1.3rem] font-semibold upDownTextWhite">
                    {Formatter.formatMoney(match.entryPrice)}
                </div>
            </HistoryItemContainer>
            <HistoryItemContainer>
                <UpDownBean
                    predictionValue={Converter.getPredictionValueFromString(
                        match.predictionValue,
                    )}
                    className="w-[80%] h-[80%]"
                />
            </HistoryItemContainer>
            <HistoryItemContainer>
                <div className="text-[1.3rem] font-semibold upDownTextWhite">
                    {getTimeFrameText()}
                </div>
            </HistoryItemContainer>
            <HistoryItemContainer>
                <div className="text-[1.3rem] font-semibold upDownTextWhite">
                    {Formatter.extractDateFromDateTimeString(match.exitTime)}
                </div>
            </HistoryItemContainer>
            <HistoryItemContainer>
                <div className="text-[1.3rem] font-semibold upDownTextWhite">
                    {Formatter.extractTimeFromDateTimeString(match.exitTime)}
                </div>
            </HistoryItemContainer>
            <HistoryItemContainer>
                <div className="text-[1.3rem] font-semibold upDownTextWhite">
                    {Formatter.formatMoney(match.exitPrice)}
                </div>
            </HistoryItemContainer>
            <HistoryItemContainer>
                <WinLossBean
                    predictionStatus={Converter.getPredictionStatusFromString(
                        match.resultStatus,
                    )}
                    className="w-[70%] h-[80%]"
                />
            </HistoryItemContainer>
            <HistoryItemContainer>
                <Payout
                    amount={
                        match.resultPayout === 0
                            ? -match.bet
                            : match.resultPayout
                    }
                    className="text-[1.4rem]"
                />
            </HistoryItemContainer>
        </>
    );
};

export default HistoryMatchRowDesktop;
