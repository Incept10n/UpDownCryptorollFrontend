import { useContext } from "react";
import { GameCoice } from "../../../../../../context/ApplicationContext";
import { Converter } from "../../../../../../helperFunctions/Converter";
import { assets } from "../../../../../../imagesImports/assets";
import { MatchHistoryItem } from "../../../../../../types/MatchHistoryItem";
import HistoryItemContainer from "./HistoryItemContainer";
import MoreButton from "./MoreButton";
import Payout from "./Payout";
import UpDownBean from "./UpDownBean";
import WinLossBean from "./WinLossBean";
import { MatchHistoryContext } from "../../../../../../context/MatchHistoryContext";

const HistoryMatchRow = ({ match }: { match: MatchHistoryItem }) => {
    const { setIsViewingMatch, setCurrentMatch } =
        useContext(MatchHistoryContext)!;

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
                <UpDownBean
                    predictionValue={Converter.getPredictionValueFromString(
                        match.predictionValue,
                    )}
                    className="w-[80%] h-[80%]"
                />
            </HistoryItemContainer>
            <HistoryItemContainer>
                <WinLossBean
                    predictionStatus={Converter.getPredictionStatusFromString(
                        match.resultStatus,
                    )}
                    className="w-[80%] h-[80%]"
                />
            </HistoryItemContainer>
            <HistoryItemContainer>
                <Payout
                    amount={
                        match.resultPayout === 0
                            ? -match.bet
                            : match.resultPayout
                    }
                />
            </HistoryItemContainer>
            <HistoryItemContainer>
                <div
                    onClick={() => {
                        setCurrentMatch(match);
                        setIsViewingMatch(true);
                    }}
                >
                    <MoreButton />
                </div>
            </HistoryItemContainer>
        </>
    );
};

export default HistoryMatchRow;
