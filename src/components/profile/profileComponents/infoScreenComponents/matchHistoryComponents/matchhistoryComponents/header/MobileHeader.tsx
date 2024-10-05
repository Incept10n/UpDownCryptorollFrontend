import { useTranslation } from "react-i18next";
import HeaderItem from "../HeaderItem";

const MobileHeader = () => {
    const { t } = useTranslation();

    return (
        <>
            <HeaderItem
                text={t("historyCoin")}
                className="col-span-1 row-span-2 block lg:hidden"
            />
            <HeaderItem
                text={t("historyGuess")}
                className="col-span-1 row-span-2 block lg:hidden"
            />
            <HeaderItem
                text={t("historyResult")}
                className="col-span-2 row-span-1 block lg:hidden"
            />
            <HeaderItem
                text={t("historyMore")}
                className="col-span-1 row-span-2 block lg:hidden"
            />
            <HeaderItem
                text={t("historyStatus")}
                className="col-span-1 row-span-1 block lg:hidden"
            />
            <HeaderItem
                text={t("historyPayout")}
                className="col-span-1 row-span-1 block lg:hidden"
            />
        </>
    );
};

export default MobileHeader;
