import { createContext, Dispatch, SetStateAction } from "react";

export const enum GameCoice {
    None,
    Btc,
    Eth,
    Ton,
}

export interface ApplicationContextInterface {
    currentGame: GameCoice;
    setCurrentGame: React.Dispatch<React.SetStateAction<GameCoice>>;
    displayTonConnectPopup: boolean;
    setDisplayTonConnectPopup: Dispatch<SetStateAction<boolean>>;
    currentBalance: number;
    setCurrentBalance: Dispatch<SetStateAction<number>>;
}

export const ApplicationContext = createContext<
    ApplicationContextInterface | undefined
>(undefined);
