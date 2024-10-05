import { useTranslation } from "react-i18next";
import HeaderItem from "../HeaderItem";

const DesktopHeader = () => {
    const { t } = useTranslation();

    return (
        <>
            <HeaderItem
                text={t("historyCoin")}
                className="col-span-1 row-span-2 lg:flex hidden"
            />
            <HeaderItem
                text={t("historyEntry")}
                className="col-span-3 row-span-1 lg:flex hidden"
            />
            <HeaderItem
                text={t("historyPrediction")}
                className="col-span-2 row-span-1 lg:flex hidden"
            />
            <HeaderItem
                text={t("historyExit")}
                className="col-span-3 row-span-1 lg:flex hidden"
            />
            <HeaderItem
                text={t("historyResult")}
                className="col-span-2 row-span-1 lg:flex hidden"
            />
            <HeaderItem
                text={t("historyDate")}
                className="col-span-1 row-span-1 lg:flex hidden"
            />
            <HeaderItem
                text={t("historyTime")}
                className="col-span-1 row-span-1 lg:flex hidden"
            />
            <HeaderItem
                text={t("historyPrice")}
                className="col-span-1 row-span-1 lg:flex hidden"
            />
            <HeaderItem
                text={t("historyDirection")}
                className="col-span-1 row-span-1 lg:flex hidden"
            />
            <HeaderItem
                text={t("historyTime")}
                className="col-span-1 row-span-1 lg:flex hidden"
            />
            <HeaderItem
                text={t("historyDate")}
                className="col-span-1 row-span-1 lg:flex hidden"
            />
            <HeaderItem
                text={t("historyTime")}
                className="col-span-1 row-span-1 lg:flex hidden"
            />
            <HeaderItem
                text={t("historyPrice")}
                className="col-span-1 row-span-1 lg:flex hidden"
            />
            <HeaderItem
                text={t("historyStatus")}
                className="col-span-1 row-span-1 lg:flex hidden"
            />
            <HeaderItem
                text={t("historyPayout")}
                className="col-span-1 row-span-1 lg:flex hidden"
            />
        </>
    );
};

export default DesktopHeader;
