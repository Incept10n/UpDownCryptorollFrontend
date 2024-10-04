import { useContext } from "react";
import TextWithUnderlineInfo from "./TextWithUnderlineInfo";
import { MatchHistoryContext } from "../../../../../../context/MatchHistoryContext";
import { useTranslation } from "react-i18next";
import { Formatter } from "../../../../../../helperFunctions/Formater";

const EntryInfo = () => {
    const { currentMatch } = useContext(MatchHistoryContext)!;
    const { t } = useTranslation();

    return (
        <div className="inline-block">
            <TextWithUnderlineInfo
                text={"$" + currentMatch?.entryPrice.toFixed(1)}
                underlineInfo={t("historyEntryPrice")}
            />
            <TextWithUnderlineInfo
                text={Formatter.extractDateFromDateTimeString(
                    currentMatch!.entryTime,
                )}
                underlineInfo={t("historyEntryDate")}
            />
            <TextWithUnderlineInfo
                text={Formatter.extractTimeFromDateTimeString(
                    currentMatch!.entryTime,
                )}
                underlineInfo={t("historyEntryTime")}
            />
        </div>
    );
};

export default EntryInfo;
