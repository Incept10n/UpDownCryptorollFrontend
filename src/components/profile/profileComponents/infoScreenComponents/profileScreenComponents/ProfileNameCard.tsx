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
                       border-[1px] border-[#777777] flex-none
                       min-[1560px]:w-auto lg:w-[530px] w-[80%]
                       lg:h-[203px] h-[47px] lg:rounded-[20px] rounded-[59px]
                       flex justify-start items-center"
        >
            <div
                className="flex flex-col items-center 
                            lg:ml-[40px] ml-[16px] lg:mr-[40px] mr-[15px]
                            flex-none"
            >
                <img
                    src={assets.icons.profilePicture}
                    alt="profile picture"
                    className={`
                                ${
                                    isEditing
                                        ? "lg:w-[110px] lg:h-[110px] w-[32px] h-[32px] flex-none"
                                        : "lg:w-[138px] lg:h-[138px] w-[40px] h-[40px] flex-none"
                                }`}
                />
                {isEditing && (
                    <div
                        className="text-[#ccc3c3] text-opacity-[50%] text-[14px] 
                                   text-center underline font-light max-w-[166px] 
                                   min-[1560px]:block hidden"
                    >
                        {t("changingPfp")}
                    </div>
                )}
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
                {!isEditing ? (
                    <button
                        className="w-[98px] lg:h-[40px] h-[30px] 
                                   lg:rounded-[10px] rounded-full 
                                   border-[1px] border-[#999999]
                                   flex lg:justify-center justify-around 
                                   items-center lg:mt-[23px] mt-0
                                   hover:scale-[1.1] scale-[1]
                                   transition-all duration-[0.1s] ease-in-out
                                   lg:relative absolute lg:right-auto right-[16px]"
                        onClick={() => setIsEditing(true)}
                    >
                        <div className="upDownTextWhite lg:text-[23px] text-[16px]">
                            {t("edit")}
                        </div>
                        <img
                            src={assets.icons.pencil}
                            alt="pencil"
                            className="ml-[9px] lg:w-auto lg:h-auto w-[20px] h-[20px]"
                        />
                    </button>
                ) : (
                    <button
                        className="px-[19px] lg:rounded-[20px] rounded-full 
                                   border-[1px] border-[#999999]
                                   flex justify-center items-center lg:mt-[23px] mt-0
                                   hover:scale-[1.1] scale-[1]
                                   transition-all duration-[0.1s] ease-in-out
                                   lg:relative absolute lg:right-auto right-[16px]"
                        onClick={handleSaveChanges}
                    >
                        <div className="upDownTextWhite lg:text-[23px] text-[16px]">
                            {t("saveChanges")}
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProfileNameCard;
