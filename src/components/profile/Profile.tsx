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
import ProfileMenuMobile from "./profileComponents/ProfileMenuMobile";

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
            <ProfileMenuMobile />
            <div className="lg:mt-[46px] mt-[17px] lg:mx-[61px] mx-0 h-[78vh] flex">
                <ProfileMenu />
                <ProfileInfoScreen />
            </div>
        </ProfileContext.Provider>
    );
};

export default Profile;
