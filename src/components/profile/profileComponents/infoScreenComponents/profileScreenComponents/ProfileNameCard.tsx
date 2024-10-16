import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { useTonAddress } from "@tonconnect/ui-react";
import {
    changeUserName,
    fetchPlayerInfo,
} from "../../../../../helperFunctions/fetchFunctions";
import Username from "./profileNameCardComponents/Username";
import EditButton from "./profileNameCardComponents/EditButton";
import SaveChangesButton from "./profileNameCardComponents/SaveChangesButton";
import ProfilePicture from "./profileNameCardComponents/ProfilePicture";

const ProfileNameCard = () => {
    const [userName, setUserName] = useState("");
    const walletAddress = useTonAddress(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchPlayerInfo(walletAddress).then((result) => {
            if (result) {
                setUserName(result.username);
            }
        });
    }, [walletAddress]);

    const handleOnChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setUserName(ev.target.value);
    };

    const handleSaveChanges = () => {
        changeUserName(walletAddress, userName);
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
                       2xl:w-auto lg:w-[530px] w-[80%]
                       lg:h-[203px] h-[47px] lg:rounded-[20px] rounded-[59px]
                       flex justify-start items-center"
        >
            <div className="lg:ml-[40px] ml-[16px] lg:mr-[40px] mr-[15px] flex-none">
                <ProfilePicture isEditing={isEditing} />
            </div>
            <div
                className="flex lg:flex-col flex-row lg:justify-center justify-start 
                           items-center mr-[46px]"
            >
                <Username
                    isEditing={isEditing}
                    userName={userName}
                    handleOnChange={handleOnChange}
                    handleKeyDown={handleKeyDown}
                />
                <div className="lg:mt-[23px] mt-0 lg:relative absolute lg:right-auto right-[16px]">
                    {!isEditing ? (
                        <EditButton setIsEditing={setIsEditing} />
                    ) : (
                        <SaveChangesButton
                            handleSaveChanges={handleSaveChanges}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileNameCard;
