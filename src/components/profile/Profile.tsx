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
import { isUserLoggedIn } from "../../helperFunctions/jwtTokenFuncions";

const Profile = () => {
    const {
        setCurrentGame,
        displayLoginSignupPopup,
        setDisplayLoginSignupPopup,
    } = useContext(ApplicationContext)!;
    const [currentProfilePage, setCurrentProfilePage] =
        useState<ProfilePageType>(ProfilePageType.Profile);

    useEffect(() => {
        setCurrentGame(GameCoice.None);

        if (!isUserLoggedIn()) {
            setDisplayLoginSignupPopup(true);
        } else {
            setDisplayLoginSignupPopup(false);
        }
    }, [isUserLoggedIn(), displayLoginSignupPopup]);

    return (
        <ProfileContext.Provider
            value={{ currentProfilePage, setCurrentProfilePage }}
        >
            <HomeBgGradient />
            <ProfileMenuMobile />
            <div className="lg:mt-[46px] mt-[17px] lg:mx-[61px] mx-0 flex min-h-[74vh]">
                <ProfileMenu />
                <ProfileInfoScreen />
            </div>
        </ProfileContext.Provider>
    );
};

export default Profile;
