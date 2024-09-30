import { useContext, useEffect, useState } from "react";
import {
    ApplicationContext,
    GameCoice,
} from "../../context/ApplicationContext";
import HomeBgGradient from "../home/homeComponents/HomeBgGradient";
import ProfileMenu from "./profileComponents/ProfileMenu";
import ProfileInfoScreen from "./profileComponents/ProfileInfoScreen";
import { ProfilePageType } from "../../types/HelperTypes";
import { ProfileContext } from "../../context/ProfileContext";

const Profile = () => {
    const { setCurrentGame } = useContext(ApplicationContext)!;
    const [currentProfilePage, setCurrentProfilePage] =
        useState<ProfilePageType>(ProfilePageType.Profile);

    useEffect(() => {
        setCurrentGame(GameCoice.None);
    }, []);

    return (
        <ProfileContext.Provider
            value={{ currentProfilePage, setCurrentProfilePage }}
        >
            <HomeBgGradient />
            <div className="mt-[46px] mx-[61px] h-[78vh] flex">
                <ProfileMenu />
                <ProfileInfoScreen />
            </div>
        </ProfileContext.Provider>
    );
};

export default Profile;
