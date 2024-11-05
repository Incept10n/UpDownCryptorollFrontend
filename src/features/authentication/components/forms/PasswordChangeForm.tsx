import { useTranslation } from "react-i18next";
import RegularUnderlinedPasswordField from "./formFields/RegularUnderlinedPasswordField";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { FormValidator } from "../../utils/FormValidator";
import { PasswordValidationResult } from "../../types/enums";
import { useCutomErrorText } from "../../hooks/useCustomErrorText";
import {
    changeUserInfo,
    logIn,
} from "../../../../helperFunctions/fetchFunctions";
import { getCurrentUsername } from "../../../../helperFunctions/jwtTokenFuncions";
import LoadingIcon from "../../../../components/common/LoadingIcon";
import WhiteBorderButton from "../buttons/WhiteBorderButton";

const PasswordChangeForm = ({
    setIsEditing,
}: {
    setIsEditing: Dispatch<SetStateAction<boolean>>;
}) => {
    const { t } = useTranslation();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [oldPasswordErrMsg, setOldPasswordErrMsg] = useState("");
    const [newPasswordErrMsg, setNewPasswordErrMsg] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const { getPasswordErrorText } = useCutomErrorText();

    const handleOnClick = async () => {
        setOldPasswordErrMsg("");
        setNewPasswordErrMsg("");

        const oldPasswordValidRes = FormValidator.validatePassword(oldPassword);
        const newPasswordValidRes = FormValidator.validatePassword(newPassword);

        if (oldPasswordValidRes != PasswordValidationResult.Success) {
            setOldPasswordErrMsg(getPasswordErrorText(oldPasswordValidRes));
            return;
        }

        if (newPasswordValidRes != PasswordValidationResult.Success) {
            setNewPasswordErrMsg(getPasswordErrorText(newPasswordValidRes));
            return;
        }

        if (newPassword === oldPassword) {
            setOldPasswordErrMsg(
                getPasswordErrorText(
                    PasswordValidationResult.OldNewPasswordsAreTheSame,
                ),
            );
            setNewPasswordErrMsg(
                getPasswordErrorText(
                    PasswordValidationResult.OldNewPasswordsAreTheSame,
                ),
            );
            return;
        }

        setIsLoading(true);

        const isCorrectOldPassword =
            (await logIn(getCurrentUsername()!, oldPassword)) === null;

        if (isCorrectOldPassword) {
            setOldPasswordErrMsg(
                getPasswordErrorText(
                    PasswordValidationResult.OldPasswordIncorrect,
                ),
            );
            setIsLoading(false);
            return;
        }

        changeUserInfo(getCurrentUsername()!, { newPassword: newPassword });

        setIsLoading(false);
        setIsEditing(false);
    };

    return (
        <div>
            <RegularUnderlinedPasswordField
                value={oldPassword}
                placeholder={t("enterYourOldPassword")}
                formErrorMessage={oldPasswordErrMsg}
                isLoading={isLoading}
                handleOnChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setOldPassword(e.target.value)
                }
            />
            <RegularUnderlinedPasswordField
                value={newPassword}
                placeholder={t("enterYourNewPassword")}
                formErrorMessage={newPasswordErrMsg}
                isLoading={isLoading}
                handleOnChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setNewPassword(e.target.value)
                }
            />
            <div className="mt-[33px] flex justify-between">
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
                ) : (
                    <WhiteBorderButton
                        width="auto"
                        height="30px"
                        text={t("saveChanges")}
                        fontSize="1.25rem"
                        rounded="9px"
                        paddingX="18px"
                        handleOnClick={handleOnClick}
                    />
                )}
                <WhiteBorderButton
                    width="auto"
                    height="30px"
                    text={t("cancel")}
                    fontSize="1.25rem"
                    handleOnClick={() => setIsEditing(false)}
                    rounded="9px"
                    paddingX="18px"
                />
            </div>
        </div>
    );
};

export default PasswordChangeForm;
