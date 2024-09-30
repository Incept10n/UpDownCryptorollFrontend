import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { assets } from "../../../../../imagesImports/assets";
import { useTonAddress } from "@tonconnect/ui-react";
import {
    changeUserName,
    fetchPlayerInfo,
} from "../../../../../helperFunctions/fetchFunctions";
import { useTranslation } from "react-i18next";
import Username from "./profileNameCardComponents/Username";

const ProfileNameCard = () => {
    const [userName, setUserName] = useState("");
    const walletAddress = useTonAddress(false);
    const { t } = useTranslation();
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
            className="absolute top-[120px] min-[1560px]:right-[96px] 
                       right-[50%] max-[1560px]:translate-x-[50%] 
                       border-[1px] border-[#777777] lg:max-w-[803px] w-[342px] 
                       lg:h-[203px] h-[50px] rounded-[20px]
                       flex justify-start items-center"
        >
            <div className="flex flex-col items-center ml-[40px] mr-[40px]">
                <img
                    src={assets.icons.profilePicture}
                    alt="profile picture"
                    className={`lg:w-[138px] lg:h-[138px] w-[32px] h-[32px] flex-none`}
                />
                {isEditing && (
                    <div
                        className="text-[#ccc3c3] text-opacity-[50%] text-[14px] 
                                   text-center underline font-light max-w-[146px] 
                                   min-[1560px]:block hidden"
                    >
                        {t("changingPfp")}
                    </div>
                )}
            </div>
            <div className="flex lg:flex-col flex-row justify-center items-center mr-[46px]">
                <Username
                    isEditing={isEditing}
                    userName={userName}
                    handleOnChange={handleOnChange}
                    handleKeyDown={handleKeyDown}
                />
                {!isEditing ? (
                    <button
                        className="w-[98px] h-[40px] lg:rounded-[10px] rounded-full 
                                   border-[1px] border-[#999999]
                                   flex justify-center items-center lg:mt-[23px] mt-0
                                   hover:scale-[1.1] scale-[1]
                                   transition-all duration-[0.1s] ease-in-out"
                        onClick={() => setIsEditing(true)}
                    >
                        <div className="upDownTextWhite text-[23px]">
                            {t("edit")}
                        </div>
                        <img
                            src={assets.icons.pencil}
                            alt="pencil"
                            className="ml-[9px]"
                        />
                    </button>
                ) : (
                    <button
                        className="px-[19px] rounded-[20px] border-[1px] border-[#999999]
                               flex justify-center items-center mt-[23px]
                               hover:scale-[1.1] scale-[1]
                               transition-all duration-[0.1s] ease-in-out"
                        onClick={handleSaveChanges}
                    >
                        <div className="upDownTextWhite text-[23px]">
                            {t("saveChanges")}
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProfileNameCard;
