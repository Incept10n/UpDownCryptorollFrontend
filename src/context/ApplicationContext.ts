import { createContext } from "react";

export const enum GameCoice {
    None,
    Btc,
    Eth,
    Ton,
}

export interface ApplicationContextInterface {
    currentGame: GameCoice;
    setCurrentGame: React.Dispatch<React.SetStateAction<GameCoice>>;
}

export const ApplicationContext = createContext<
    ApplicationContextInterface | undefined
>(undefined);
