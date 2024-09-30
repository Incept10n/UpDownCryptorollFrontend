import { useContext } from "react";
import { ProfilePageType } from "../../../../types/HelperTypes";
import { ProfileContext } from "../../../../context/ProfileContext";

const ProfileMenuItem = ({
    icon,
    text,
    pageType,
}: {
    icon: string;
    text: string;
    pageType: ProfilePageType;
}) => {
    const { currentProfilePage, setCurrentProfilePage } =
        useContext(ProfileContext)!;

    return (
        <div
            className={`flex justify-start items-center w-[200px] hover:cursor-pointer p-[12px]
                         ${
                             currentProfilePage === pageType &&
                             "bg-[#d9d9d9] bg-opacity-[14%] rounded-[13px] "
                         }`}
            onClick={() => setCurrentProfilePage(pageType)}
        >
            <img src={icon} alt="" className="w-[20px]" />
            <div className="text-[24px] text-[#ccc3c3] font-semibold ml-[21px] leading-[24px]">
                {text}
            </div>
        </div>
    );
};

export default ProfileMenuItem;
