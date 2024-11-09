import { useContext, useEffect } from "react";
import {
    ApplicationContext,
    GameCoice,
} from "../../context/ApplicationContext";
import HomeBgGradient from "../home/homeComponents/HomeBgGradient";
import RulesOfTheGame from "./rulesComponents/RulesOfTheGame";
import RulesHeading from "./rulesComponents/RulesHeading";
import PurposeHeading from "./rulesComponents/PurposeHeading";
import PurposesParagraphs from "./rulesComponents/PurposesParagraphs";
import FollowUsFooter from "./rulesComponents/FollowUsFooter";
import UpDownText from "./rulesComponents/UpDownText";
import InviteFriendButton from "../profile/profileComponents/common/InviteFriendButton";

const Rules = () => {
    const { setCurrentGame } = useContext(ApplicationContext)!;

    useEffect(() => {
        setCurrentGame(GameCoice.None);
    }, []);

    return (
        <div>
            <HomeBgGradient />
            <UpDownText />
            <div
                className="text-[#ccc3c3] xl:ml-[157px] ml-0
                            xl:mt-[163px] sm:mt-[60px] mt-[49px]"
            >
                <RulesHeading />
                <RulesOfTheGame />
                <PurposeHeading />
                <PurposesParagraphs />
                <div className="flex xl:justify-start justify-center mt-[47px]">
                    <InviteFriendButton />
                </div>
            </div>
            <FollowUsFooter />
        </div>
    );
};

export default Rules;
