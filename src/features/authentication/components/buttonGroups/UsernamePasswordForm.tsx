import { User } from "../../../../types/User";
import ProfilePictureIcon from "../../icons/ProfilePictureIcon";
import PasswordInputFieldUnderlined from "../forms/formFields/PasswordInputFieldUnderlined";
import UsernameInputFieldUnderlined from "../forms/formFields/UsernameInputFieldUnderlined";

const UsernamePasswordForm = ({ user }: { user: User }) => {
    return (
        <div className="flex">
            <div className="mt-[18px] sm:block hidden">
                <ProfilePictureIcon />
            </div>
            <div className="sm:ml-[38px] ml-0">
                <UsernameInputFieldUnderlined user={user} />
                <PasswordInputFieldUnderlined />
            </div>
        </div>
    );
};

export default UsernamePasswordForm;
