import { useEffect, useRef, useState } from "react";
import { assets } from "../../../../../../imagesImports/assets";
import { User } from "../../../../../../types/User";
import SaveButton from "./SaveButton";
import { changeUserInfo } from "../../../../../../helperFunctions/fetchFunctions";
import { getCurrentUsername } from "../../../../../../helperFunctions/jwtTokenFuncions";

const UsernameInputField = ({ user }: { user: User }) => {
    const [currentUsername, setCurrentUsername] = useState(user.username);
    const [isEditing, setIsEditing] = useState(false);

    const inputFieldRef = useRef<HTMLInputElement>(null);

    const handleSave = () => {
        // TODO: when you change name like that the token desynchronizes
        //              and you can't send anymore requests :)
        //                     and the only way to chage token is to log out and log back in :)
        //
        // TODO: THE SOLUTION: MAKE BACKEND RETURN NEW JWT TOKEN TO THIS REQUEST
        // TODO:                    AND THEN SET IT (NEED TO CHANGE changeUserInfo funcion for that)
        changeUserInfo(getCurrentUsername()!, { newName: currentUsername });

        setIsEditing(false);
    };

    useEffect(() => {
        if (isEditing) {
            inputFieldRef.current?.focus();
        }
    }, [isEditing]);

    return (
        <div className="flex flex-col">
            <div className="flex justify-start items-center">
                <input
                    type="text"
                    className="text-[1.9rem] upDownTextWhite bg-transparent outline-none w-[190px]"
                    maxLength={13}
                    value={currentUsername}
                    onChange={(e) => setCurrentUsername(e.target.value)}
                    disabled={!isEditing}
                    ref={inputFieldRef}
                />
                {isEditing ? (
                    <SaveButton
                        width="60px"
                        height="auto"
                        fontSize="1rem"
                        handleOnClick={handleSave}
                    />
                ) : (
                    <img
                        src={assets.icons.pencil}
                        alt="edit icon"
                        className="w-[30px] h-[30px] hover:cursor-pointer"
                        onClick={() => setIsEditing(true)}
                    />
                )}
            </div>
            <div className="h-[1px] w-full bg-white "></div>
        </div>
    );
};

export default UsernameInputField;
