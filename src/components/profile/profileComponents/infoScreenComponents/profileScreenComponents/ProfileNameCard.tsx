import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { assets } from "../../../../../imagesImports/assets";
import { useTonAddress } from "@tonconnect/ui-react";
import {
    changeUserName,
    fetchPlayerInfo,
} from "../../../../../helperFunctions/fetchFunctions";
import { useTranslation } from "react-i18next";

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
            className="absolute top-[120px] right-[96px] border-[1px] 
                           border-[#777777] max-w-[803px] h-[203px] rounded-[20px]
                           flex justify-start items-center"
        >
            <div className="flex flex-col items-center ml-[40px] mr-[40px]">
                <img
                    src={assets.icons.profilePicture}
                    alt="profile picture"
                    className={`w-[138px] h-[138px]`}
                />
                {isEditing && (
                    <div
                        className="text-[#ccc3c3] text-opacity-[50%] text-[14px] 
                                    text-center underline font-light max-w-[146px]"
                    >
                        {t("changingPfp")}
                    </div>
                )}
            </div>
            <div className="mr-[46px]">
                {!isEditing ? (
                    <div className="upDownTextWhite text-[30px]">
                        {userName}
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <input
                            className="upDownTextWhite text-[30px] bg-transparent outline-none w-full"
                            value={userName}
                            onChange={handleOnChange}
                            onKeyDown={handleKeyDown}
                        />
                        <div className="w-full h-[1px] bg-[#ccc3c3]"></div>
                    </div>
                )}
                {!isEditing ? (
                    <button
                        className="w-[98px] h-[40px] rounded-[10px] border-[1px] border-[#999999]
                               flex justify-center items-center mt-[23px] 
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
