import { useTranslation } from "react-i18next";
import TextWithUnderlineInfo from "./TextWithUnderlineInfo";
import { useContext } from "react";
import { MatchHistoryContext } from "../../../../../../context/MatchHistoryContext";
import { Formatter } from "../../../../../../helperFunctions/Formater";

const ExitInfo = () => {
    const { currentMatch } = useContext(MatchHistoryContext)!;
    const { t } = useTranslation();

    return (
        <div className="inline-block text-right">
            <TextWithUnderlineInfo
                text={"$" + currentMatch?.exitPrice.toFixed(1)}
                underlineInfo={t("historyExitPrice")}
            />
            <TextWithUnderlineInfo
                text={Formatter.extractDateFromDateTimeString(
                    currentMatch!.exitTime,
                )}
                underlineInfo={t("historyExitDate")}
            />
            <TextWithUnderlineInfo
                text={Formatter.extractTimeFromDateTimeString(
                    currentMatch!.exitTime,
                )}
                underlineInfo={t("historyExitTime")}
            />
        </div>
    );
};

export default ExitInfo;
