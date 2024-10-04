import { useContext, useEffect, useRef, useState } from "react";
import { MatchHistoryItem } from "../../../../../types/MatchHistoryItem";
import ActualMatchHistory from "./ActualMatchHistory";
import MatchHistoryHeader from "./MatchHistoryHeader";
import { MatchHistoryContext } from "../../../../../context/MatchHistoryContext";
import MoreInfoMatchPopup from "./matchhistoryComponents/MoreInfoMatchPopup";

const MatchHistory = () => {
    const [currentMatch, setCurrentMatch] = useState<MatchHistoryItem>();
    const [isViewingMatch, setIsViewingMatch] = useState(false);

    return (
        <MatchHistoryContext.Provider
            value={{
                currentMatch,
                setCurrentMatch,
                isViewingMatch,
                setIsViewingMatch,
            }}
        >
            <div className="mt-[32px]">
                <MatchHistoryHeader />
                <ActualMatchHistory />
                <div
                    className={`${
                        isViewingMatch && currentMatch
                            ? "h-[60%]"
                            : "h-0 translate-y-[5px]"
                    }
                    fixed w-full bottom-0 left-0 z-[15]
                    transition-all duration-[0.2] ease-in-out `}
                >
                    {currentMatch && <MoreInfoMatchPopup />}
                </div>
            </div>
        </MatchHistoryContext.Provider>
    );
};

export default MatchHistory;
