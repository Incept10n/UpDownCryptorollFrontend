import { useTranslation } from "react-i18next";
import HeaderItem from "./matchhistoryComponents/HeaderItem";

const MatchHistoryHeader = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="grid grid-cols-5 grid-rows-2 gap-[6px] mx-[20px]">
                <HeaderItem
                    text={t("historyCoin")}
                    className="col-span-1 row-span-2"
                />
                <HeaderItem
                    text={t("historyGuess")}
                    className="col-span-1 row-span-2"
                />
                <HeaderItem
                    text={t("historyResult")}
                    className="col-span-2 row-span-1"
                />
                <HeaderItem
                    text={t("historyMore")}
                    className="col-span-1 row-span-2"
                />
                <HeaderItem
                    text={t("historyStatus")}
                    className="col-span-1 row-span-1"
                />
                <HeaderItem
                    text={t("historyPayout")}
                    className="col-span-1 row-span-1"
                />
            </div>
        </>
    );
};

export default MatchHistoryHeader;
