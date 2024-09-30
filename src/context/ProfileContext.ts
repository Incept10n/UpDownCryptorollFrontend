import { createContext, Dispatch, SetStateAction } from "react";
import { ProfilePageType } from "../types/HelperTypes";

export interface ProfileContextInterface {
    currentProfilePage: ProfilePageType;
    setCurrentProfilePage: Dispatch<SetStateAction<ProfilePageType>>;
}

export const ProfileContext = createContext<
    ProfileContextInterface | undefined
>(undefined);
