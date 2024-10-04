import { createContext, Dispatch, SetStateAction } from "react";
import { MatchHistoryItem } from "../types/MatchHistoryItem";

interface MatchHistoryContextInterface {
    currentMatch: MatchHistoryItem | undefined;
    setCurrentMatch: Dispatch<SetStateAction<MatchHistoryItem | undefined>>;
    isViewingMatch: boolean;
    setIsViewingMatch: Dispatch<boolean>;
}

export const MatchHistoryContext =
    createContext<MatchHistoryContextInterface | null>(null);
