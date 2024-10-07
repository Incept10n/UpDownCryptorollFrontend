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
                return `30 ${t("minutesShort")}`;
            case TimeframeChoice.Hrs4:
                return `4 ${t("hoursShort")}`;
            case TimeframeChoice.Hrs12:
                return `12 ${t("hoursShort")}`;
            case TimeframeChoice.None:
                return `15 sec`;
            default:
                return `15 sec`;
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
                <div
                    className="xl:text-[1.3rem] text-[1rem] 
                                font-semibold upDownTextWhite max-w-[86px] text-center"
                >
                    {Formatter.extractDateFromDateTimeString(
                        match.entryTime,
                        true,
                    )}
                </div>
            </HistoryItemContainer>
            <HistoryItemContainer>
                <div className="xl:text-[1.3rem] text-[1rem] font-semibold upDownTextWhite">
                    {Formatter.extractTimeFromDateTimeString(match.entryTime)}
                </div>
            </HistoryItemContainer>
            <HistoryItemContainer>
                <div className="xl:text-[1.3rem] text-[1rem] font-semibold upDownTextWhite">
                    <span className="xxl:inline hidden">$ </span>
                    {Formatter.formatMoney(match.entryPrice)}
                </div>
            </HistoryItemContainer>
            <HistoryItemContainer>
                <UpDownBean
                    predictionValue={Converter.getPredictionValueFromString(
                        match.predictionValue,
                    )}
                    className="2xl:w-[69px] 2xl:h-[44px] w-[46px] h-[29px]"
                />
            </HistoryItemContainer>
            <HistoryItemContainer>
                <div className="xl:text-[1.3rem] text-[1rem] font-semibold upDownTextWhite text-center">
                    {getTimeFrameText()}
                </div>
            </HistoryItemContainer>
            <HistoryItemContainer>
                <div
                    className="xl:text-[1.3rem] text-[1rem] font-semibold 
                                upDownTextWhite max-w-[86px] text-center"
                >
                    {Formatter.extractDateFromDateTimeString(
                        match.exitTime,
                        true,
                    )}
                </div>
            </HistoryItemContainer>
            <HistoryItemContainer>
                <div className="xl:text-[1.3rem] text-[1rem] font-semibold upDownTextWhite">
                    {Formatter.extractTimeFromDateTimeString(match.exitTime)}
                </div>
            </HistoryItemContainer>
            <HistoryItemContainer>
                <div className="xl:text-[1.3rem] text-[1rem] font-semibold upDownTextWhite">
                    <span className="xxl:inline hidden">$ </span>
                    {Formatter.formatMoney(match.exitPrice)}
                </div>
            </HistoryItemContainer>
            <HistoryItemContainer>
                <WinLossBean
                    predictionStatus={Converter.getPredictionStatusFromString(
                        match.resultStatus,
                    )}
                    className="2xl:w-[85px] 2xl:h-[44px] w-[56px] h-[29px]"
                />
            </HistoryItemContainer>
            <HistoryItemContainer>
                <Payout
                    amount={
                        match.resultPayout === 0
                            ? -match.bet
                            : match.resultPayout
                    }
                    className="2xl:text-[20px] text-[15px]"
                    coinStyle="w-[30px] h-[30px] ml-[5px]"
                />
            </HistoryItemContainer>
        </>
    );
};

export default HistoryMatchRowDesktop;
