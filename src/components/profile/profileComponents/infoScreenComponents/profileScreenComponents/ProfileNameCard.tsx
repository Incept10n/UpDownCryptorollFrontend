import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import {
    changeUserInfo,
    fetchPlayerInfo,
} from "../../../../../helperFunctions/fetchFunctions";
import Username from "./profileNameCardComponents/Username";
import EditButton from "./profileNameCardComponents/EditButton";
import SaveChangesButton from "./profileNameCardComponents/SaveChangesButton";
import ProfilePicture from "./profileNameCardComponents/ProfilePicture";
import LoadingIcon from "../../../../common/LoadingIcon";
import { getCurrentUsername } from "../../../../../helperFunctions/jwtTokenFuncions";

const ProfileNameCard = () => {
    const [userName, setUserName] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchPlayerInfo(getCurrentUsername()!).then((result) => {
            if (result) {
                setUserName(result.username);
                setIsLoading(false);
            }
        });
    }, []);

    const handleOnChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setUserName(ev.target.value);
    };

    const handleSaveChanges = () => {
        changeUserInfo(userName);
        setIsEditing(false);
    };

    const handleKeyDown = (ev: KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === "Enter") {
            handleSaveChanges();
        }
    };

    return (
        <div
            className="border-[1px] border-[#777777] flex-none
                       2xl:w-auto lg:w-[530px] w-full
                       lg:h-[203px] h-[47px] lg:rounded-[20px] rounded-[59px]
                       flex justify-between items-center"
        >
            <div className="flex justify-start items-center">
                <div className="lg:ml-[40px] ml-[16px] lg:mr-[40px] mr-[15px] flex-none">
                    <ProfilePicture isEditing={isEditing} />
                </div>
                <div
                    className="flex lg:flex-col flex-row lg:justify-center justify-start 
                           items-center mr-[46px]"
                >
                    {isLoading ? (
                        <div className="lg:scale-100 scale-[0.7]">
                            <LoadingIcon
                                width="45px"
                                height="45px"
                                borderWidth="5px"
                            />
                        </div>
                    ) : (
                        <Username
                            isEditing={isEditing}
                            userName={userName}
                            handleOnChange={handleOnChange}
                            handleKeyDown={handleKeyDown}
                        />
                    )}
                    <div
                        className="lg:mt-[23px] mt-0 lg:relative absolute lg:right-auto right-[16px]
                                lg:block hidden"
                    >
                        {!isEditing ? (
                            <EditButton
                                setIsEditing={setIsEditing}
                                isLoading={isLoading}
                            />
                        ) : (
                            <SaveChangesButton
                                handleSaveChanges={handleSaveChanges}
                                isLoading={isLoading}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="lg:hidden block mr-[20px]">
                {!isEditing ? (
                    <EditButton
                        setIsEditing={setIsEditing}
                        isLoading={isLoading}
                    />
                ) : (
                    <SaveChangesButton
                        handleSaveChanges={handleSaveChanges}
                        isLoading={isLoading}
                    />
                )}
            </div>
        </div>
    );
};

export default ProfileNameCard;
