import { useEffect, useRef, useState } from "react";
import { changeUserInfo } from "../../../../../helperFunctions/fetchFunctions";
import { getCurrentUsername } from "../../../../../helperFunctions/jwtTokenFuncions";
import { assets } from "../../../../../imagesImports/assets";
import { User } from "../../../../../types/User";
import { FormValidator } from "../../../utils/FormValidator";
import { UsernameValidationResult } from "../../../types/enums";
import { useCutomErrorText } from "../../../hooks/useCustomErrorText";
import FormError from "../../other/FormError";
import LoadingIcon from "../../../../../components/common/LoadingIcon";
import { useTranslation } from "react-i18next";
import WhiteBorderButton from "../../buttons/WhiteBorderButton";

const UsernameInputFieldUnderlined = ({ user }: { user: User }) => {
    const [currentUsername, setCurrentUsername] = useState(user.username);
    const [isEditing, setIsEditing] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const inputFieldRef = useRef<HTMLInputElement>(null);

    const { getUsernameErrorText } = useCutomErrorText();

    const { t } = useTranslation();

    const handleSave = async () => {
        if (currentUsername === user.username) {
            setErrorMessage("");
            setIsEditing(false);
            return;
        }

        const validationErrors =
            FormValidator.validateUsername(currentUsername);

        if (validationErrors !== UsernameValidationResult.Success) {
            setErrorMessage(getUsernameErrorText(validationErrors));
            return;
        }

        setIsLoading(true);

        const isChangeSuccesfull = await changeUserInfo(getCurrentUsername()!, {
            newName: currentUsername,
        });

        if (!isChangeSuccesfull) {
            setErrorMessage(
                getUsernameErrorText(
                    UsernameValidationResult.UserWithThisNameAlreadyExists,
                ),
            );
        } else {
            setErrorMessage("");
            setIsEditing(false);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        if (isEditing) {
            inputFieldRef.current?.focus();
        }
    }, [isEditing]);

    return (
        <div className="flex flex-col relative">
            <div className="flex justify-start items-center">
                <input
                    type="text"
                    className={`text-[1.9rem] upDownTextWhite bg-transparent outline-none 
                                sm:w-[210px] w-[90%]
                                ${isLoading && "opacity-[0.5]"}`}
                    maxLength={13}
                    value={currentUsername}
                    onChange={(e) => setCurrentUsername(e.target.value)}
                    disabled={!isEditing || isLoading}
                    ref={inputFieldRef}
                />
                <div className="flex justify-end">
                    {isLoading ? (
                        <div className="flex justify-start items-center">
                            <LoadingIcon
                                width="21px"
                                height="21px"
                                borderWidth="4px"
                            />
                            <div className="text-[0.8rem] text-white font-light ml-[5px]">
                                {t("checking")}
                            </div>
                        </div>
                    ) : isEditing ? (
                        <WhiteBorderButton
                            width="auto"
                            height="auto"
                            text={t("saveChanges")}
                            fontSize="1rem"
                            paddingX="10px"
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
            </div>
            <div
                className={`h-[1px] w-full bg-white ${isLoading && "opacity-[0.5]"}`}
            ></div>
            <FormError text={errorMessage} />
        </div>
    );
};

export default UsernameInputFieldUnderlined;
