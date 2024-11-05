import { User } from "../../../../types/User";
import ProfilePictureIcon from "../../icons/ProfilePictureIcon";
import PasswordInputFieldUnderlined from "../forms/formFields/PasswordInputFieldUnderlined";
import UsernameInputFieldUnderlined from "../forms/formFields/UsernameInputFieldUnderlined";

const UsernamePasswordForm = ({ user }: { user: User }) => {
    return (
        <div className="flex">
            <div className="flex justify-start items-end">
                <ProfilePictureIcon />
            </div>
            <div className="ml-[38px]">
                <UsernameInputFieldUnderlined user={user} />
                <PasswordInputFieldUnderlined />
            </div>
        </div>
    );
};

export default UsernamePasswordForm;
