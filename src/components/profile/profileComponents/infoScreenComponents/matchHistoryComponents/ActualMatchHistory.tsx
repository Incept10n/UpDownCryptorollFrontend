import { fetchMatchHistory } from "../../../../../helperFunctions/fetchFunctions";
import { useTonAddress } from "@tonconnect/ui-react";
import { MatchHistoryItem } from "../../../../../types/MatchHistoryItem";
import { useEffect, useState } from "react";
import HistoryMatchRow from "./matchhistoryComponents/HistoryMatchRow";
import { useTranslation } from "react-i18next";
import HistoryMatchRowDesktop from "./matchhistoryComponents/HistoryMatchRowDesktop";

const ActualMatchHistory = () => {
    const walletAddress = useTonAddress(false);
    const [matches, setMatches] = useState<MatchHistoryItem[]>([]);
    const [offset, setOffset] = useState(0);
    const { t } = useTranslation();
    const [isEndOfHistory, setIsEndOfHistory] = useState(false);

    const loadMatches = async (offset: number) => {
        fetchMatchHistory(walletAddress, offset, 7).then((result) => {
            setMatches((prevMatches) => {
                if (prevMatches.length === prevMatches.length + result.length) {
                    setIsEndOfHistory(true);
                }

                return [...prevMatches, ...result];
            });
        });
    };

    const loadMoreMatches = () => {
        setOffset((prevOffset) => prevOffset + 7);
    };

    useEffect(() => {
        loadMatches(offset);
    }, [offset]);

    return (
        <>
            <div
                className="grid grid-cols-5 grid-rows-2 gap-[6px] xl:gap-x-[20px]
                           lg:grid-cols-[60px_repeat(10,_1fr)] mx-[20px] mt-[34px] 
                           min-[1024px]:h-[300px] min-[1024px]:overflow-y-scroll lg:hidden"
            >
                {matches.map((match) => (
                    <HistoryMatchRow match={match} key={match.id} />
                ))}
            </div>
            <div
                className="hidden grid-cols-5 grid-rows-2 gap-[6px] xl:gap-x-[20px]
                           lg:grid-cols-[60px_repeat(10,_1fr)] mx-[20px] mt-[34px] 
                           lg:h-[300px] min-[1024px]:overflow-y-scroll lg:grid w-[98%]"
            >
                {matches.map((match) => (
                    <HistoryMatchRowDesktop match={match} key={match.id} />
                ))}
            </div>
            <div className="w-full flex justify-center my-[22px]">
                <button
                    className={`inline-block text-[1rem] px-[27px] py-[3px] 
                                ${!isEndOfHistory && "buttonGrayGradient border-[1px] border-[#747474]"} 
                                rounded-[10px] upDownTextWhite font-semibold whitespace-nowrap`}
                    onClick={() => loadMoreMatches()}
                >
                    {!isEndOfHistory ? t("Load more") : t("endOfHistory")}
                </button>
            </div>
        </>
    );
};

export default ActualMatchHistory;
